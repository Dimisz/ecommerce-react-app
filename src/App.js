import { useState, useEffect } from "react";
import Categories from "./Categories/Categories";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json));
  }, []);


  return (
    <>
      <Categories categories={categories} />
    </>
  );
}

export default App;
