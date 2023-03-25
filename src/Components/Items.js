import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../assets/greek salad.jpg"),
  },
  {
    title: "Bruchetta ",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Its a must try from our end.",
    getImageSrc: () => require("../assets/dish 6.jpg"),
  },
  {
    title: "Egg Salad",
    description:
      "The famous egg salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../assets/dish 2.jpg"),
  },
  {
    title: "Sandwiches",
    description:
      "Our sandwiches is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Its a must try from our end.",
    getImageSrc: () => require("../assets/dish 3.jpg"),
  },
  {
    title: "Steak",
    description:
      "The famous steak of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../assets/dish 4.jpg"),
  },
  {
    title: "Lemon Desserts",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/dish 5.jpg"),
  },
];

const Items = () => {
  return (
        <div>
          <h1 className="card-heading">This weeks special!</h1>
        {projects.map((project) => (
          <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          />
        ))}
        </div>
  );
};

export default Items;
