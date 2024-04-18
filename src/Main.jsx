// import { useEffect, useState } from "react";
// import axios from "axios";

// function generateUniqueKey() {
//   // This function generates a unique key based on the current timestamp
//   return `uniqueKey_${new Date().getTime()}`;
// }

// function Main() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((res) => {
//         setItems(res.data.meals);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
//     return (
//       <section className="card" key={generateUniqueKey()}>
//         <img src={strMealThumb} />
//         <section className="content">
//           <p>{strMeal}</p>
//           <p>#{idMeal}</p>
//         </section>
//       </section>
//     );
//   });

//   return <div className="item-container">{itemList}</div>;
// }

// export default Main;

import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="items-container">
      {items.map(({ strMeal, strMealThumb, idMeal }) => (
        <section className="card" key={idMeal}>
          <img src={strMealThumb} alt={strMeal} />
          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      ))}
    </div>
  );
}

export default Main;
