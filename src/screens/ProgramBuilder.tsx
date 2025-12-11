// src/pages/Program.tsx
import React, { useEffect, useState } from "react";
import "./ProgramBuilder.scss";

type Exercise = { id: number; name: string };
type Day = { exercises: Exercise[]; overridden?: boolean };
type Week = { days: Day[] };

const Program: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [weeks, setWeeks] = useState<Week[]>([
    { days: [{ exercises: [] }] }
  ]);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Add/remove weeks
  const addWeek = () => {
    const baseWeek = weeks[0];
    const newWeek: Week = {
      days: baseWeek.days.map((day) => ({
        exercises: [...day.exercises],
      })),
    };
    setWeeks([...weeks, newWeek]);
    setSelectedWeek(weeks.length);
    setSelectedDay(0);
  };

  const removeWeek = (index: number) => {
    if (weeks.length > 1) {
      const updated = weeks.filter((_, i) => i !== index);
      setWeeks(updated);
      setSelectedWeek(0);
      setSelectedDay(0);
    }
  };

  // Add/remove days
  const addDay = () => {
    if (weeks[selectedWeek].days.length < 7) {
      const updatedWeeks = [...weeks];
      const baseDayIndex = weeks[selectedWeek].days.length;
      const baseDay = weeks[0].days[baseDayIndex] || { exercises: [] };

      updatedWeeks.forEach((week, wIndex) => {
        week.days.push({
          exercises: wIndex === 0 ? [] : [...baseDay.exercises],
        });
      });

      setWeeks(updatedWeeks);
      setSelectedDay(weeks[selectedWeek].days.length - 1);
    }
  };

  const removeDay = (dayIndex: number) => {
    if (weeks[selectedWeek].days.length > 1) {
      const updatedWeeks = weeks.map((week) => {
        const newDays = week.days.filter((_, i) => i !== dayIndex);
        return { ...week, days: newDays };
      });
      setWeeks(updatedWeeks);
      setSelectedDay(0);
    }
  };

  // Add/remove exercises
  const addExercise = (exerciseName: string) => {
    const updatedWeeks = [...weeks];
    const exercise: Exercise = { id: Date.now(), name: exerciseName };

    if (selectedWeek === 0) {
      updatedWeeks.forEach((week) => {
        if (!week.days[selectedDay].overridden) {
          week.days[selectedDay] = {
            ...week.days[selectedDay],
            exercises: [...week.days[selectedDay].exercises, exercise],
          };
        }
      });
    } else {
      updatedWeeks[selectedWeek].days[selectedDay] = {
        ...updatedWeeks[selectedWeek].days[selectedDay],
        exercises: [
          ...updatedWeeks[selectedWeek].days[selectedDay].exercises,
          exercise,
        ],
        overridden: true,
      };
    }

    setWeeks(updatedWeeks);
  };

  const removeExercise = (exerciseId: number) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[selectedWeek].days[selectedDay] = {
      ...updatedWeeks[selectedWeek].days[selectedDay],
      exercises: updatedWeeks[selectedWeek].days[selectedDay].exercises.filter(
        (ex) => ex.id !== exerciseId
      ),
      overridden: selectedWeek !== 0 ? true : updatedWeeks[selectedWeek].days[selectedDay].overridden,
    };
    setWeeks(updatedWeeks);
  };

  return (
    <div className={`program ${mounted ? "program--mounted" : ""}`}>
      <main className="program__main">
        {/* Hero */}
        <section className="program__hero">
          <h2>Create Your Program</h2>
          <p>Design routines across weeks and days.</p>
          <div className="action-bar">
            <button className="btn--primary" onClick={addWeek}>+ Add Week</button>
            {weeks.length > 1 && (
              <button className="btn--secondary" onClick={() => removeWeek(selectedWeek)}>
                − Remove Week
              </button>
            )}
          </div>
        </section>

        {/* Week Selector */}
        <section className="program__weeks">
          <h3>Select Week</h3>
          <div className="week-grid">
            {weeks.map((_, index) => (
              <button
                key={index}
                className={`week-btn ${selectedWeek === index ? "week-btn--active" : ""}`}
                onClick={() => setSelectedWeek(index)}
              >
                Week {index + 1}
              </button>
            ))}
          </div>
        </section>

        {/* Day Selector */}
        <section className="program__days">
          <h3>Select Day</h3>
          <div className="day-grid">
            {weeks[selectedWeek].days.map((_, i) => (
              <button
                key={i}
                className={`day-btn ${selectedDay === i ? "day-btn--active" : ""}`}
                onClick={() => setSelectedDay(i)}
              >
                Day {i + 1}
              </button>
            ))}
          </div>
          <div className="action-bar">
            <button className="btn--secondary" onClick={addDay}>+ Add Day</button>
            {weeks[selectedWeek].days.length > 1 && (
              <button className="btn--secondary" onClick={() => removeDay(selectedDay)}>
                − Remove Day
              </button>
            )}
          </div>
        </section>

        {/* Workout Builder */}
        <section className="program__workout">
          <h3>
            Week {selectedWeek + 1} — Day {selectedDay + 1}
          </h3>
          <div className="workout-card">
            <p>Add exercises for this day:</p>
            <div className="action-bar">
              <button
                className="btn--secondary"
                onClick={() => addExercise("New Exercise")}
              >
                + Add Exercise
              </button>
            </div>
            <ul className="exercise-list">
              {weeks[selectedWeek].days[selectedDay].exercises.map((ex) => (
                <li key={ex.id} className="exercise-item">
                  <span>{ex.name}</span>
                  <button
                    className="btn--icon"
                    onClick={() => removeExercise(ex.id)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="program__footer">
        <small>© 2025 GymTrack</small>
      </footer>
    </div>
  );
};

export default Program;
