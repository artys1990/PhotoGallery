import React from 'react';
import './App.css';
import GalleryList from './components/GalleryList';
import AddGallery from './components/AddGallery';
import PictureList from './components/PictureList';
import Header from './components/Header';
import GalleryProvider from './context/galleryContext';
import {Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className="container col-md-10 all">
          <GalleryProvider>
            <Header />
            <Route path="/" exact strict component={GalleryList} />
            <Route path='/addGallery' strict exact component={AddGallery} />
            <Route path='/PictureList' strict exact component={PictureList} />
          </GalleryProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
