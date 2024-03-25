import { useContext } from "react";
import { GlobalContext } from "../../../context";
import RecepieItem from "../../recipe-item";

export default function Home() {
  const { recipeList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList?.length > 0 ? (
        recipeList.map((item, index) => <RecepieItem key={index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-2xl text-red-700 font-extrabold">
            Nothing to show. Please, search something
          </p>
        </div>
      )}
    </div>
  );
}
