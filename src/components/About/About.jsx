import { useEffect, useRef, useState } from 'react';
import './About.css';

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

function About() {
  const [partners, refPartners] = useCountUp(3);
  const [sinceYear, refSinceYear] = useCountUp(1973);

  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-content">
          <h3 className="about-tagline">About CEFI</h3>
          <p className="about-summary">
            Calayan Educational Foundation Inc. is one of Southern Luzon’s most respected academic institutions — 
            a private, non-sectarian university committed to developing future leaders through innovative learning,
            values-driven education, and real-world preparation.
          </p>
          <button className="about-cta">LEARN MORE</button>

          <div className="about-facts">
            <div className="about-fact-block">
              <h4> 1973</h4>
              <p>Year CEFI was founded</p>
            </div>
            <div className="about-fact-block">
              <h4 ref={refPartners}>{partners}</h4>
              <p>International Partnerships</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-right"></div>
    </section>
  );
}

export default About;
