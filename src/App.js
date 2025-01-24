import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import './App.css'; // Add styling here
import profileImage from './images/niko1.jpg';
import Header from './components/Header';
import Main from './components/Main';  // Ensure the import is here
import Footer from './components/Footer';
import BlogPage from './components/BlogPage'; // Import the new pages
import About from './components/About';
import WorkExamplesPage from './components/WorkExamplesPage'; // Import WorkExamplesPage

function App() {
  return (
    <Router>  {/* Wrap the app in Router for routing functionality */}
      <div className="App">
        <Header />  {/* This will render the header with navigation links */}
        <Routes>
          <Route path="/" element={
            <>
              <Main />
              {/* <WorkExamplesPage />  */}
            </>
          } />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />  {/* This will render the footer */}
      </div>
    </Router>
  );
}

export default App;
