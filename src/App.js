import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/Form/Form.js";
import DogImage from "./components/DogImage/DogImage.js";
import Grid from "@mui/material/Grid";

function App() {
  const [img, setImg] = useState([]);
  const [breed, setBreed] = useState([]);
  const [select, setSelect] = useState();
  const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    const url = "https://dog.ceo/api/breed/" + select + "/images/random";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setImg([json["message"]]));
  }, [select]);

  useEffect(() => {
    const url = "https://dog.ceo/api/breeds/list";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setBreed(json["message"]));
  }, []);

  const handleSelect = (e) => {
    setSelect(e.target.innerText);
  };

  const submitForm = () => {
    const dogSelectorValue = document.getElementById("dog-selector").value;
    setSelect(dogSelectorValue);
    setSelectList([...selectList, { dogName: select, dogImg: img }]);
  };

  const uniqueArray = selectList.filter((value, index) => {
    const _value = JSON.stringify(value);
    return (
      index ===
      selectList.findIndex((obj) => {
        return JSON.stringify(obj) === _value;
      })
    );
  });

  const removeDog = (e) => {
    e.target.parentElement.remove();
  };

  const getRandomDog = () => {
    const randomDog = Math.floor(Math.random() * breed.length);
    setSelect(breed[randomDog]);
    setSelectList([...selectList, { dogName: select, dogImg: img }]);
  };

  return (
    <div className="App">
      <Form
        getRandom={getRandomDog}
        breedData={breed}
        submitForm={submitForm}
        handleSelect={handleSelect}
      />

      <Grid className="ImageGrid">
        {uniqueArray.length === 0
          ? "No dogs selected"
          : uniqueArray &&
            uniqueArray.map((dog, index) => (
              <DogImage
                index={index}
                src={dog.dogImg}
                figcaption={dog.dogName}
                removeDog={removeDog}
              />
            ))}
      </Grid>
    </div>
  );
}

export default App;
