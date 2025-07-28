import React, { useState } from "react";
import {
  HeaderMarvel,
  Title,
  ButtonSearch,
  HeaderWrapper,
  LoginContainer,
  SearchInput,
} from "../Characters/styles";
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

  return (
    <>
      <HeaderMarvel>
        <header>
<<<<<<< HEAD
          <Title>
            <span onClick={homeButton}>
              <img src="../../assets/marvel-logo.png" alt="marvel-logo"></img>
            </span>
          </Title>
=======
          <Title></Title>
>>>>>>> 4775ead8eef95a472f7f75dc926a1a3528f2c7da
        </header>
      </HeaderMarvel>
      <HeaderWrapper>
        <LoginContainer>
          <LoginPage />
        </LoginContainer>

        <ButtonSearch>
          <nav>
            <button
              style={{ width: 30, height: 35, marginTop: 5 }}
              onClick={handleSearch}
            >
              <FaSearch size={14} />
            </button>
            <input
              style={{ width: 200, height: 35, marginBottom: 30 }}
              className="Search"
              type="text"
              placeholder="Search characters"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleSearchEnterPress}
            />
<<<<<<< HEAD
            <button
              style={{ width: 30, height: 35 }}
              onClick={handleSearch}
            ></button>
=======
>>>>>>> 4775ead8eef95a472f7f75dc926a1a3528f2c7da
          </nav>
        </ButtonSearch>
      </HeaderWrapper>
    </>
  );
};

export default Header;
