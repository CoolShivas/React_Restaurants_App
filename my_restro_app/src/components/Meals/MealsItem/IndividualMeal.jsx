import InputMealForm from "./InputMealForm";
import classes from "./IndividualMeal.module.css";


const IndividualMeal = (props) => {

    const amount = `Rs ${props.priceABC.toFixed(2)} /-`;

    return <li className={classes.individual_items}>
        <h3> {props.nameABC} </h3>
        <div className={classes.description}> {props.descriptionABC} </div>
        <div className={classes.price}> {amount} </div>
        <div>
            <InputMealForm></InputMealForm>
        </div>
    </li>
}


export default IndividualMeal;