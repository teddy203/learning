import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ExerciseApp = () => {
  const [exercises, setExercises] = useState([
    { id: 1, category: 'Type: cardio, olympic weightlifting, plyometrics, powerlifting, strength, stretching, strongman', title: 'type', rating: 0, comments: [], searchResults: [] },
    { id: 2, category: 'Muscle', title: 'muscle', rating: 0, comments: [], searchResults: [] },
  ]);
  const [savedExercises, setSavedExercises] = useState([]);
  const [viewSaved, setViewSaved] = useState(false);

  const rateExercise = (id, rating) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === id ? { ...exercise, rating } : exercise
      )
    );
  };

  const addComment = (id, comment) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === id ? { ...exercise, comments: [...exercise.comments, comment] } : exercise
      )
    );
  };

  const deleteComment = (exerciseId, commentIndex) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === exerciseId
          ? { ...exercise, comments: exercise.comments.filter((_, index) => index !== commentIndex) }
          : exercise
      )
    );
  };

  const deleteRating = (id) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === id ? { ...exercise, rating: 0 } : exercise
      )
    );
  };

  const handleSearch = async (id, query, title) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?${title}=${query}`, {
        headers: { 'X-Api-Key': '2TXB3NfzcDA9OtxTnx763Q==plKPj3leiS8pd2vu' }
      });
      const data = await response.json();
      setExercises(prevExercises =>
        prevExercises.map(exercise =>
          exercise.id === id ? { ...exercise, searchResults: data } : exercise
        )
      );
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const saveExercise = (exercise) => {
    setSavedExercises(prevSavedExercises => [...prevSavedExercises, exercise]);
    alert('Exercise saved!');
  };

  const deleteSavedExercise = (id) => {
    setSavedExercises(prevSavedExercises =>
      prevSavedExercises.filter(exercise => exercise.id !== id)
    );
    alert('Exercise deleted!');
  };

  const shareExercise = (exercise) => {
    const shareText = `Check out this exercise: ${exercise.name} (${exercise.type})`;
    const exerciseUrl = `https://example.com/exercises/${exercise.id}`;

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(exerciseUrl)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(exerciseUrl)}&quote=${encodeURIComponent(shareText)}`;

    return (
      <div className="flex space-x-2 mt-2">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded">
          Share on Twitter
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700 text-white rounded">
          Share on Facebook
        </a>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Exercise Categories</h1>
      <button
        onClick={() => setViewSaved(!viewSaved)}
        className="mb-4 px-4 py-2 bg-purple-500 text-white rounded"
      >
        {viewSaved ? 'View All Exercises' : 'View Saved Exercises'}
      </button>

      {viewSaved ? (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Saved Exercises</h2>
          {savedExercises.length === 0 ? (
            <p>No exercises saved yet.</p>
          ) : (
            savedExercises.map(exercise => (
              <div key={exercise.id} className="border p-4 rounded shadow bg-white">
                <h2 className="text-xl font-semibold">{exercise.category}</h2>
                <p><strong>Name:</strong> {exercise.name}</p>
                <p><strong>Type:</strong> {exercise.type}</p>
                <p><strong>Muscle Group:</strong> {exercise.muscle}</p>
                <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                {shareExercise(exercise)}
                <button
                  onClick={() => deleteSavedExercise(exercise.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {exercises.map(exercise => (
            <div key={exercise.id} className="border p-4 rounded shadow bg-white">
              <h2 className="text-xl font-semibold">{exercise.category}</h2>
              <div className="mt-2">
                <span>Rate this Exercise: </span>
                {[1, 2, 3, 4, 5].map(rating => (
                  <button
                    key={rating}
                    onClick={() => rateExercise(exercise.id, rating)}
                    className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    {rating}
                  </button>
                ))}
              </div>
              <div className="mt-2">
                <span>Current Rating: {exercise.rating}</span>
                {exercise.rating > 0 && (
                  <button
                    onClick={() => deleteRating(exercise.id)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete Rating
                  </button>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Comments</h3>
                <input
                  placeholder="Add a comment"
                  type="text"
                  className="border rounded px-2 py-1 mr-2"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addComment(exercise.id, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <button
                  onClick={() => addComment(exercise.id, 'New comment')}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Add Comment
                </button>
                <div className="mt-2 space-y-2">
                  {exercise.comments.map((comment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <p>{comment}</p>
                      <button
                        onClick={() => deleteComment(exercise.id, index)}
                        className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Search Exercises</h3>
                <input
                  type="text"
                  placeholder="Search exercises"
                  className="border rounded px-2 py-1 mr-2"
                  id={`search-${exercise.id}`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(exercise.id, e.target.value, exercise.title);
                    }
                  }}
                />
                <button
                  onClick={() => handleSearch(exercise.id, document.querySelector(`#search-${exercise.id}`).value, exercise.title)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Search
                </button>
                <div className="mt-2">
                  {exercise.searchResults.map(result => (
                    <div key={result.id} className="p-2 border rounded mt-2">
                      <p><strong>Name:</strong> {result.name}</p>
                      <p><strong>Type:</strong> {result.type}</p>
                      <p><strong>Muscle Group:</strong> {result.muscle}</p>
                      <p><strong>Difficulty:</strong> {result.difficulty}</p>
                      <button
                        onClick={() => saveExercise(result)}
                        className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded"
                      >
                        Save
                      </button>
                      {shareExercise(result)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ExerciseApp;
