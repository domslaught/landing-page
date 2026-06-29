import './Announcements.css';

const announcements = [
  {
    date: 'JUN 28',
    year: '2025',
    category: 'ENROLLMENT',
    headline: 'SY 2025–2026 Enrollment Now Open',
    body: 'Online and on-site enrollment for all year levels is now accepted. Visit the Registrar\'s Office or the Student Portal for step-by-step guidance.',
  },
  {
    date: 'JUN 20',
    year: '2025',
    category: 'SCHOLARSHIP',
    headline: 'CHED Scholarship Applications — Deadline Extended',
    body: 'Students who qualify for CHED Full and Partial Merit scholarships have until July 15 to submit complete documentary requirements.',
  },
  {
    date: 'JUN 10',
    year: '2025',
    category: 'ACHIEVEMENT',
    headline: 'CEFI Nursing Grads Post 97% NLE Pass Rate',
    body: 'The College of Nursing congratulates 2025 board passers. CEFI continues to rank among the top Nursing schools in Region IV-A.',
  },
  {
    date: 'MAY 30',
    year: '2025',
    category: 'EVENT',
    headline: 'PRISAA Regional Meet — CEFI Claims Multiple Medals',
    body: 'Cefizen athletes dominated the PRISAA Regional Meet, bringing home gold in athletics, chess, and swimming events.',
  },
];

function Announcements() {
  return (
    <section className="announcements-section" id="announcements">
      <div className="announcements-inner">

        <div className="announcements-header">
          <span className="announcements-eyebrow">Campus Pulse</span>
          <h2 className="announcements-title">Latest Announcements</h2>
          <div className="announcements-rule" />
        </div>

        <div className="announcements-list">
          {announcements.map((item, i) => (
            <article className="announcement-item" key={i}>
              {/* Date stamp column */}
              <div className="announcement-date">
                <span className="date-day">{item.date}</span>
                <span className="date-year">{item.year}</span>
              </div>

              {/* Vertical spine */}
              <div className="announcement-spine" />

              {/* Content */}
              <div className="announcement-content">
                <span className="announcement-category">{item.category}</span>
                <h3 className="announcement-headline">{item.headline}</h3>
                <p className="announcement-body">{item.body}</p>
              </div>

              {/* Arrow CTA */}
              <a href="#" className="announcement-link" aria-label="Read more">→</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcements;
