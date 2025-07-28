import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  Card,
  CardList,
  CardImage,
  ButtonMore,
  BoxedName,
  BoxOverCard,
  BoxOfStars,
} from "./styles";
import Header from "../../pages/MarvelH/index";
import CharacterDetailsModal from "../CharacterDetailsModal";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators?: { items: { name: string }[] };
  comics?: { items: { name: string }[] };
}

interface FavoriteCharacter extends ResponseData {
  isFavorite: boolean;
  favoriteRank: number;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<FavoriteCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<FavoriteCharacter | null>(null);

  useEffect(() => {
    console.log("Favorite characters SAVED 1", characters);
    localStorage.setItem("favoriteCharacters", JSON.stringify(characters));
  }, [characters]);

  const handleSearch = useCallback(async (query: string) => {
    try {
      const response = await api.get(`/characters`, {
        params: {
          nameStartsWith: query,
        },
      });
      const data = response.data.data.results.map((char: ResponseData) => ({
        ...char,
        isFavorite: false,
        favoriteRank: 0,
      }));
      if (response.data.data.results.length === 0) {
        alert("Character not found");
      }
      setCharacters(data);
    } catch (error) {
      console.log("Character not found", error);
    }
  }, []);

  const handleCardClick = async (characterId: string) => {
    try {
      const response = await api.get(`/characters/${characterId}`);
      const character = response.data.data.results[0];
      setSelectedCharacter({
        ...character,
        isFavorite: character.isFavorite || false,
        favoriteRank: character.favoriteRank || 0,
      });
    } catch (error) {
      console.log("Failed to fetch character details", error);
    }
  };

  const moreChars = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(`/characters`, {
        params: {
          offset,
        },
      });
      const moreCharacters = response.data.data.results.map(
        (char: ResponseData) => ({
          ...char,
          isFavorite: false,
          favoriteRank: 0,
        })
      );
      setCharacters([...characters, ...moreCharacters]);
    } catch (error) {
      console.log("invalid load", error);
    }
  }, [characters]);

  const toggleFavorite = (id: string) => {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === id
          ? { ...character, isFavorite: !character.isFavorite }
          : character
      )
    );
  };

  const updateRank = (id: string, rank: number) => {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === id ? { ...character, favoriteRank: rank } : character
      )
    );
  };

  const sortedCharacters = characters
    .slice()
    .sort(
      (a, b) =>
        b.favoriteRank - a.favoriteRank ||
        Number(b.isFavorite) - Number(a.isFavorite)
    );
  // Fetch characters from API on component mount on first render
  useEffect(() => {
    console.log("Fetching characters from API");
    api
      .get(`/characters`)
      .then((response) => {
        console.log("Characters fetched successfully", response.data);
        setCharacters(
          response.data.data.results.map((char: ResponseData) => ({
            ...char,
            isFavorite: false,
            favoriteRank: 0,
          }))
        );
      })
      .catch((error) => console.log("Not Working: ", error, error.message));
  }, []);

  useEffect(() => {
    console.log("Saving favorites: 2", characters);
    localStorage.setItem("favoriteCharacters", JSON.stringify(characters));
  }, [characters]);

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites = localStorage.getItem("favoriteCharacters");
      console.log("Loaded favorites from localStorage:", storedFavorites);
      if (storedFavorites) {
        const parsedFavorites: FavoriteCharacter[] =
          JSON.parse(storedFavorites);
        setCharacters((prev) =>
          prev.map((character) => {
            const favorite = parsedFavorites.find(
              (fav) => fav.id === character.id
            );
            return favorite ? { ...character, ...favorite } : character;
          })
        );
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const loadFavorites = () => {
      const storedFavorites = localStorage.getItem("favoriteCharacters");
      console.log("Loaded from localStorage:", storedFavorites);
      if (storedFavorites) {
        const parsedFavorites: FavoriteCharacter[] =
          JSON.parse(storedFavorites);
        setCharacters((prev) =>
          prev.map((character) => {
            const favorite = parsedFavorites.find(
              (fav) => fav.id === character.id
            );
            return favorite ? { ...character, ...favorite } : character;
          })
        );
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    console.log("Saving to localStorage:", characters);
    localStorage.setItem("favoriteCharacters", JSON.stringify(characters));
  }, [characters]);

  return (
    <>
      <header>
        <Header onSearch={handleSearch} />
      </header>
      <Container>
        <CardList>
          {sortedCharacters.map((character) => (
            <BoxOverCard>
              <Card
                key={character.id}
                onClick={() => handleCardClick(character.id)}
              >
                <CardImage
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <BoxedName>
                  <h2>{character.name}</h2>
                </BoxedName>
              </Card>
              <BoxOfStars>
                <span>
                  <button onClick={() => toggleFavorite(character.id)}>
                    {character.isFavorite ? "Unfavorite" : "Favorite"}
                  </button>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      style={{
                        color: character.favoriteRank > index ? "gold" : "gray",
                        cursor: "pointer",
                      }}
                      onClick={() => updateRank(character.id, index + 1)}
                    >
                      ★
                    </span>
                  ))}
                </span>
              </BoxOfStars>
            </BoxOverCard>
          ))}
        </CardList>

        <ButtonMore onClick={moreChars}>Load More</ButtonMore>

        {selectedCharacter && (
          <CharacterDetailsModal
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </Container>
    </>
  );
};

export default Characters;
