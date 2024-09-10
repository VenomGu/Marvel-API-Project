import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  Card,
  CardList,
  CardImage,
  CardContent,
  ButtonMore,
  HeaderMarvel,
  Title,
  Nav,
  SearchButton,
  SearchInput,
} from "./styles";
import Header from "../../pages/MarvelH/index";
import { FiChevronDown } from "react-icons/fi";
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

  const handleSearch = useCallback(
    async (query: string) => {
      try {
        const response = await api.get(
          "http://gateway.marvel.com/v1/public/characters",
          {
            params: {
              nameStartsWith: query,
            },
          }
        );
        setCharacters(response.data.data.results);
        console.log("Found Characters: ", response.data.data.results);
      } catch (error) {
        console.log("Character not found", error);
      }
    },
    [characters]
  );

  const moreChars = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(
        "http://gateway.marvel.com/v1/public/characters",
        {
          params: {
            offset,
          },
        }
      );
      setCharacters([...characters, ...response.data.data.results]);
    } catch (error) {
      console.log("invalid load", error);
    }
  }, [characters]);

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
      <header>
        <Header onSearch={handleSearch} />
      </header>
      <Container>
        <CardList>
          {characters.map((character) => (
            <Card key={character.id}>
              <CardImage
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <CardContent>
                <h2>{`Name: ${character.name}`}</h2>
                {character.description && (
                  <p>{`Description: ${character.description}`}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </CardList>
        <ButtonMore onClick={moreChars}>
          <FiChevronDown size={20} />
          Load More
          <FiChevronDown size={20} />
        </ButtonMore>
      </Container>
    </>
  );
};

export default Characters;
