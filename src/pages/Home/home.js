import React from 'react';
import './home.css'
import Route from '../../components/Route/route'
import Carousel from '../../components/BannerMainCarousel/carousel'
import BoxService from '../../components/BoxService/BoxService'

function App() {
  return (
    <Route>
      <Carousel />
      <BoxService />
    </Route>
  );
}

export default App;
