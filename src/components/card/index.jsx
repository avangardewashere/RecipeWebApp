import clsx from "clsx";
import style from "./index.module.scss";
import recipeImg from "./../../assets/card/recipe1.png";
import LikeToggler from "./likeToggler";



const RecipeCard = () => {
  return (
    <div className={clsx(style.recipeCard)}>
      <div className={clsx(style.cardBody)}>
         <LikeToggler like={false}></LikeToggler>
        <div className={clsx(style.cardContent)}>
          <img className={clsx(style.cardImage)} src={recipeImg} />
          <div className={clsx(style.cardTitle)}>Creamy Pasta Creamy</div>
          <div className={clsx(style.cardText)}>
            {`Naratol si mama" is in Ilocano, a language spoken in the northern regions of the Philippines. It translates to "Mama (or mother) got scared" in English.`}
          </div>
          <div className={clsx(style.cardButton)}>View Recipe</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
