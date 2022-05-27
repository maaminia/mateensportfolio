import hoopz from './hoopz_ss.PNG';
import './App.css';
import './Showcase.css';
import React from 'react';

function Showcase() {

    return (
        
        <div>
            <div className="item1">
                
                <iframe width="480" height="315"
                    src="https://www.youtube.com/embed/Y8le_S0IY68"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>



            <div className="item2">
                <button target="_blank"
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://maaminia.github.io/Autobahn-Game/';
                    }}>
                    AutoBahn Playable Link
                    </button>
                <iframe src="https://maaminia.github.io/Autobahn-Game/"
                    title="Autobahn game player"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    scrolling="no"></iframe>
            </div>



            <div className="item3">
                <button target="_blank"

                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://maaminia.github.io/Group_1511/';
                    }}>
                H00PZ$ Playable Link
                </button>
                <img  src={hoopz} alt="hoopz" height="90%" />
            </div>



        </div>
        
        
    );




}

export default Showcase;