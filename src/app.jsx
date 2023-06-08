import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, Tech1, Hero } from "./components";
import WalkingCat from "./components/WalkingCat";
import Education from "./components/Education";

const app = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech1 />


        <WalkingCat />
        <Education/>
        {/* <Experience /> */}
        {/* <Tech /> */}
        
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default app;
