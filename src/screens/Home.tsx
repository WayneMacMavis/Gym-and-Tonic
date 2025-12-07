import { useNavigate } from 'react-router-dom';
import InstallButton from '../components/InstallButton';
import './Home.scss';

export default function Home() {
  const navigate = useNavigate();

  const recentRoutines = [
    { id: 1, name: 'Push Day', lastDone: '2025-12-05' },
    { id: 2, name: 'Legs & Core', lastDone: '2025-12-03' },
  ];

  return (
    <div className="card home">
      {/* Welcome header */}
      <header className="home-header">
        <h1>🏋️ GymApp</h1>
        <p>Your fitness companion — track, build, and crush your goals.</p>
      </header>

      {/* Quick actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions">
          <button className="btn primary" onClick={() => navigate('/build')}>
            ➕ Build Routine
          </button>
          <button className="btn secondary" onClick={() => navigate('/train')}>
            ▶️ Start Session
          </button>
        </div>
      </section>

      {/* Recent routines */}
      <section className="recent-routines">
        <h2>Recent Routines</h2>
        {recentRoutines.length > 0 ? (
          <ul>
            {recentRoutines.map(routine => (
              <li key={routine.id}>
                <span>{routine.name}</span>
                <small>Last done: {routine.lastDone}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No routines yet. Start building one!</p>
        )}
      </section>

      {/* Stats snapshot */}
      <section className="stats">
        <h2>📊 Progress</h2>
        <p>Last workout: Dec 5, 2025</p>
        <p>Current streak: 3 days</p>
      </section>

      {/* Motivation */}
      <section className="motivation">
        <h2>💡 Motivation</h2>
        <p>"Consistency beats intensity. Show up every day."</p>
      </section>

      {/* Upcoming session */}
      <section className="upcoming">
        <h2>Upcoming Session</h2>
        <p>Monday — Pull Day (Week 3, Day 1)</p>
      </section>

      {/* Progress bar */}
      <section className="progress-bar">
        <h2>Weekly Goal</h2>
        <div className="bar">
          <div className="fill" style={{ width: '60%' }}></div>
        </div>
        <small>3 of 5 sessions completed</small>
      </section>

      {/* Install button */}
      <footer className="home-footer">
        <InstallButton />
      </footer>
    </div>
  );
}