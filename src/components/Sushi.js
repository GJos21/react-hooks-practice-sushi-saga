import React from "react";

function Sushi({ plate, onEatSushi }) {
  const { id, name, image_url, price } = plate;

  return (

    <div className="sushi">
      <div className="plate" onClick={() => onEatSushi(id)} >
        {/* Tell me if this sushi has been eaten! */}
        {plate["eaten"] ? null : (
          <img
            src={image_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
