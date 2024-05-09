import React from "react";
import Navbarr from "./Navbarr";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItem";
import Cart from "./Cart";
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <>
      <Navbarr />
      <CategoryMenu />
      <FoodItems />
      <Cart />  
    </>
  );
};

export default Home;