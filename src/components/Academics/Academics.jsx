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
  const [scholars, refScholars] = useCountUp(97);
  const [programs, refPrograms] = useCountUp(16);

  return (
    <section className="academics-section">
      <div className="academics-content">
        <h3 className="academics-tagline">Programs</h3>
        <p className="academics-summary">
          With a diverse range of programs across multiple college departments, 
          CEFI offers quality education built for real-world success. We provide scholarships 
          to deserving students and have proudly shaped the careers of countless graduates who 
          now thrive in fields such as healthcare, business, education, and technology—both locally and abroad.
        </p>
        <button className="academics-cta">EXPLORE PROGRAMS</button>

        <div className="academic-facts">
          <div className="fact-block">
            <h4 ref={refScholars}>{scholars}%</h4>
            <p>Nursing Licensure Exam Pass Rate</p>
          </div>
          <div className="fact-block">
            <h4 ref={refPrograms}>{programs}</h4>
            <p>Academic Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academics;
