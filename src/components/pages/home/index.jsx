import { useContext } from "react";
import { GlobalContext } from "../../../context";
import RecipeItem from "../../recipe-item";
import styles from "./home.module.css";

export default function Home() {
  const { pending, errorMsg, recipeList } = useContext(GlobalContext);

  if (!!pending) {
    return <p className={styles.loading}>...loading. Plese wait!</p>;
  }

  return (
    <div className={styles.mainContainer}>
      {errorMsg ? <p>{errorMsg}</p> : null}
      {recipeList?.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <p className={styles.nothingToShow}>Nothing to show...</p>
      )}
    </div>
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
// export default function Home() {
//   const { recipeList } = useContext(GlobalContext);

//   return (
//     <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
//       {recipeList?.length > 0 ? (
//         recipeList.map((item, index) => <RecepieItem key={index} item={item} />)
//       ) : (
//         <div>
//           <p className="lg:text-4xl text-2xl text-red-700 font-extrabold">
//             Nothing to show. Please, search something
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
