import "./ItemCard.css";
import LikeBtn from "../../images/likebtn.svg";
import unLikedBtn from "../../images/unLikedBtn.svg";

function  ItemCard({ item, HandleCardClick, handleCardLike, currentUser }) {
  const ImageModalClick = () => {
    HandleCardClick(item);
  };

  const liked = item.likes.includes(currentUser?._id);


  return (
    <li className="card">
      <h2 className="card__name"> {item.name}</h2>
      {currentUser ? (
      <img
        className={`card__like-btn ${liked ? "card__like-btn_liked" : ""}`}
        onClick={() => handleCardLike({ itemId: item._id, isLiked: liked })}
        src={liked ? LikeBtn : unLikedBtn}
        alt="like-btn"
      ></img> ) : '' }
      <img
        onClick={ImageModalClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}
export default ItemCard;
