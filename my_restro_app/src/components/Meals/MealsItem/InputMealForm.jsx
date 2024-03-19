import classes from "./InputMealForm.module.css";

const InputMealForm = () => {
    return <form className={classes.form}>
        <input type="text" />
        <button> + Add </button>
    </form>
}


export default InputMealForm;