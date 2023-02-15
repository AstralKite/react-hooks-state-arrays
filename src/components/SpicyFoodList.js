import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();

    const newObj = [...foods, newFood];
    setFoods(newObj);
  }

  function handleClickDelete(id){
    const newObj = foods.filter( function(list){
      if(list.id !== id){
        return list;
      }
    })
    setFoods(newObj);
  }

  function handleClickHeat(id){
    const newObj = foods.filter( function(list){
      if(list.id == id){
        list.heatLevel++;
        return list;
      } else 
      return list;
    })
    setFoods(newObj);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={ ()=> handleClickHeat(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
