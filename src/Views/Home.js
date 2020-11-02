import React from 'react';
import PhotoCarousel from "../Components/PhotoCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import News from '../Components/News'
import '../Styles/Body.css'

function Home(){
    return(
        <div className="body">
            <PhotoCarousel/>
            <News/>
        </div>
    )
}
export default Home;
