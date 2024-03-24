import InputMealForm from "./InputMealForm";
import classes from "./IndividualMeal.module.css";


const IndividualMeal = (props) => {

    const rupay = `Rs ${props.priceABC.toFixed(2)} /-`;

    return <li className={classes.individual_items}>
        <div>
            <h3> {props.nameABC} </h3>
            <div className={classes.description}> {props.descriptionABC} </div>
            <div className={classes.price}> {rupay} </div>
        </div>
        <div>
            {/* {console.log(props)} */}
            <InputMealForm id={props.id} product={props}></InputMealForm>
        </div>
    </li>
}


export default IndividualMeal;