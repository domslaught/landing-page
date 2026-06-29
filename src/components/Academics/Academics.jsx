import { useEffect, useRef, useState } from 'react';
import './Academics.css';

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === target) clearInterval(timer);
      }, stepTime);
    };

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.current.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.current.observe(ref.current);
    return () => observer.current && observer.current.disconnect();
  }, [target, duration]);

  return [count, ref];
}

function Academics() {
  const [passRate, refPassRate] = useCountUp(97);
  const [programs, refPrograms] = useCountUp(16);

  return (
    <section className="academics-section">
      {/* Background image panel with movement */}
      <div className="academics-bg" />

      {/* Centered content overlay */}
      <div className="academics-overlay">
        <div className="academics-content">
          <span className="academics-eyebrow">Academic Excellence</span>
          <h2 className="academics-tagline">Programs<br />That Build<br />Futures.</h2>
          <p className="academics-summary">
            With a diverse range of programs across multiple college departments,
            CEFI offers quality education built for real-world success. We provide scholarships
            to deserving students and have proudly shaped the careers of countless graduates
            who now thrive in healthcare, business, education, and technology—locally and abroad.
          </p>
          <button className="academics-cta">EXPLORE PROGRAMS</button>

          <div className="academics-facts">
            <div className="academics-fact-block">
              <h4 ref={refPassRate}>{passRate}%</h4>
              <p>Nursing Licensure Exam Pass Rate</p>
            </div>
            <div className="academics-fact-block">
              <h4 ref={refPrograms}>{programs}</h4>
              <p>Academic Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;
