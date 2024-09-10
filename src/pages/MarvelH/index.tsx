import React, { useState } from "react";
import {
  HeaderMarvel,
  Title,
  Nav,
  SearchButton,
  SearchInput,
} from "../Characters/styles";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log("searchQuery 1", searchQuery);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    console.log("searchQuery 2", searchQuery);
  };

  return (
    <HeaderMarvel>
      <header>
        <nav> </nav>
        <Title>
          <h1>Marvel</h1>
        </Title>
        <Nav>
          <nav>
            <input
              type="text"
              placeholder="Search characters"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
          </nav>
        </Nav>
      </header>
    </HeaderMarvel>
  );
};

export default Header;
