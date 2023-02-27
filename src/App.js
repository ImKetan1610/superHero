import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchHero = async (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "68a9156e57mshbf668b124122391p1b2246jsnc81becc42b8f",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    let res = await fetch(
      `https://superhero-search.p.rapidapi.com/api/?hero=${search}`,
      options
    );
    let data = await res.json();
    console.log(data);
    if (data) {
      setSearchData([data]);
      setSearch("");
    }
  };

  return (
    <div className="App">
      <form onSubmit={searchHero}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      <Search searchData={searchData} setSearchData={setSearchData} />
      <Home />
      
    </div>
  );
}

export default App;

/*
{id: 346, name: 'Iron Man', slug: '346-iron-man', powerstats: {…}, appearance: {…}, …}
appearance
: 
eyeColor
: 
"Blue"
gender
: 
"Male"
hairColor
: 
"Black"
height
: 
(2) ["6'6", '198 cm']
race
: 
"Human"
weight
: 
(2) ['425 lb', '191 kg']
[[Prototype]]
: 
Object
biography
: 
aliases
: 
(6) ['Iron Knight', 'Hogan Potts', 'Spare Parts Man', 'Cobalt Man II', 'Crimson Dynamo', 'Ironman']
alignment
: 
"good"
alterEgos
: 
"No alter egos found."
firstAppearance
: 
"Tales of Suspence #39 (March, 1963)"
fullName
: 
"Tony Stark"
placeOfBirth
: 
"Long Island, New York"
publisher
: 
"Marvel Comics"
[[Prototype]]
: 
Object
connections
: 
groupAffiliation
: 
"Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense."
relatives
: 
"Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
[[Prototype]]
: 
Object
id
: 
346
images
: 
lg
: 
"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/346-iron-man.jpg"
md
: 
"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/346-iron-man.jpg"
sm
: 
"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/346-iron-man.jpg"
xs
: 
"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/346-iron-man.jpg"
[[Prototype]]
: 
Object
name
: 
"Iron Man"
powerstats
: 
combat
: 
64
durability
: 
85
intelligence
: 
100
power
: 
100
speed
: 
58
strength
: 
85
[[Prototype]]
: 
Object
slug
: 
"346-iron-man"
work
: 
base
: 
"Seattle, Washington"
occupation
: 
"Inventor, Industrialist; former United States Secretary of Defense"
[[Prototype]]
: 
Object



*/
