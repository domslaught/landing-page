import { useEffect, useRef, useState } from 'react';
import './Campus.css';

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

function Campus() {
  const [medals, refMedals] = useCountUp(5);
  const [rank, refRank] = useCountUp(800); // Show ending number of 800

  return (
    <section className="campus-section">
      <div className="campus-left"></div>
      <div className="campus-right">
        <div className="campus-content">
          <h3 className="campus-tagline">Cefizen Life</h3>
          <p className="campus-summary">
            Life at CEFI goes beyond the classroom. Our vibrant campus community is home to dynamic student organizations, 
            competitive athletic teams, and enriching community activities. Whether you're joining a club, leading a student council, 
            or cheering from the sidelines, there's a place for every cefizen to grow, lead, and belong.
          </p>
          <button className="campus-cta">GET INVOLVED</button>

          <div className="campus-facts">
            <div className="campus-fact-block">
              <h4 ref={refMedals}>{medals}</h4>
              <p>National PRISAA Medals</p>
            </div>
            <div className="campus-fact-block">
              <h4 ref={refRank}>601–800</h4>
              <p>Global SDG Rank in Health & Well-being</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campus;
