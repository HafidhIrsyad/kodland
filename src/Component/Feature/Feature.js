import React from "react";
import swal from "sweetalert2";

const Feature = (props) => {
  const { name, image, btnName } = props;

  const alertNotif = () => {
    swal.fire("Good job!", `You clicked the button ${name}!`, "success");
  };

  return (
    <div className="feature-name">
      <img alt="square" src={image} className="image" />
      <p className="name">{name}</p>
      <button onClick={alertNotif}>{btnName}</button>
    </div>
  );
};

export default Feature;
