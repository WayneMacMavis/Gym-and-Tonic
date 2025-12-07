import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppStateContext } from '../state/AppStateContext';
import styles from './History.module.scss';

export default function History() {
  const { state } = useContext(AppStateContext);
  const navigate = useNavigate();

  const history = state.history || [];

  return (
    <div className={styles.history}>
      <button className="button mb-3" onClick={() => navigate('/')}>← Back to Build</button>
      <h1>Workout History</h1>

      {history.length === 0 ? (
        <p>No sessions completed yet.</p>
      ) : (
        <ul>
          {history.map((entry: any) => {
            const program = state.programs.find((p: any) => p.id === entry.programId);
            const day = program?.weeks[entry.weekIndex]?.days.find((d: any) => d.id === entry.dayId);

            return (
              <li key={entry.id} className="card">
                <strong>{program?.name || 'Unknown Program'} — {day?.name || 'Unknown Day'}</strong>
                <div className={styles.meta}>
                  {new Date(entry.completedAt).toLocaleString()}
                </div>

                {/* Exercises and sets at the time of session */}
                {day ? (
                  <ul className={styles.exercises}>
                    {day.exercises.map((ex: any) => (
                      <li key={ex.id}>
                        <span className={styles.exerciseName}>{ex.name}</span>
                        <ul className={styles.sets}>
                          {ex.sets.map((s: any, i: number) => {
                            const done = (entry.completedSets[ex.id] || []).includes(i);
                            return (
                              <li key={s.setNumber} className={done ? styles.done : ''}>
                                Set {s.setNumber}: {s.weight}kg × {s.reps} reps
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.warning}>This day was modified or removed after the session.</p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <div className={styles.actions}>
        <button className="button" onClick={() => navigate('/')}>🏠 Back to Build</button>
      </div>
    </div>
  );
}