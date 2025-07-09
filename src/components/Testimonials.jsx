import './TestimonialStyle.css'
import TestimonialData from './TestimonialData'
import Testimonial1 from "../assets/Testimonial1.jpg"
import Testimonial2 from "../assets/Testimonial2.jpg"
import Testimonial3 from "../assets/Testimonial3.jpg"

function Testimonial() {
    return (
        <div className="Testimonial">
            <h1>Testimonials</h1>
            <p>Discover what our travelers have to say about their unforgettable journeys and seamless travel experiences with us. </p>
            <div className="Testimonialcard">
                <TestimonialData
                    image={Testimonial1}
                    heading="Diva, Delhi"
                    text="Everything was smooth and seamless—from booking to the last day of our trip. The guides were amazing, and the experience felt truly personalized!"
                />
                <TestimonialData
                    image={Testimonial2}
                    heading="Alice, Britain"
                    text="An unforgettable journey! The views were breathtaking, the accommodations were top-notch, and the service exceeded all expectations."
                />
                <TestimonialData
                    image={Testimonial3}
                    heading="Jones, Canada"
                    text="I have never felt so relaxed while traveling. Every detail was taken care of. I am already planning my next trip with them!"
                />
            </div>
        </div>
    )
}

export default Testimonial;