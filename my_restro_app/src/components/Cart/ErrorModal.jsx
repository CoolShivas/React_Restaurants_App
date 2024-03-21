import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";


const ErrorModal = ({ hideCartHandlerABC }) => {

    return <div className={classes.backdrop}
        onClick={hideCartHandlerABC}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h3> Dosa </h3>
            </header>
            <main className={classes.content}>
                <span> Total Amount </span>
                <span> Rs. 35.65 /- </span>
            </main>
            <footer className={classes.actions}>
                <button onClick={hideCartHandlerABC}> Close </button>
                <button> Order </button>
            </footer>
        </Card>
    </div>
}


export default ErrorModal;