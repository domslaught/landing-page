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
  const [years, refYears] = useCountUp(52);
  const [partners, refPartners] = useCountUp(3);
  const [programs, refPrograms] = useCountUp(16);

  return (
    <section className="about-section">
      {/* LEFT: sharp typographic statement panel */}
      <div className="about-left">
        <div className="about-content">
          <span className="about-eyebrow">Est. 1973</span>
          <h2 className="about-tagline">Building<br />Leaders<br />Since Day One.</h2>
          <p className="about-summary">
            Calayan Educational Foundation Inc. is one of Southern Luzon's most respected 
            academic institutions — a private, non-sectarian university committed to developing 
            future leaders through innovative learning, values-driven education, and real-world preparation.
          </p>
          <button className="about-cta">LEARN MORE</button>

          <div className="about-facts">
            <div className="about-fact-block">
              <h4 ref={refYears}>{years}</h4>
              <p>Years of Academic Excellence</p>
            </div>
            <div className="about-fact-block">
              <h4 ref={refPartners}>{partners}</h4>
              <p>International Partnerships</p>
            </div>
            <div className="about-fact-block">
              <h4><span ref={refPrograms}>{programs}</span>+</h4>
              <p>Degree Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: stark framed visual */}
      <div className="about-right">
        <div className="about-frame-accent" />
      </div>
    </section>
  );
}

export default About;
