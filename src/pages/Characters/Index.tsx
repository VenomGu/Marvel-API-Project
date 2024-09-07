import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  useEffect(() => {
    api
      .get(`http://gateway.marvel.com/v1/public/characters`)
      .then((response) => {
        setCharacters(response.data.data.results);
        console.log("Characters Working: ", characters);
      })
      .catch((error) => console.log("Not Working: ", error));
  }, []);
  return (
    <>
      <h1>Characters</h1>
    </>
  );
};

export default Characters;
