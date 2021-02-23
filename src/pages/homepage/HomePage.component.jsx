import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/Directory.component.jsx';
import Carousel from '../../components/carousel/Carousel.component';

const HomePage=()=>{
    return(
        <div className="home">
            <Directory/>
            {/* <Carousel/> */}

        </div>
    )
}

export default HomePage;