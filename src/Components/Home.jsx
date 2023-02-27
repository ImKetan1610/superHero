import React, { useEffect, useState } from "react";

const Home = () => {
  const [heroData, setHeroData] = useState([]);

  const getHeroes = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "68a9156e57mshbf668b124122391p1b2246jsnc81becc42b8f",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    fetch("https://superhero-search.p.rapidapi.com/api/heroes", options)
      .then((response) => response.json())
      .then((response) => setHeroData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div className="heroDiv">
      {heroData.map((hero, key) => {
        const relationArray = hero.connections.relatives.split(",").slice(0, 3);
        if(!relationArray){
            relationArray = null
        }
        //   console.log(relationArray)
        return (
          <div key={key} className="heroImageDiv">
            <img src={hero.images.md} alt="" />
            <div className="heroDetailsDiv">
              <span className="name">{hero.name}</span>
            </div>
            {/* firstApperance, publiher, occupation, relation */}
            {hero.biography.firstAppearance !== "-" &&
            hero.biography.firstAppearance !== null ? (
              <span className="appeared">
                <span>First Appeared In: </span>
                {hero.biography.firstAppearance}
              </span>
            ) : null}

            {hero.biography.publisher !== "-" &&
            hero.biography.publisher !== null ? (
              <span className="publisher">
                <span>Published By: </span>
                {hero.biography.publisher}
              </span>
            ) : null}

            {hero.work.occupation !== "-" && hero.work.occupation !== null ? (
              <span className="occupation">
                <span>A</span> {hero.work.occupation}
              </span>
            ) : null}

            {hero.connections.relatives !== "-" &&
            hero.connections.relatives !== null ? (
              <span className="relation">
                <span>Relations: </span>
                {relationArray.map((ele, key) => {
                  return (
                    <span key={key} className="indRelation">
                      {" "}
                      - {ele}
                    </span>
                  );
                })}
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
