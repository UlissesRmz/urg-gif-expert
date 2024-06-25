import { useState } from "react";

import { AddCategory, GifRid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const onAddnewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push("Valorant");
    // setCategories([...categories,"Valorant"])
    setCategories((cat) => [...cat, newCategory]);
    // console.log(newCategory)
  };
  return (
    <>
      <h1>Gif expert</h1>
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={onAddnewCategory}
      />

      {categories.map((categories) => (
        <GifRid key={categories} category={categories} />
      ))}

      <button onClick={onAddnewCategory}>Add new Category</button>
    </>
  );
};
