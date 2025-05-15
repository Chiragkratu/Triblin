import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Clipboard, Leaf, Award, BarChart4, Zap, Globe } from 'lucide-react';
import earth from '../assets/images/earth.webp';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className='heading'>Measure Offset Lead <br/> Build a Triple Bottom Line Future </h1>

          <p style={{fontFamily:'Times New Roman', fontSize:'1.5rem', color:'white'}}>
            Triblin is a sustainability intelligence platform helping governments, enterprises, and communities track and improve their impact across People, Planet, and Profit — starting with verified carbon offsetting for events.
          </p>
          <div className="hero-buttons">
            <Link to="/calculator" className="hero_button">
              Offset Your Event
            </Link>
            <Link to="/how-it-works" className="hero_button">
              Learn more about Triblin
            </Link>
          </div>
        </div>
      </section>

      <section className='why-triblin'>
          <h1>Sustainability Isn’t Just Carbon. <br /> It’s a Whole-System Responsibility.</h1>
          <br />
          <div className='why-triblin-cards'>
            <div>
              <img src={earth} alt="" style={{height:400,width:400, borderRadius:'5rem'}}/>
            </div>
            <div>
              <h2>The future of accountability is integrated. <br /> Triblin is built on the Triple Bottom Line — a framework that balances:</h2>
              <ul className='triblin-list'>
                <li>
                  People – social equity, fair labor, accessibility, and well-being
                </li>
                <li>
                  Planet – carbon emissions, ecological stewardship, climate resilience
                </li>
                <li>
                  Profit – transparent finance, ethical growth, and value beyond shareholders
                </li>
              </ul>
              <p style={{fontSize:'20px'}}>We’re starting with fast, affordable carbon offsetting for events — but that’s just the beginning.</p>

              <button className='hero_button'>Explore the Triple Bottom Line →</button>
            </div>
          </div>
      </section>

      <section className="goverments_enterprices">
        <h1>Purpose-Driven Tools <br /> for Public and Corporate Impact</h1>
        <h2>Triblin helps local councils, government agencies, and ESG-aligned companies lead with integrity. <br /> Whether you need Scope 3 alignment, grant-eligible data, or simple project-level offsetting — we’re ready to partner.</h2>

        <ul className='goverments-enterprises-list'>
                <li>
                  Australian data compliance & reporting readiness
                </li>
                <li>
                  Fully verifiable carbon transactions
                </li>
                <li>
                  Coming soon: ESG consultant marketplace + impact dashboards
                </li>
        </ul>
        <button className='hero_button'>Partner with us</button>
        
      </section>
    </div>
  );
};

export default Home;