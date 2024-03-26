import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GlobalState, { GlobalContext } from "../../../context";

export default function Details() {
  const id = useParams();
  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data?.recipe) {
        console.log(data?.data?.recipe);
        // setRecipeDetailsData(data?.data?.recipe);
      }
    };

    getRecipeDetails();
  }, [id]);

  return <div></div>;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// export default function Details() {
//   const { id } = useParams();
//   const {
//     recipeDetailsData,
//     setRecipeDetailsData,
//     // favorites,
//     // handleFaforites,
//   } = useContext(GlobalContext);

//   useEffect(() => {
//     const getRecipeDetails = async () => {
//       if (!id) return;

//       const response = await fetch(
//         `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
//       );
//       const data = await response.json();

//       if (data?.data?.recipe) {
//         console.log(data?.data?.recipe);
//         setRecipeDetailsData(data?.data?.recipe);
//       }
//     };

//     getRecipeDetails();
//   }, [id]);

//   return (
//     <div>
//       <div>
//         <img src={recipeDetailsData?.image_url} alt="dish image" />
//       </div>
//       <div>
//         <span>{recipeDetailsData?.publisher}</span>
//         <h3>{recipeDetailsData?.title}</h3>
//         <button
//           className="text-green-700 font-extrabold bg-white/75 border-2 border-zinc-900"
//           onClick={() => handleFaforites(recipeDetailsData)}
//         >
//           {favorites.findIndex((item) => item.id === recipeDetailsData.id) !==
//           -1
//             ? "Remove from the Favorites"
//             : "Save as Favorites"}
//         </button>
//       </div>
//       <div>
//         <span>Ingredients:</span>
//         <ul>
//           {recipeDetailsData?.ingredients?.map((item, index) => (
//             <li key={index}>
//               {
//                 <>
//                   <p>{item.description}</p>
//                   <p>
//                     {item.quantity} {item.unit}
//                   </p>
//                 </>
//               }
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
