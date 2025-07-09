import "./ItemCard.css";

function ItemCard ({item,HandleCardClick}) {

    const ImageModalClick= ()=>{
        HandleCardClick(item);
    }


    return(

<li className="card">
    <h2 className="card__name"> {item.name}</h2>
     <img
     onClick={ImageModalClick} 
     className="card__image"
     src={item.link} alt={item.name} />
</li>
    );
}
export default ItemCard;