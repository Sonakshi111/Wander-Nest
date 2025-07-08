import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Destination from '../components/Destination'
function Home() {
    return (
        <>
            <Navbar />
            <Hero
            cName="hero"
            heroImg='src/assets/rohit-tandon-9wg5jCEPBsw-unsplash.jpg'
            title='Your Journey Your Story'
            text='Choose your Favourite Destination'
            buttonText="Travel Plan"
            url="/"
            btnClass='show'
            />
            <Destination/>
        </>
    )
}

export default Home;