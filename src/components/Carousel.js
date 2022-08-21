
import React,{useState} from 'react'
import { Data } from './Data';
import '../styles/Main.scss'
import '../styles/Carousel.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const Carousel = ({slides}) => {
    const [current,setCurrent] = useState(0);
    const length = slides.length

    return (
        <section className='car'>
            <div className="arrows">
                <ArrowBackIosNewOutlinedIcon className='left' onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}/>
                <ArrowForwardIosOutlinedIcon className='right' onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}/>
            </div>
            
            {Data.map((slide,index) => {
                return (
                    <div className={index === current ? 'carousel active' : 'carousel'}>
                        {index === current && (
                            <div className={slide.className}>
                                <div className="texts">
                                <p className='title'>{slide.title}</p>
                                <p>{slide.text}</p>
                                </div>
                                <img src={slide.image} alt="" />
                                </div>
                        )}
                    </div>
                )
            })}

            
            
                    
            
            
        </section>
    )
}

export default Carousel
