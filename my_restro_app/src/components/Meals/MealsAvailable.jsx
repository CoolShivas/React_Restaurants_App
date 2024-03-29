import IndividualMeal from "./MealsItem/IndividualMeal";
import Card from "../UI/Card";
import classes from "./MealsAvailable.module.css";


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pao-Bhaji',
        description: 'Finest pao and bhaji that gives you a pleasant taste',
        price: 50,
    },
    {
        id: 'm2',
        name: 'Dosa',
        description: 'Finest dosa with samhhar that gives you a pleasant taste',
        price: 80,
    },
    {
        id: 'm3',
        name: 'Pulao',
        description: 'Finest pulao that gives you a pleasant taste',
        price: 30,
    },
    {
        id: 'm4',
        name: 'Biryani',
        description: 'Finest chicken biryani that gives you a pleasant taste',
        price: 100,
    },

]


const MealsAvailable = () => {

    const mealsDummy = DUMMY_MEALS.map((currElem, index) => {
        return <IndividualMeal key={index}
            idABC={currElem.id}
            nameABC={currElem.name}
            descriptionABC={currElem.description}
            priceABC={currElem.price}
        ></IndividualMeal>
    })

    return <section className={classes.available_meals}>
        {/* {console.log(mealsDummy)} */}
        <Card>
            <ul> {mealsDummy} </ul>
        </Card>
    </section>

}

export default MealsAvailable;
