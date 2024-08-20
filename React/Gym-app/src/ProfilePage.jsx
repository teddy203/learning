import React, { useState } from 'react';

const ProfilePage = () => {
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');
  const [exerciseProgress, setExerciseProgress] = useState([]);

  const calculateBmi = (event) => {
    event.preventDefault();
    let weightInKg = weight;
    let heightInMeters = height;

    if (unit === 'imperial') {
      heightInMeters = height * 0.0254;
      weightInKg = weight * 0.453592;
    } else {
      heightInMeters = height / 100;
    }

    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let status = '';
    if (bmiValue < 18.5) {
      status = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      status = 'Healthy';
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }
    setBmiStatus(status);
  };

  const addExerciseProgress = (event) => {
    event.preventDefault();
    const form = event.target;
    const newProgress = {
      exercise: form.exercise.value,
      repsOrDistance: form.repsOrDistance.value,
      weightIncreaseOrDistance: form.weightIncreaseOrDistance.value,
      target: form.target.value,
    };
    setExerciseProgress([...exerciseProgress, newProgress]);
    form.reset();
  };

  const deleteExerciseProgress = (index) => {
    const updatedProgress = exerciseProgress.filter((_, i) => i !== index);
    setExerciseProgress(updatedProgress);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <form onSubmit={calculateBmi} className="space-y-4">
        <div>
          <label className="block text-lg">Unit:</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, inches)</option>
          </select>
        </div>
        <div>
          <label className="block text-lg">Weight ({unit === 'metric' ? 'kg' : 'lbs'}):</label>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Height ({unit === 'metric' ? 'cm' : 'inches'}):</label>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Calculate BMI
        </button>
      </form>
      <p className="mt-4 text-lg">BMI: {bmi}</p>
      <p className="mt-2 text-lg">Weight Status: {bmiStatus}</p>

      <h2 className="text-xl font-semibold mt-6">Exercise Progress</h2>
      <form onSubmit={addExerciseProgress} className="space-y-4">
        <div>
          <label className="block text-lg">Exercise:</label>
          <input
            name="exercise"
            type="text"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Reps/Distance:</label>
          <input
            name="repsOrDistance"
            type="text"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Weight Increase/Distance:</label>
          <input
            name="weightIncreaseOrDistance"
            type="text"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label className="block text-lg">Target:</label>
          <input
            name="target"
            type="text"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Progress
        </button>
      </form>

      <div className="mt-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Exercise</th>
              <th className="py-2 px-4 border">{unit === 'metric' ? 'Distance (km)' : 'Reps'}</th>
              <th className="py-2 px-4 border">{unit === 'metric' ? 'Distance (km)' : 'Weight Increase (kg)'}</th>
              <th className="py-2 px-4 border">Target</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {exerciseProgress.map((progress, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{progress.exercise}</td>
                <td className="py-2 px-4 border">{progress.repsOrDistance}</td>
                <td className="py-2 px-4 border">{progress.weightIncreaseOrDistance}</td>
                <td className="py-2 px-4 border">{progress.target}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => deleteExerciseProgress(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
