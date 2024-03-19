import classes from "./Input.module.css";


const Input = (props) => {

    return <div className={classes.input}>
        <label htmlFor={props.inputABC.id}>
            {props.labelABC}
        </label>
        {/* <input id={props.input.id} /> */}
        <input {...props.inputABC} />
    </div>
}

export default Input;