import './Filler.css';

function Filler() {
  const facts = [
    {
      stat: '52 Years',
      label: 'of Academic Excellence',
    },
    {
      stat: '3',
      label: 'International Partnership',
    },
    {
      stat: '601-800',
      label: 'Global SDG Rank in HEalth & Well Being',
    },
    
  ];

  return (
    <div className="facts-section">
      <div className="facts-container">
        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div className="fact-card" key={index}>
              <h3 className="fact-stat">{fact.stat}</h3>
              <p className="fact-label">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filler;
