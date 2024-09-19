import clsx from "clsx";
import actLike from "./../../../assets/card/actLike.png";
import inactLike from "./../../../assets/card/inactLike.png";
import style from "./index.module.scss";
import PropTypes from "prop-types";
 
const LikeToggler = ({like}) => {
 
  return (
    <div className={clsx(style.likeToggler)}>
      <img src={like ? actLike : inactLike} alt="like-toggler" />
    </div>
  );
};
 
LikeToggler.propTypes = {
  like: PropTypes.bool.isRequired,  
};

export default LikeToggler;
