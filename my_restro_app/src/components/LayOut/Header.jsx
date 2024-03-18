import fullFood from "../../assets/fullFood.jpg";


const Header = () => {
    return <>
        <header className="header">
            <h1> Delicious Meals </h1>
            <button> Cart </button>
        </header>
        <div className="main-image">
            <img src={fullFood} alt="" />
        </div>
    </>
}


export default Header;