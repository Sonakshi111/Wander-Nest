import './TestimonialStyle.css'

function TestimonialData(props){
    return(
        <div className="ts-card">
            <div className="ts-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default TestimonialData;