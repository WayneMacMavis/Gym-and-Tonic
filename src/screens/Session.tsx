import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppStateContext } from '../state/AppStateContext';
import styles from './Session.module.scss';

export default function Session() {
  const { state, dispatch } = useContext(AppStateContext);
  const { programId, week, day } = useParams();
  const navigate = useNavigate();

  const program = state.programs.find((p: any) => p.id === programId);
  if (!program) return <div className="card">Program not found.</div>;

  const dayObj = program.weeks[Number(week)].days.find((d: any) => d.id === day);
  if (!dayObj) return <div className="card">Day not found.</div>;

  const [completedSets, setCompletedSets] = useState<Record<string, number[]>>({});

  function toggleSet(exerciseId: string, setIndex: number) {
    const current = completedSets[exerciseId] || [];
    const isDone = current.includes(setIndex);
    const updated = isDone ? current.filter((i) => i !== setIndex) : [...current, setIndex];
    setCompletedSets({ ...completedSets, [exerciseId]: updated });
  }

  function endSession() {
    const historyEntry = {
      id: crypto.randomUUID(),
      programId,
      weekIndex: Number(week),
      dayId: day,
      completedAt: Date.now(),
      completedSets,
    };
    dispatch({ type: 'END_SESSION', payload: { historyEntry } });
    navigate('/history'); // ✅ go straight to History
  }

  return (
    <div className={styles.session}>
      <button className="button mb-3" onClick={() => navigate(-1)}>← Back</button>
      <h1>{dayObj.name} — Live Session</h1>

      <ul className="mt-4">
        {dayObj.exercises.map((ex: any) => (
          <li key={ex.id} className="card">
            <strong>{ex.name}</strong>
            <div className={styles.sets}>
              {ex.sets.map((s: any, i: number) => {
                const done = (completedSets[ex.id] || []).includes(i);
                return (
                  <div key={s.setNumber} className={`${styles.setRow} ${done ? styles.done : ''}`}>
                    <span>Set {s.setNumber}</span>
                    <span>{s.weight}kg × {s.reps} reps</span>
                    <button className="button" onClick={() => toggleSet(ex.id, i)}>
                      {done ? 'Undo' : 'Complete'}
                    </button>
                  </div>
                );
              })}
            </div>
          </li>
        ))}
      </ul>

      <button className="button mt-4" onClick={endSession}>Finish Session</button>
    </div>
  );
}