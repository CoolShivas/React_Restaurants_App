import CartContext from "../../../store/CartContext";
import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./InputMealForm.module.css";

const InputMealForm = (props) => {

    const exclusiveContext = useContext(CartContext);
    // console.log('reinitializing', exclusiveContext)

    const submitOnHandler = (event) => {
        event.preventDefault();
        // console.log(event.target);// Here, we accessible to button i.e, form;
        // console.log(inputMealFormContext.items)// Able to access blank array;
        // console.log(exclusiveContext.items.push(props.product));
        // console.log('after addItemToCart', exclusiveContext);
        const quantity = document.getElementById("amt_" + props.id).value;
        exclusiveContext.addItem({ ...props.product, quantity: quantity });

    }

    return <form className={classes.form} onSubmit={submitOnHandler}>
        {/* {console.log('inside render', exclusiveContext)} */}

        <Input labelABC="Amount" inputABC={{
            id: "amt_" + props.id,
            type: "number",
            min: '1',
            max: "5",
            step: "1",
            defaultValue: '1',
        }}
        ></Input>
        <button type="submit"> + Add </button>
    </form>
}


export default InputMealForm;