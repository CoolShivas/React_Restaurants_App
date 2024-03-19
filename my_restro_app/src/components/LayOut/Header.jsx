import HeaderCartBtn from "./HeaderCartBtn";
import classes from "./Header.module.css"
import fullFood from "../../assets/fullFood.jpg";


const Header = () => {
    return <>
        <header className={classes.header}>
            <h1> Delicious Meals </h1>
            <HeaderCartBtn></HeaderCartBtn>
        </header>
        <div className={classes['main-image']}>
            <img src={fullFood} alt="Image not found" />
        </div>
    </>
}


export default Header;