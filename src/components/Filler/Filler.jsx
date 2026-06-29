import { useEffect, useRef, useState } from 'react';
import './Filler.css';

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

function Filler() {
  const [years, refYears] = useCountUp(52);
  const [partners, refPartners] = useCountUp(3);
  const [rank, refRank] = useCountUp(800);

  const facts = [
    { stat: years, suffix: ' Years', label: 'of Academic Excellence', ref: refYears },
    { stat: partners, suffix: '', label: 'International Partnership', ref: refPartners },
    { stat: rank, prefix: '601-', label: 'Global SDG Rank in HEalth & Well Being', ref: refRank },
  ];

  return (
    <div className="facts-section">
      <div className="facts-container">
        <p className="facts-label">By The Numbers</p>
        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div className="fact-card" key={index}>
              <h3 className="fact-stat" ref={fact.ref}>
                {fact.prefix}{fact.stat}{fact.suffix}
              </h3>
              <p className="fact-label">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filler;
