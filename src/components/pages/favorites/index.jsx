import { useContext } from "react";
import { GlobalContext } from "../../../context";
import styles from "./favorites.module.css";
import RecipeItem from "../../recipe-item";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);
  return (
    <div className={styles.mainContainer}>
      {favoriteList?.length > 0 ? (
        favoriteList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <p className={styles.nothingAdded}>Nothing is added yet...</p>
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
// export default function Favorites() {
//   const { favorites } = useContext(GlobalContext);

//   return (
//     <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
//       {favorites?.length > 0 ? (
//         favorites.map((item, index) => <RecipeItem key={index} item={item} />)
//       ) : (
//         <div>
{
  /* <p className="lg:text-4xl text-2xl text-red-700 font-extrabold"> */
}
// Nothing is added yet. //{" "}
// </p>;
//         </div>
//       )}
//     </div>
//   );
// }
