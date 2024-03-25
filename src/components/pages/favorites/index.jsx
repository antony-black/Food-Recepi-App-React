import { useContext } from "react";
import { GlobalContext } from "../../../context";
import RecepieItem from "../../recipe-item";

export default function Favorites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favorites?.length > 0 ? (
        favorites.map((item, index) => <RecepieItem key={index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-2xl text-red-700 font-extrabold">
            Nothing is added yet.
          </p>
        </div>
      )}
    </div>
  );
}
