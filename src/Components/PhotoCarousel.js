import React, {Component} from 'react'
import { Carousel} from 'react-responsive-carousel';

export default class PhotoCarousel extends Component {

   render(){
        return(
            <div>
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img alt="" src="/Images/beachbanner.jpg"/>
                    </div>
                    <div>
                        <img alt="" src="/Images/matariki.jpg"/>
                    </div>
                    <div>
                        <img alt="" src="/Images/concert.jpg"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}