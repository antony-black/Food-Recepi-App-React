import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();
  const { data, pending, errorMsg } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.data?.recipes) {
      setRecipeList(data?.data?.recipes);
      setSearchParam("");
      navigate("/");
    }
  };

  const handleAddToFavorite = (currentItem) => {
    const copyFavoriteList = [...favoriteList];
    copyFavoriteList.includes(currentItem)
      ? copyFavoriteList.splice(currentItem)
      : copyFavoriteList.push(currentItem);

    setFavoriteList(copyFavoriteList);
    console.log(favoriteList);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        setRecipeList,
        data,
        pending,
        errorMsg,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
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
// export const GlobalContext = createContext(null);

// export default function GlobalState({ children }) {
//   const [searchParam, setSearchParam] = useState("");
//   const [recipeList, setRecipeList] = useState([]);
//   const [recipeDetailsData, setRecipeDetailsData] = useState(null);
//   const [favorites, setFavorites] = useState([]);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
//       );
//       const data = await response.json();

//       if (data?.data?.recipes) {
//         setRecipeList(data?.data?.recipes);
//         setSearchParam("");
//         navigate("/");
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

// const handleFaforites = (id) => {
//   let copyFavorites = [...favorites];
//   copyFavorites.includes(id)
//     ? copyFavorites.splice(id)
//     : copyFavorites.push(id);

//   setFavorites(copyFavorites);
// };

//   return (
//     <GlobalContext.Provider
//       value={{
//         searchParam,
//         setSearchParam,
//         recipeList,
//         handleSubmit,
//         recipeDetailsData,
//         setRecipeDetailsData,
//         favorites,
//         handleFaforites,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// }
