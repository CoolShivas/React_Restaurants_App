import Input from "../../UI/Input";
import classes from "./InputMealForm.module.css";

const InputMealForm = () => {
    return <form className={classes.form}>
        <Input labelABC="Amount" inputABC={{
            id: "amount",
            type: "number",
            min: '1',
            max: "5",
            step: "1",
            defaultValue: '1',
        }}
        ></Input>
        <button> + Add </button>
    </form>
}


export default InputMealForm;