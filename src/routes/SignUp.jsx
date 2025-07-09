import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Sign from "../components/Sign";
function SignUp(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-dim"
            heroImg='src/assets/SignUpImage.jpg'
            title='SIGN UP'
            />
            <Sign/>
            <Footer/>
        </>
    )
}

export default SignUp; 