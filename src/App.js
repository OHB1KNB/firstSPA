import React from 'react';
import Header from "./startpage/header";
import Footer from "./startpage/footer";
import AnimalsList from "./Animals/AnimalsList";

function App() {
    const Animals = [
        {
            id: 1,
            title: 'Cats',
            content: 'meow'
        },
        {
            id: 2,
            title: 'Dogs',
            content: 'gav'
        },
        {
            id: 3,
            title: 'Hamsters',
            content: 'no sound'
        }
    ]
  return (
      <div>
        <Header ourAnimals = {Animals}></Header>
        <AnimalsList ourAnimals = {Animals}></AnimalsList>
        <Footer></Footer>
      </div>
  )
}

export default App;
