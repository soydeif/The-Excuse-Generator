/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  let randomNumber = Math.random() * 10;
};

let generateExcuse = () => {
  let pronoum = ["A", "The"];
  let subjet = ["dog", "thief", "racoon"];
  let action = ["bit my", "threw my", "ate my"];
  let possetion = ["homework", "laptop", "lunch"];
  let where = ["on the street", "in the pool", "In the zoo"];

  let proIndx = Math.floor(Math.random() * pronoum.length);
  let subjIndx = Math.floor(Math.random() * subjet.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoum[proIndx] +
    " " +
    subjet[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[whereIndx]
  );
};
