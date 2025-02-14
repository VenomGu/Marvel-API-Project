import React, { useState } from "react";
import {
  HeaderMarvel,
  Title,
  ButtonSearch,
  HeaderWrapper,
  LoginContainer,
  SearchInput,
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

  return (
    <>
      <HeaderMarvel>
        <header>
          <Title></Title>
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
              placeholder="Search characters by name"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleSearchEnterPress}
            />
          </nav>
        </ButtonSearch>
      </HeaderWrapper>
    </>
  );
};

export default Header;
