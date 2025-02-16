import distIcon from '../assets/distance.png'
import doneIcon from '../assets/done.png'

export default function Entry(props) {
    return (
        <div className="blogCard">
            
            {/* Done Icon (only shows if data.done is true) */}
            {props.completed && (
                <img src={doneIcon} alt="done icon" className="done-icon" />
            )}

            <img src={props.img.src} alt={props.img.alt} className="blogImage" />
            <div className="blogContent">
                <h2 className="title">{props.title}</h2>
                <img 
                    className="distance-icon"
                    src={distIcon} 
                    alt="distance icon"
                />
                <span className="distance">{props.distance} Miles</span>
                <p className="description">{props.text}</p>
                <a href={props.link} className="readMore">
                    Route details
                </a>
            </div>
        </div>

    )
}


