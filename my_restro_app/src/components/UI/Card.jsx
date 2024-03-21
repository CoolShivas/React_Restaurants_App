import classes from "./Card.module.css";

const Card = (props) => {

    return <div className={`${classes.card_classic} ${props.className}`}
        onClick={(event) => { event.stopPropagation() }}
    >

        {props.children}
    </div>
}


export default Card;