import { useNavigate } from 'react-router-dom';
import './Build.scss';

export default function Build() {
  const navigate = useNavigate();

  // Temporary mock programs — later you can replace with state or persistence
  const programs = [
    { id: '1', name: 'Push/Pull/Legs', weeks: 6 },
    { id: '2', name: 'Full Body Strength', weeks: 4 },
  ];

  return (
    <div className="card build">
      <header className="build-header">
        <h1>🏗️ Build Routine</h1>
        <p>Create and edit your workout programs.</p>
      </header>

      {/* Actions */}
      <section className="build-actions">
        <h2>Actions</h2>
        <div className="actions">
          <button className="btn primary" onClick={() => navigate('/program/new')}>
            ➕ New Program
          </button>
        </div>
      </section>

      {/* Program list */}
      <section className="program-list">
        <h2>My Programs</h2>
        {programs.length > 0 ? (
          <ul>
            {programs.map((program) => (
              <li key={program.id} onClick={() => navigate(`/program/${program.id}`)}>
                <span>{program.name}</span>
                <small>{program.weeks} weeks</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No programs yet. Start by creating one!</p>
        )}
      </section>

      {/* Back button */}
      <footer className="build-footer">
        <button className="btn secondary" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </footer>
    </div>
  );
}