import React from 'react';
import classes from './MealsSummary.module.css';
const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Delicious Food, Deliverd to you </h2>
        <p>
            Choose your favorite meal from our broad selection of available meals
             and enjoy a delicious or dinner at home.
        </p>
        <p>
            All our meals arre cooked with high-quality ingredients,just- in-item and 
            of course by experienced chefs!
        </p>
    </section>
};

export default MealsSummary;