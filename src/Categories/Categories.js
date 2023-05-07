const Categories = ({categories}) => {
  console.log(`received as props ${categories}`);
  const renderedCategories = 
    categories.length > 0 
    ?
    categories.map((category) => {
      return(<div className='category-container' key={category}>
          <div className='background-image'></div>
          <div className='category-body-container'>
            <h2>{category}</h2>
            <p>Shop Now</p>
          </div>
        </div>)
    })
    :
    <h1>Loading...</h1>

  return(
    <div className='categories-container'>
      {renderedCategories}
    </div>
  );
}

export default Categories;