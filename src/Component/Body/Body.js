import React from "react";
import Feature from "../Feature/Feature";
import Square from "../../images/square.png";
import Among from "../../images/amongus.png";
import Round from "../../images/round.png";
import Photo from "../../images/photo.jpg";
import "./body.scss";

export default function Body() {
  const bodyDetail = [
    {
      name: "Square Feature",
      btnName: "Detail",
      image: {
        name: Square,
      },
    },
    {
      name: "Amoungus Feature",
      btnName: "Detail",
      image: {
        name: Among,
      },
    },
    {
      name: "Rounded Feature",
      btnName: "Detail",
      image: {
        name: Round,
      },
    },
  ];

  return (
    <div className="body">
      <div className="definition">
        <p className="title">What is POP IT ?</p>
        <p className="deskripsi">
          A Pop-It (also known as Go Pop and Last One Lost) is a fidget toy
          consisting of a usually-brightly colored silicone tray with pokable
          <br />
          bubbles, similar to bubble wrap, that can be flipped and re-used.
          <br />
          They come in a variety of colors, shapes, and sizes, and are marketed
          as a stress-reliever.
        </p>
      </div>
      <div className="feature">
        <p className="title">Feature POP IT</p>
        <div className="list-feature">
          {console.log(bodyDetail, "bodyDetail")}
          {bodyDetail.map((feat, i) => (
            <Feature
              key={i}
              name={feat.name}
              image={feat.image.name}
              btnName={feat.btnName}
            />
          ))}
        </div>
      </div>

      <div className="type">
        <div className="div">
          <h1 className="type-title">Origin</h1>
          <p className="type-description">
            The mechanical design or the Pop-It bubble popper was originally
            <br />
            invented in 1975 by Theo and Ora Coster of Theora Concepts: a<br />
            married Israeli couple who had invented many games including Guess
            <br />
            Who? and Zingo!. Incidentally, Theo was a former classmate of Anne
            <br />
            Frank. According to the BBC, inspiration for its design came from a
            <br />
            dream Ora Coster had when her sister, an artist, passed away from
            <br />
            breast cancer. Recounting his mother`s words, Ora`s son, Boaz
            <br />
            Coster, has said: "She said, 'Theo, imagine a large field of
            <br />
            breasts, that you can push the nipple' She went to him and said do a
            <br />
            carpet of nipples that you can press from one side to the other. And
            <br />
            he did just that.”
          </p>
        </div>
        <img alt="Photos" src={Photo} />
      </div>
    </div>
  );
}
