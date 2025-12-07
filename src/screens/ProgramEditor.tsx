import { useNavigate, useParams } from "react-router-dom";
import { usePrograms } from "../context/ProgramContext";
import type { Program } from "../context/ProgramContext";
import { getSuggestionsForWorkoutName } from "../utils/getSuggestions";
import "./ProgramEditor.scss";

export default function ProgramEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, updateProgram } = usePrograms();

  const program = programs.find((p) => p.id === id);
  if (!program) {
    return (
      <div className="program-editor card">
        <h1>Program not found</h1>
        <button className="btn secondary" onClick={() => navigate("/build")}>
          ← Back to Build
        </button>
      </div>
    );
  }

  const setProgramName = (name: string) => {
    const updated: Program = { ...program, name };
    updateProgram(updated);
  };

  return (
    <div className="program-editor card">
      <header>
        <h1>{program.name}</h1>
        <input
          type="text"
          value={program.name}
          onChange={(e) => setProgramName(e.target.value)}
          placeholder="Program name"
        />
      </header>

      {/* Weeks */}
      {program.weeks.map((week, wIdx) => (
        <div key={wIdx} className="week-card">
          <h2>Week {week.week}</h2>
          <div className="day-list">
            {week.days.map((day, dIdx) => {
              const suggestions = getSuggestionsForWorkoutName(day.workoutName ?? "");
              return (
                <div key={dIdx} className="day-item">
                  <span>
                    {day.name} — {day.workoutName || "Untitled"}
                  </span>
                  <button
                    className="btn secondary small"
                    onClick={() =>
                      navigate(`/day/${program.id}/${wIdx + 1}/${dIdx + 1}`)
                    }
                  >
                    ✏️ Edit
                  </button>

                  {/* Suggestions preview */}
                  {suggestions.length > 0 && (
                    <div className="suggestions-preview">
                      <h3>Suggested Exercises</h3>
                      <ul>
                        {suggestions.slice(0, 4).map((ex) => (
                          <li key={ex.name}>
                            <div className="exercise-card">
                              <strong>{ex.name}</strong>
                              <img
                                src={ex.musclesImage}
                                alt={`${ex.category} muscles`}
                                className="muscle-image"
                              />
                              <a
                                href={ex.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                ▶️ Tutorial
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <footer className="actions-row">
        <button className="btn secondary" onClick={() => navigate("/build")}>
          ← Back to Build
        </button>
      </footer>
    </div>
  );
}