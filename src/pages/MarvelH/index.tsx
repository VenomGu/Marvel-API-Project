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
          <LoginPage />
        </LoginContainer>

        <ButtonSearch>
          <nav>
            <input
              type="text"
              placeholder="Search characters"
              value={searchQuery}
              onChange={handleInputChange}
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
