import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "ChickenCurry",
    description: "Finest chicken",
    price: 150,
  },
  {
    id: "m2",
    name: "ButterChicken",
    description: "A northindian specialty!",
    price: 165,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Spicy Burger",
    price: 150,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 170,
  },
];

const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id = {meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
