import './Testimonials.css';

function Testimonials({ quote, name, title, degree, image }) {
  return (
    <section className="testimonials-section">
      <img className="overlay-shape" src="/shapes/green-wave.svg" alt="" />

      <div className="testimonials-container">
        <div className="testimonial">
          <p className="testimonial-quote">"{quote}"</p>
          
          <div className="testimonial-author-section">
            <div className="author-image">
              <img src={image} alt={name} />
            </div>
            <div className="author-info">
              <h4 className="author-name">{name}</h4>
              <p className="author-title">{title}</p>
              <p className="author-degree">{degree}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
