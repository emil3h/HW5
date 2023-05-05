import React from "react";
import { useEffect, useState } from "react";

const ImgAPI = () => {
  const [items, setItems] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/images?_quantity=1&_type=pokemon&_height=300&_width=300")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> One sec the data is still loading </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1> HW5: React and API </h1> 
      <h2> Reload the page to see a new image, with a random title and description </h2>
      {items.data.map((item) => (
        <ul style="list-style: none;" key={item.id}>
          <li>
              Title: {item.title} <br />
              Description: {item.description} <br /> 
              <img src={item.url}/>  
          </li>
        </ul>
      ))}
      <h1>Info</h1>
      <h4>By Emil H.</h4>
      <p>I used <a href="https://fakerapi.it/en">Faker API</a> from <a href="https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/">Big List of Free and Open Public APIs</a> that was provided. </p>
      <p>I choose the Images API which provides images based on the specified parameters. They include: _type, _width, and _height <br /> 
      For _type you can choose: any, animals, architecture, nature, people, tech, kittens, pokemon etc..</p>
    </div>
  );
};

export default ImgAPI;
