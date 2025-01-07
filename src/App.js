import './App.css';
import PropTypes from 'prop-types'
import navbar, { Navbar } from './components/Navbar.js';
import React, { useState } from 'react'
import News from './components/News.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=>{
  const pageSize=8;
  // apiKey=process.env.REACT_APP_NEWS_API
  const apiKey=`b8c97a3915c4477ab237ad1bfe73bd08`;
  const [progress,setProgress]=useState(0);
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} country="in" category="general" heading="Top Headlines"/>}/>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" heading="Business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" heading="Entertainment"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" heading="Health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" heading="Science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" heading="Sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" heading="Technology"/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}

App.defaultProps={
  country:'in',
  category:'general',
  heading:'Top Headlines'
}

App.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  heading:PropTypes.string,
}

export default App
//  API key 6d8291ca212e4c0fbb54f74ade8b628d

