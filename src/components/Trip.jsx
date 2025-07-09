import './TripStyle.css'
import TripData from './TripData'
import Canada from "../assets/canada.jpg"
import Greece from "../assets/Greece.jpg"
import Spain from "../assets/Spain.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                image={Canada}
                heading="Banff, Canada"
                text="Located in the heart of the Canadian Rockies, Banff is nature at its finest. Glacial lakes like Lake Louise shine with surreal turquoise hues, and snow-draped mountains surround every trail. Visitors can enjoy skiing, wildlife spotting, canoeing, and stargazing. It is a paradise for those who crave crisp air and scenic adventure."
                />
                <TripData
                image={Greece}
                heading="Santorini, Greece"
                text="Santorini is a dazzling island in the Aegean Sea, known for its whitewashed houses, deep blue domes, and jaw-dropping caldera views. Sunsets in Oia paint the sky in shades of gold and pink, making it a favorite for honeymooners. Volcanic beaches, local wines, and charming alleys add to the island's timeless romance and unique character."
                />
                <TripData
                image={Spain}
                heading="Barcelona, Spain"
                text="Barcelona buzzes with creativity, sunshine, and street life. Gaudí architectural wonders, such as the Sagrada Família and Park Güell, give the city a surreal, artistic edge. Add to that tapas bars, Flamenco rhythms, bustling markets, and Mediterranean beaches, and you have a city that excites every sense."
                />
            </div>
        </div>
    )
}

export default Trip;