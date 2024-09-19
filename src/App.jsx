import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PageContainer from './containers/PageContainer';

const App = () => {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer/> */}
        </Router>
      </PageContainer>
    </div>
  );
};

export default App;
