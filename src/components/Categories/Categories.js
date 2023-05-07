import { useState } from 'react';

import './Categories.styles.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

const dummyCategories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
];

const Categories = () => {
  const [categories, setCategories] = useState(dummyCategories);
  
  console.log(`received as props ${categories}`);
  const renderedCategories = 
    categories.length > 0 
    ?
    categories.map((category) => {
      return(
        <CategoryItem key={category.id} category={category} />
      );
    })
    :
    <h1>Loading...</h1>;

  return(
    <div className='categories-container'>
      {renderedCategories}
    </div>
  );
}

export default Categories;