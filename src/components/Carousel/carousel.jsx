import React from 'react';
import Anchor from '../Anchors/anchor'

import './carousel.css'
import img1 from '../../assets/images/pe-3.jpg'
import img2 from '../../assets/images/pe-27.jpg'
import img3 from '../../assets/images/pe-31.jpg'

function carousel() {
    return (
        <div>
            <div class="container PE-position">
                <div class="row no-gutters slider-text align-items-center" data-scrollax-parent="true">
                    <div class="col-lg-6 ftco-animate">
                        <div class="mt-5">
                        <h1 class="mb-4 h-carousel">We Build <br></br>Great Projects</h1>
                        <p class="mb-4 p-carousel">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        <p>
                            <Anchor href="#" class="btn btn-primary m-2">Our Services</Anchor> 
                            <Anchor href="#" class="btn btn-warning m-2">Pedir Orçamento</Anchor>
                        </p>
                </div>
            </div>
        </div>
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="carouselH d-block w-100" src={img1} alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="carouselH d-block w-100" src={img2} alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="carouselH d-block w-100" src={img3} alt="Third slide"></img>
                </div>
            </div>
        </div>

        
        </div>
    )
}

export default carousel;