import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './DayEditor.scss';

export default function DayEditor() {
  const { id, week, day } = useParams();
  const navigate = useNavigate();

  const [workoutName, setWorkoutName] = useState('');
  const [exercises, setExercises] = useState<string[]>([]);
  const [newExercise, setNewExercise] = useState('');

  const addExercise = () => {
    if (!newExercise.trim()) return;
    setExercises([...exercises, newExercise.trim()]);
    setNewExercise('');
  };

  return (
    <div className="card day-editor">
      <h1>Week {week}, Day {day}</h1>

      {/* Workout name */}
      <input
        type="text"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        placeholder="Workout name"
      />

      {/* Add exercise */}
      <div className="exercise-form">
        <input
          type="text"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          placeholder="Exercise name"
        />
        <button className="btn primary" onClick={addExercise}>➕ Add Exercise</button>
      </div>

      {/* Exercise list */}
      <ul>
        {exercises.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>

      {/* Back button */}
      <footer className="actions-row">
        <button className="btn secondary" onClick={() => navigate(`/program/${id}`)}>
          ← Back to Program
        </button>
      </footer>
    </div>
  );
}