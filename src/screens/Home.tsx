// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations once after mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home ${mounted ? "home--mounted" : ""}`}>
      <main className="home__main">
        {/* Hero Section */}
        <section className="home__hero">
          <h2>Welcome Back!</h2>
          <p>Track your progress and plan your next workout.</p>
          <button className="btn--primary">Start Workout</button>
        </section>

        {/* Streak Badge */}
        <section className="home__streak">
          <span className="streak-badge">🔥 7‑Day Streak</span>
        </section>

        {/* Stats */}
        <section className="home__stats">
          <h3>Your Stats</h3>
          <div className="stats-grid">
            <div className="stat">
              <span className="stat__label">Workouts</span>
              <span className="stat__value">24</span>
              <div className="progress">
                <div className="progress__bar" style={{ width: "80%" }} />
              </div>
            </div>
            <div className="stat">
              <span className="stat__label">Calories</span>
              <span className="stat__value">12,500</span>
              <div className="progress">
                <div className="progress__bar" style={{ width: "65%" }} />
              </div>
            </div>
            <div className="stat">
              <span className="stat__label">Minutes</span>
              <span className="stat__value">1,200</span>
              <div className="progress">
                <div className="progress__bar" style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Workouts */}
        <section className="home__upcoming">
          <h3>Upcoming Workouts</h3>
          <div className="upcoming-card">
            <h4>Leg Day</h4>
            <ul>
              <li>Squats</li>
              <li>Lunges</li>
              <li>Deadlifts</li>
            </ul>
          </div>
        </section>

        {/* Quote */}
        <section className="home__quote">
          <blockquote>
            “Discipline is choosing between what you want now and what you want most.”
          </blockquote>
        </section>

        {/* Actions */}
        <section className="home__actions">
          <button className="btn--secondary">View Library</button>
          <button className="btn--secondary">Add Workout</button>
        </section>

        {/* Cards */}
        <section className="home__cards">
          <div className="card">
            <h3>Progress Graphs</h3>
            <p>Visualize your weekly improvements.</p>
          </div>
          <div className="card">
            <h3>Workout Library</h3>
            <p>Browse and inject workouts into your plan.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home__footer">
        <p>
          Built with ❤️ by Wayne. <a href="#">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
