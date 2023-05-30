import "./App.css";
import { useState } from "react";

function App() {
  // const [dogImg, setDogImg] = useState("");
  const [dogList, setDogList] = useState([]);

  // const onClickHandler = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((responce) => responce.json())
  //     .then((data) => setDogImg(data.message))
  //     .catch((err) => console.log(err));
  // };

  // const onClickHandler = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => setDogImg(data.message))
  //     .catch((er) => console.log(er))
  // };

  // const onClickHandler = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => setDogImg(data.message));
  // };

  // const onClickHandler = async () => {
  //   try {
  //     const response = await fetch("https://dog.ceo/api/breeds/image/random");
  //     const data = await response.json();
  //     setDogImg(data.message);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // const onClickHandler = async () => {
  //   try {
  //     const response = await fetch("https://dog.ceo/api/breeds/image/random");
  //     const data = await response.json();
  //     setDogImg(data.message);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const onClickHandler = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      // setDogImg(data.message);
      setDogList([...dogList, data.message]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const showDogList = dogList.map((el, index) => {
    return (
      <div className="dogs" key={index}>
        <img src={el} alt="dogs" />
      </div>
    );
  });

  return (
    <div className="app">
      <h1>DOG GALLERY</h1>
      <button onClick={onClickHandler}>Get a dog picture🐶 </button>
      <div className="dog-shelter">{showDogList}</div>
    </div>
  );
}

export default App;
