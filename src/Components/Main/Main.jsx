import React from "react";
import './main.scss';

import { HiOutlineLocationMarker } from "react-icons/hi";
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'


const Data = [
    {
        id: 1,
        imgSrc: img,
        desTitle: 'Thanjavur Temple',
        location: 'TamilNadu',
        grade: 'cultural Relax',
        fees: 'Rs 700',
        description: 'Thanjavur Big Temple and Peruvudaiyar Kovil, is a Shaivite Hindu temple built in a Chola architectural style located on the south bank of the Cauvery river in Thanjavur, Tamil Nadu, India. It is one of the largest Hindu temples and an exemplar of Tamil architecture.'
    },

    
    {
        id: 2,
        imgSrc: img2,
        desTitle: 'Ooty',
        location: 'TamilNadu',
        grade: 'Mountain Region ',
        fees: 'Rs 800',
        description: 'Ooty, also known as Udhagamandalam, is a popular hill station in the Nilgiris district of Tamil Nadu, India. It is located at an altitude of 2,240 m (7,347 feet) above sea level and is known for its beautiful scenery, including lakes, gardens, and forests. Ooty was once the summer capital of the Madras Presidency and is now a popular tourist destination.'
    },
    {
        id: 3,
        imgSrc: img3,
        desTitle: 'Goa',
        location: 'Goa',
        grade: 'Party',
        fees: 'Rs 5000',
        description: 'There are numerous lakes & waterfalls in Goa, many of which offer you opportunities for trekking. The famous waterfalls in Goa are Arvalem Falls, Dudhsagar Falls, Netravali Falls & Kesarval Falls, while the popular lakes are Mayem Lake & Carambolim Lake. '
    },
    {
        id: 4,
        imgSrc: img4,
        desTitle: 'Leh Ladakh',
        location: 'Leh',
        grade: 'Mountain',
        fees: 'Rs 10000',
        description: 'Leh, the most accessible town of Ladakh, is an important trade centre located 160 miles (260 km) east of Srinagar. The climate of Ladakh is cold and dry. Average annual precipitation is roughly 3 inches (80 mm); fine, dry, flaked snow is frequent and sometimes falls heavily. '
    },
    {
        id: 5,
        imgSrc: img5,
        desTitle: 'Kashmir',
        location: 'kashmir',
        grade: 'Snow',
        fees: 'Rs 15000',
        description: 'ammu & Kashmir, a piece of heaven on earth, is the 19th largest state in India and it is located mostly all in the Himalayan mountains. It is also the only state in India with a Muslim-majority population. J&K consists of three main regions Jammu, the Kashmir Valley and Ladakh.'
    }

]
const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most Visited  destinations
                </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,desTitle, location,grade, fees,description})=>{
                        return(
                            <div key={ id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{desTitle}</h4>
                                    <span className="containent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        Details
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    )

}
export default Main