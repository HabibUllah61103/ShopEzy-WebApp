// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
// import Signup from "./components/Signup";

// const App = () => {
//     return (
//         <BrowserRouter>
//             <div className="relative z-0 bg-primary">
//                 <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//                     <Navbar />
//                     <Hero />
//                 </div>
//                 <About/>
//                 <div className="relative z-0 ">
//                     <Contact />
//                     <StarsCanvas/>
//                 </div>
//             </div>
//         </BrowserRouter>
//     )
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Routes>
                <Route path='/' element={<Navbar />} />
            </Routes>
            <Routes>
            <Route path='/' element={<Hero />} />
        </Routes>
        </div>
        <Routes>
            <Route path='/' element={<About />} />
        </Routes>
        <div className="relative z-0">
            <Routes>
                <Route path='/' element={<Contact />} />
            </Routes>
         <Routes>
            <Route path='/' element={<StarsCanvas />} />
        </Routes>
        </div>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
