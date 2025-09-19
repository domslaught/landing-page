import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      {/* Video Background */}
      <video autoPlay muted loop className="hero-video-bg">
        <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="videoZmp4" />
      </video>



      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-left">
        {/* Driven by Honor, Guided by Excellence */}
        <h2 className="custom-heading">Be A Cefizen</h2>
        <p>
          Cefizen are leaders in the making —  fueled by passion, guided by purpose, and driven to uplift others.
          At CEFI, being a Cefizen means standing together in honor, striving for excellence, and living with purpose.
        </p>
        <div className="hero-buttons">
          <button className="secondary-btn">EXPLORE PROGRAMS</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
