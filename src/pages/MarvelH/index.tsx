import React, { useState } from "react";
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
              <img
                src="https://github.com/VenomGu/my-react-project/blob/60346761ac7981485f6de6a18d44c5c9ccedbb4e/public/marvel-logo.png"
                alt="marvel-logo"
              ></img>
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
              style={{ width: 300, height: 35, marginBottom: 5 }}
              className="Search"
              type="text"
              placeholder="Search characters by name"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleSearchEnterPress}
            />
            <button style={{ width: 30, height: 35 }} onClick={handleSearch}>
              <FaSearch size={14} />
            </button>
          </nav>
        </ButtonSearch>
      </HeaderWrapper>
    </>
  );
};

export default Header;
