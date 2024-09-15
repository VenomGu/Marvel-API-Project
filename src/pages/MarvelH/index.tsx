import React, { useState } from "react";
import {
  HeaderMarvel,
  Title,
  Nav,
  SearchButton,
  SearchInput,
  ButtonSearch,
  HeaderWrapper,
  LoginContainer,
} from "../Characters/styles";
import { FiLogIn } from "react-icons/fi";
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
    <>
      <HeaderMarvel>
        <header>
          <Title>
            <span onClick={handleSearch}>
              <img src="marvel-logo.png" alt="marvel-logo"></img>
            </span>
          </Title>
        </header>
      </HeaderMarvel>
      <HeaderWrapper>
        <LoginContainer>
          <nav>
            <input
              type="text"
              placeholder="Email or username"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Password"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Login</button>
          </nav>
        </LoginContainer>

        <ButtonSearch>
          <nav>
            <input
              type="text"
              placeholder="Search characters"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
          </nav>
        </ButtonSearch>
      </HeaderWrapper>
    </>
  );
};

export default Header;
