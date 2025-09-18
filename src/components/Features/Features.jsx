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
      {/* ✨ New full-width image highlight section */}
      <div className="highlight-section">
        <div className="highlight-overlay"></div>
        <img src={`${import.meta.env.BASE_URL}highlight.jpg`} alt="CEFI Highlight" className="highlight-image" />
      </div>
    </section>
  );
}


export default Features;
