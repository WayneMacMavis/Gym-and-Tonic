import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './ProgramEditor.scss';

export default function ProgramEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [programName, setProgramName] = useState(id === 'new' ? '' : 'Sample Program');
  const [weeks, setWeeks] = useState([{ week: 1, days: [] as string[] }]);

  const addWeek = () => setWeeks([...weeks, { week: weeks.length + 1, days: [] }]);
  const addDay = (wIdx: number) => {
    const next = [...weeks];
    next[wIdx].days.push(`Day ${next[wIdx].days.length + 1}`);
    setWeeks(next);
  };

  const saveProgram = () => {
    // For now just log — later hook into localStorage or backend
    console.log('Program saved:', { programName, weeks });
  };

  return (
    <div className="card program-editor">
      <h1>📘 Program Editor</h1>
      <input
        type="text"
        value={programName}
        onChange={(e) => setProgramName(e.target.value)}
        placeholder="Program name"
      />

      {weeks.map((wk, wIdx) => (
        <div key={wk.week} className="week">
          <h2>Week {wk.week}</h2>
          <button className="btn secondary" onClick={() => addDay(wIdx)}>➕ Add Day</button>
          <ul>
            {wk.days.map((day, dIdx) => (
              <li key={dIdx}>
                {day}
                <button
                  className="btn primary"
                  onClick={() => navigate(`/program/${id}/week/${wk.week}/day/${dIdx + 1}`)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="actions-row">
        <button className="btn primary" onClick={addWeek}>➕ Add Week</button>
        <button className="btn primary" onClick={saveProgram}>💾 Save Program</button>
        <button className="btn secondary" onClick={() => navigate('/build')}>← Back to Build</button>
      </div>
    </div>
  );
}