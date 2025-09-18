import './Global.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Academics from './components/Academics/Academics.jsx';
import Campus from './components/Campus/Campus.jsx';
import Filler from './components/Filler/Filler.jsx';
import Features from './components/Features/Features.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <Filler/>
      <About/>
      <>
        <Testimonials
          quote="I am what I am today partly because CEFI has always been true to its mission of developing holistic, 
                 self-fulfilling, and productive citizens, actively engaged in national and international development, 
                 imbued with the values of honor, scholarship, and service."
          name="HON. DR. HELEN D. TAN"
          title="Governor, Quezon Province"
          degree="BS Nursing (1997)"
          image={`${import.meta.env.BASE_URL}person1.jpg`}
        />
      </>
      {/*
      <>
        <Filler
        heading="Scholarships Made Possible"
        text="Explore financial aid options and discover how we support deserving students every step of the way."
        buttonLabel="View Scholarships"
        />
      </>
      */}
      <Academics/>
      <>
        <Testimonials
          quote="My coach always told me: 'Skill gets you in the door, but it's the love that makes you stay and the 
                 grit that makes you fight for every inch when you're down and out.'"
          name="Wu Thang Lee"
          title="National PRISAA Champion"
          degree="BS Information Systems (2025)"
          image={`${import.meta.env.BASE_URL}person2.jpg`}

        />
      </>
      <Campus/>
      {/*
      <>
        <Filler
        heading="Ready to become a Cefizen?"
        text="Start your journey with the guidance and support you deserve. Choose right, choose CEFI."
        buttonLabel="Inquire Now"

        />
      </>
      */}
      <Features/>
      <Footer/>

    </>  
  );
}

export default App;
