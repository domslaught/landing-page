import './Admissions.css';

const steps = [
  {
    number: '01',
    title: 'Submit Requirements',
    desc: 'Prepare your Form 138/SF9, PSA Birth Certificate, Good Moral Certificate, and 2×2 ID photos. Download the checklist from the Student Portal.',
    tag: 'REQUIREMENTS',
  },
  {
    number: '02',
    title: 'Online Application',
    desc: 'Fill out the Admission Form at the CEFI Student Portal or visit the Registrar\'s Office in person. No application fee required.',
    tag: 'APPLICATION',
  },
  {
    number: '03',
    title: 'Entrance Assessment',
    desc: 'Take the CEFI College Entrance Test (CCET). Schedule your preferred exam slot online. Results are released within 3 business days.',
    tag: 'ASSESSMENT',
  },
  {
    number: '04',
    title: 'Department Interview',
    desc: 'Selected programs (Nursing, Education, Criminology) require a brief departmental interview. Slots are booked upon passing the CCET.',
    tag: 'INTERVIEW',
  },
  {
    number: '05',
    title: 'Enroll & Pay',
    desc: 'Proceed to the Cashier\'s Office or use the Online Payment Portal to settle the initial fees and lock in your slot for the semester.',
    tag: 'ENROLLMENT',
  },
];

function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <div className="admissions-inner">

        <div className="admissions-header">
          <span className="admissions-eyebrow">How To Apply</span>
          <h2 className="admissions-title">Admissions Timeline</h2>
          <div className="admissions-rule" />
          <p className="admissions-subtitle">
            A clear, structured path from application to enrollment — no guesswork.
          </p>
        </div>

        <div className="admissions-timeline">
          {steps.map((step, i) => (
            <div className="timeline-step" key={i}>
              {/* Step number chip */}
              <div className="step-chip">
                <span>{step.number}</span>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && <div className="step-connector" />}

              {/* Content card */}
              <div className="step-card">
                <div className="step-tag">{step.tag}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="admissions-cta-bar">
          <a href="#" className="admissions-cta-btn">Download Application Form</a>
          <a href="#" className="admissions-cta-link">Contact the Registrar →</a>
        </div>
      </div>
    </section>
  );
}

export default Admissions;
