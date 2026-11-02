import "./Card.css"
const Card = ({number = "K", suit = "\u2660"}) => {
    return (
        
        <div className="card-body">
            <div className="upperLeftText">
            <span className="upperLeftNumber">{number}</span>
            <span className="upperLeftSuite">{suit}</span>
            </div>

            <span className="middleText">{suit}</span>
            
            <div className="lowerLeftText">
            <span className="lowerLeftSuite">{number}</span>
            <span className="lowerLeftNumber">{suit}</span>
            </div>
        </div>
        
    )
}

export default Card;