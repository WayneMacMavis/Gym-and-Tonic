import { useParams, useNavigate } from 'react-router-dom';
import { usePrograms } from '../context/ProgramContext';
import type { Program } from '../context/ProgramContext';
import { getSuggestionsForWorkoutName } from '../utils/getSuggestions';
import './DayEditor.scss';

export default function DayEditor() {
  const { id, week, day } = useParams();
  const navigate = useNavigate();
  const { programs, updateProgram } = usePrograms();

  const program = programs.find((p) => p.id === id);
  if (!program) {
    return (
      <div className="card day-editor">
        <h1>Program not found</h1>
        <button className="btn secondary" onClick={() => navigate('/build')}>
          ← Back to Build
        </button>
      </div>
    );
  }

  // Params are 1-based in your routes; convert to 0-based for arrays
  const wIdx = week ? parseInt(week, 10) - 1 : 0;
  const dIdx = day ? parseInt(day, 10) - 1 : 0;
  const theWeek = program.weeks[wIdx];
  const theDay = theWeek?.days[dIdx];

  if (!theWeek || !theDay) {
    return (
      <div className="card day-editor">
        <h1>Invalid week/day</h1>
        <button className="btn secondary" onClick={() => navigate(`/program/${program.id}`)}>
          ← Back to Program
        </button>
      </div>
    );
  }

  const setWorkoutName = (name: string) => {
    const updatedWeeks = [...program.weeks];
    updatedWeeks[wIdx].days[dIdx] = { ...theDay, workoutName: name };
    const updated: Program = { ...program, weeks: updatedWeeks };
    updateProgram(updated);
  };

  const addExercise = (exercise: string) => {
    const trimmed = exercise.trim();
    if (!trimmed) return;
    const updatedWeeks = [...program.weeks];
    updatedWeeks[wIdx].days[dIdx] = {
      ...theDay,
      exercises: [...theDay.exercises, trimmed],
    };
    const updated: Program = { ...program, weeks: updatedWeeks };
    updateProgram(updated);
  };

  const removeExercise = (idx: number) => {
    const updatedWeeks = [...program.weeks];
    updatedWeeks[wIdx].days[dIdx] = {
      ...theDay,
      exercises: theDay.exercises.filter((_, i) => i !== idx),
    };
    const updated: Program = { ...program, weeks: updatedWeeks };
    updateProgram(updated);
  };

  // Smart suggestions based on your workoutName (e.g., "Chest, Trisep, Back, Bisep")
  const suggestions = getSuggestionsForWorkoutName(theDay.workoutName ?? '');

  return (
    <div className="card day-editor">
      <h1>📅 {theDay.name} — Week {wIdx + 1}, Day {dIdx + 1}</h1>

      {/* Workout name */}
      <section className="workout-name">
        <label>Workout name</label>
        <input
          type="text"
          value={theDay.workoutName ?? ''}
          onChange={(e) => setWorkoutName(e.target.value)}
          placeholder="e.g. Chest, Trisep, Back, Bisep"
        />
      </section>

      {/* Add exercise */}
      <section className="exercise-form">
        <label>New exercise</label>
        <div className="row">
          <input
            type="text"
            placeholder="e.g. Bench Press"
            onKeyDown={(e) => {
              if (e.key === 'Enter') addExercise((e.target as HTMLInputElement).value);
            }}
          />
          <button
            className="btn primary"
            onClick={() => {
              const input = document.querySelector<HTMLInputElement>('.exercise-form input');
              if (input) {
                addExercise(input.value);
                input.value = '';
              }
            }}
          >
            ➕ Add
          </button>
        </div>
      </section>

      {/* Exercise list */}
      <section className="exercise-list">
        <h2>Exercises</h2>
        {theDay.exercises.length > 0 ? (
          <ul>
            {theDay.exercises.map((ex, idx) => (
              <li key={idx}>
                <span>{ex}</span>
                <button className="btn secondary small" onClick={() => removeExercise(idx)}>
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted">No exercises yet</p>
        )}
      </section>

      {/* Suggested exercises (name + muscle image + tutorial + add) */}
      {suggestions.length > 0 && (
        <section className="exercise-suggestions">
          <h2>Suggested exercises</h2>
          <ul>
            {suggestions.map((ex) => (
              <li key={ex.name}>
                <div className="exercise-card">
                  <strong>{ex.name}</strong>
                  <img
                    src={ex.musclesImage}
                    alt={`${ex.category} muscles`}
                    className="muscle-image"
                  />
                  <a href={ex.videoUrl} target="_blank" rel="noopener noreferrer">
                    ▶️ Tutorial
                  </a>
                  <button
                    className="btn secondary small"
                    onClick={() => addExercise(ex.name)}
                  >
                    ➕ Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Back button */}
      <footer className="actions-row">
        <button className="btn secondary" onClick={() => navigate(`/program/${program.id}`)}>
          ← Back to Program
        </button>
      </footer>
    </div>
  );
}