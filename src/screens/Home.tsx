// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home ${mounted ? "home--mounted" : ""}`}>
      <main className="home__main">
        {/* Hero */}
        <section className="home__hero">
          <h2>Build. Track. Achieve.</h2>
          <p>Your gym journey, simplified and motivating.</p>
          <button className="btn--primary">Start Workout</button>
        </section>

        {/* Streak Badge */}
        <section className="home__streak">
          <span className="streak-badge">🔥 7‑Day Streak</span>
        </section>

        {/* Stats */}
        <section className="home__stats">
          <h3>Your Weekly Stats</h3>
          <div className="stats-grid">
            <div className="stat">
              <span className="stat__label">Workouts</span>
              <span className="stat__value">4/7</span>
              <div className="progress">
                <div className="progress__bar" style={{ width: "57%" }} />
              </div>
            </div>
            <div className="stat">
              <span className="stat__label">Minutes</span>
              <span className="stat__value">1,200</span>
              <div className="progress">
                <div className="progress__bar" style={{ width: "50%" }} />
              </div>
            </div>
            <div className="stat">
              <span className="stat__label">Personal Best</span>
              <span className="stat__value">Bench Press 120 kg</span>
            </div>
          </div>
        </section>

        {/* Upcoming Workout */}
        <section className="home__upcoming">
          <h3>Next Workout</h3>
          <div className="upcoming-card">
            <h4>Thursday — Leg Day</h4>
            <ul>
              <li>Squats</li>
              <li>Deadlifts</li>
              <li>Lunges</li>
            </ul>
          </div>
        </section>

        {/* Quote */}
        <section className="home__quote">
          <blockquote>
            “Push yourself, because no one else is going to do it for you.”
          </blockquote>
        </section>

        {/* Quick Actions */}
        <section className="home__actions">
          <button className="btn--secondary">Log Workout</button>
          <button className="btn--secondary">View Progress</button>
          <button className="btn--secondary">Add Exercise</button>
        </section>

        {/* Feature Cards */}
        <section className="home__cards">
          <div className="card">
            <h3>Programs</h3>
            <p>Custom routines tailored to your goals.</p>
          </div>
          <div className="card">
            <h3>Progress</h3>
            <p>Visualize your gains and milestones.</p>
          </div>
        </section>
      </main>

      <footer className="home__footer">
        <small>© 2025 GymTrack</small>
      </footer>
    </div>
  );
};

export default Home;
