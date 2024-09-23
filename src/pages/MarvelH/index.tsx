import React, { useState, KeyboardEvent } from "react";
import {
  HeaderMarvel,
  Title,
  ButtonSearch,
  HeaderWrapper,
  LoginContainer,
} from "../Characters/styles";
import { FaSearch } from "react-icons/fa";
import LoginPage from "../Login";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log("searchQuery 1", searchQuery);
  };

  const handleSearch = (e: any) => {
    onSearch(searchQuery);
    console.log("searchQuery 2", searchQuery);
  };
  const handleSearchEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchQuery);
    }
  };

  const homeButton = () => {
    window.location.reload();
  };

  return (
    <>
      <HeaderMarvel>
        <header>
          <Title>
            <span onClick={homeButton}>
              <img src="marvel-logo.png" alt="marvel-logo"></img>
            </span>
          </Title>
        </header>
      </HeaderMarvel>
      <HeaderWrapper>
        <LoginContainer>
          <LoginPage />
        </LoginContainer>

        <ButtonSearch>
          <nav>
            <input
              className="Search"
              type="text"
              placeholder="Search characters"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleSearchEnterPress}
            />
            <button onClick={handleSearch}>
              <FaSearch size={14} />
            </button>
          </nav>
        </ButtonSearch>
      </HeaderWrapper>
    </>
  );
};

export default Header;
