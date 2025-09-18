import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video-bg">
        <iframe
          src="https://www.youtube.com/embed/GCft0RILJns?autoplay=1&mute=1&loop=1&playlist=GCft0RILJns&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Hero Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>


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
