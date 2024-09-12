import React from "react";
import {
  ModalOverlay,
  ModalContent1,
  ModalContent2,
  ModalContent3,
} from "../Characters/styles";

interface CharacterDetailsModalProps {
  character: any;
  onClose: () => void;
}

const CharacterDetailsModal: React.FC<CharacterDetailsModalProps> = ({
  character,
  onClose,
}) => {
  const creators = character.creators?.items || [];
  const comics = character.comics?.items || [];

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent1 onClick={(e) => e.stopPropagation()}>
        <h2>{character.name}</h2>
        <p>{character.description || "No description available."}</p>
      </ModalContent1>
      <ModalContent2 onClick={(e) => e.stopPropagation()}>
        <h3>Creators:</h3>

        {creators.length > 0 ? (
          <ul>
            {creators.map((creator: any, index: number) => (
              <li key={index}>{creator.name}</li>
            ))}
          </ul>
        ) : (
          <p>No creators information available.</p>
        )}
      </ModalContent2>
      <ModalContent3 onClick={(e) => e.stopPropagation()}>
        <h3>Comics:</h3>
        {comics.length > 0 ? (
          <div>
            {comics.map((comic: any, index: number) => (
              <li key={index}>{comic.name}</li>
            ))}
          </div>
        ) : (
          <p>No comics information available.</p>
        )}
      </ModalContent3>
    </ModalOverlay>
  );
};

export default CharacterDetailsModal;
