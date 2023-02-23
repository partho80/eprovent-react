
import './App.css';
// import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import HomePage_1 from './pages/homePage_1';
import HomePage_2 from './pages/homePage_2';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import Blog from './pages/blog';
import Blog_2 from './pages/blog_2';
import Contact from './pages/contact';
import Error from './pages/error';
import Blog_details from './pages/blog_details';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <div className="App">
      
    

      <Router>
        
        <Routes>
        
          <Route  exact path="/" element={<HomePage_1 />} />
          <Route  exact path="/home_page_2" element={<HomePage_2/>} /> 
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/blog" element={<Blog />} /> 
          <Route exact path="/blog_2" element={<Blog_2 />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/blog_details" element={<Blog_details />} />



          
          </Routes>
    
    </Router >

    
    

      {/* <HomePage_2/> */}

      {/* <AboutUs/> */}
      {/* <Services/> */}
      {/* <Blog/> */}
      {/* <Blog_2/> */}
      {/* <Contact /> */}
      {/* <Error/> */}


    </div>

  );
}

export default App;
