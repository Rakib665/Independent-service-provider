import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/welcome-signs.jpg'
 



const Banner = () => {
   
    return (
        <div>
        <Carousel >
            <Carousel.Item>
                <img style={{height:'500px'}}
                    className="d-block w-100"
                    src={banner1}
                    alt=""
                />
                <Carousel.Caption>
                    <h3>Your best day reveal with best photo</h3>
                    <p>Capturing the essence of your conference or wedding event</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
        </div>
    );
};

export default Banner;