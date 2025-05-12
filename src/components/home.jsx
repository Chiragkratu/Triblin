import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Clipboard, Leaf, Award, BarChart4, Zap, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Offset Your Event's Carbon Footprint. Instantly.</h1>
          <p>
            Whether you're hosting a festival, a corporate offsite, or a city council event — 
            Triblin helps you calculate and offset your emissions in minutes.
          </p>
          <div className="hero-buttons">
            <Link to="/calculator" className="calculate_button">
              Calculate Emissions
            </Link>
            <a href="/how-it-works" className="working_button">
              See How It Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;