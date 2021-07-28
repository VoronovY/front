import "./style.css";
import { useState } from "react";
import likeImg from "../../images/heart-icon.png";
import likeImgNotActive from "../../images/heart-icon-notactive.png";

export default function FlatItem({ curFlat }) {
  const flat = curFlat.attributes;
  const { address } = curFlat.attributes;
  const agent = curFlat.relationships.attributes;
  const [curLike, setCurLike] = useState(false);

  function like() {
    setCurLike((prev) => !prev);
  }

  return (
    <>
      <div className="card">
        <div className="card__title">
          <h4>{flat.title}</h4>
          <span>
            Площадь:{flat.area} {flat.unit}
          </span>
          <p>Количество комнат: {flat.rooms}</p>
          <p>
            {`Адрес: Город ${address.city}, улица ${address.street}, дом 
            ${address.house} квартира, ${address.room}`}
          </p>
          <p>{`Контакт: ${agent.first_name} ${agent.last_name} ${agent.middle_name}`}</p>
        </div>
        <div className="c-card__like">
          <button onClick={like} className="card__like-btn">
            Нравится
          </button>

          <div className="card__like">
            <img
              className="card__like-img"
              src={curLike ? likeImg : likeImgNotActive}
              alt="like"
            />
          </div>
        </div>
      </div>
    </>
  );
}
