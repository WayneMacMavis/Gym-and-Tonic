import { useNavigate } from 'react-router-dom';
import { usePrograms } from '../context/ProgramContext';
import './Build.scss';

export default function Build() {
  const navigate = useNavigate();
  const { programs, addProgram, removeProgram } = usePrograms();

  const createProgram = () => {
    const newProgram = addProgram();
    navigate(`/program/${newProgram.id}`);
  };

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
          <button className="btn primary" onClick={createProgram}>
            ➕ New Program
          </button>
        </div>
      </section>

      {/* Program list with summary + delete */}
      <section className="program-list">
        <h2>My Programs</h2>
        {programs.length > 0 ? (
          <ul>
            {programs.map((program) => (
              <li key={program.id}>
                <div
                  className="program-summary"
                  onClick={() => navigate(`/program/${program.id}`)}
                >
                  <strong>{program.name}</strong>
                  <small>{program.weeks.length} week(s)</small>
                </div>
                <button
                  className="btn danger small"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent navigation
                    removeProgram(program.id);
                  }}
                >
                  ❌ Delete
                </button>
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