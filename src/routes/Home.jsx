import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Destination from '../components/Destination'
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Image from "../assets/rohit-tandon-9wg5jCEPBsw-unsplash.jpg"
function Home() {
    return (
        <>
            <Navbar />
            <Hero
            cName="hero"
            heroImg={Image}
            title='Your Journey Your Story'
            text='Choose your Favourite Destination'
            buttonText="Travel Plan"
            url="/"
            btnClass='show'
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home;