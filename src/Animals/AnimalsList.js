import React from "react";
import AnimalsItem from "./AnimalsItem";

export default function AnimalsList(props) {
    return (
        <ul>
            {props.ourAnimals.map(Animal => {
                return <AnimalsItem Animalname={Animal} key={Animal.id}></AnimalsItem>
            })}
        </ul>
    )
}