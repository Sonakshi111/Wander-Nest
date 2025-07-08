import "./DestinationStyles.css"
import DestinaationData from "../components/DestinationData"
import Leh1 from "../assets/Leh1.jpg"
import Leh2 from "../assets/Leh2.jpg"
import Temple1 from "../assets/Bali1.jpg"
import Temple2 from "../assets/Bali2.jpg"
import Kyoto1 from "../assets/Kyoto1.jpg"
import Kyoto2 from "../assets/Kyoto2.jpg"
const Destination =() =>{
    return(
        <div className="destination">
            <h1>Popular Destionations</h1>
            <h4>Tours give you the opportunity to see a lot, within a time frame</h4>
            <DestinaationData
            className="first-des"
            heading="Leh-Ladakh, India"
            text="Leh-Ladakh is a high-altitude desert of stark beauty, with snow-capped peaks, crystal-clear lakes like Pangong and Tso Moriri, and ancient monasteries perched on cliffs. The dramatic landscapes, Buddhist culture, and peaceful silence of the mountains make it a truly soul-stirring journey. Driving through winding mountain passes like Khardung La and Chang La offers breathtaking views and a sense of awe. The fluttering prayer flags, serene gompas such as Thiksey and Hemis, and the warm smiles of locals add spiritual depth to the experience. Whether it’s stargazing in Nubra Valley, biking across moonlike terrains, or sipping butter tea with monks, every moment in Ladakh feels timeless and otherworldly — a place where nature and spirituality meet in perfect harmony."
            img1={Leh1}
            img2={Leh2}/>
            <DestinaationData
            className="first-des-reverse"
            heading="Bali, Indonesia"
            text="Bali is more than just a tropical escape — it is a place where spirituality meets lush beauty. From terraced rice fields and jungle waterfalls to serene temples and surf-friendly beaches, Bali has something for everyone. Yoga retreats, Balinese rituals, and friendly locals make it a soul-refreshing destination. In Ubud, the cultural heart of Bali, you will find art villages, traditional dance performances, and healing sanctuaries hidden in the greenery. Down south, places like Seminyak and Uluwatu offer luxury resorts, beach clubs, and dramatic cliffs above turquoise waters. Whether you're meditating by a waterfall, diving among coral reefs, or simply watching the sunset from a clifftop temple, Bali invites you to slow down and reconnect — with nature, culture, and yourself."
            img1={Temple1}
            img2={Temple2}/>
            <DestinaationData
            className="first-des"
            heading="Kyoto, Japan"
            text="Once the imperial capital, Kyoto is the cultural soul of Japan — a city where time slows down amid timeless beauty. It boasts over a thousand ancient temples and shrines, each with its own tranquil gardens, wooden gates, and sacred history. The peaceful bamboo groves of Arashiyama, the stone pathways of the Philosopher is Walk, and the golden reflection of Kinkaku-ji on a still pond create scenes of quiet wonder.Kyoto changes with the seasons — cherry blossoms shower the city in pink during spring, while autumn ignites the maples in fiery red and orange. With its tea ceremonies, calligraphy, and Zen gardens, Kyoto is not just a place to visit — it is a place to feel calm, reflective, and deeply connected to Japan is ancient soul."
            img1={Kyoto1}
            img2={Kyoto2}/>
        </div>
    )
}

export default Destination