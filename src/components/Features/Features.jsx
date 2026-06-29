import './Features.css';

const news = [
  {
    img: `${import.meta.env.BASE_URL}news1.jpg`,
    title: "CEFI Bags Regional Academic Award",
    summary: "CEFI proudly received top honors at the Region IV-A academic competition...",
  },
  {
    img: `${import.meta.env.BASE_URL}school2.png`,
    title: "New Research Center Launched",
    summary: "CEFI officially inaugurated its state-of-the-art Research Center...",
  },
  {
    img: `${import.meta.env.BASE_URL}news3.jpg`,
    title: "2025 Enrollment Now Open",
    summary: "Enrollment for School Year 2025–2026 is now open...",
  },
  {
    img: `${import.meta.env.BASE_URL}news4.jpg`,
    title: "CEFI Extends Community Relief Drive",
    summary: "Through its continuous outreach initiatives, CEFI successfully distributed...",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="news-grid">
        {news.map((item, index) => (
          <div key={index} className={`news-card card-${index}`}>
            <img src={item.img} alt={item.title} className="news-image" />
            <div className="news-overlay">
              <div className="news-gradient"></div>
              <div className="news-content">
                <h4 className="news-title">{item.title}</h4>
                <p className="news-summary">{item.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CEFI Highlight / CTA Section ── */}
      <div className="highlight-section">
        <img
          src={`${import.meta.env.BASE_URL}highlight.jpg`}
          alt="CEFI Highlight"
          className="highlight-image"
        />
        <div className="highlight-overlay" />
        <div className="highlight-cta">
          <span className="highlight-eyebrow">Your Future Starts Here</span>
          <h2 className="highlight-headline">
            Shape Who<br />You Become.
          </h2>
          <p className="highlight-body">
            At CEFI, we don't just hand you a degree — we build the leader inside you. 
            With over five decades of proven academic excellence, three international 
            partnerships, and a campus culture that champions honor, service, and grit, 
            there is no better place to invest in yourself. Join thousands of Cefizens 
            who went on to lead in nursing, business, law enforcement, education, and beyond.
            <br /><br />
            <strong>Your chapter starts at CEFI. Enroll today.</strong>
          </p>
          <button className="highlight-btn">BEGIN YOUR APPLICATION →</button>
        </div>
      </div>
    </section>
  );
}

export default Features;
