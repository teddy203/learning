// Categories.js
import React, { useState } from 'react';
// import DeleteButton from './DeleteButton';

function Categories() {
  const [exercises, setExercises] = useState([
    { id: 1, title: 'Exercise One', author: 'Author One', rating: 0, comments: [] },
    { id: 2, title: 'Exercise Two', author: 'Author Two', rating: 0, comments: [] },
    { id: 3, title: 'Exercise Three', author: 'Author Three', rating: 0, comments: [] },
  ]);

  const handleDelete = (id) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Exercise Categories</h1>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id} className="mb-2 p-2 border rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl">{exercise.title}</h2>
                <p className="text-gray-600">Author: {exercise.author}</p>
              </div>
              <DeleteButton onDelete={() => handleDelete(exercise.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
