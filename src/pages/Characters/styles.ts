import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%; 
  background-color: black;
  justify-content: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around; 
`;
export const BoxedName = styled.div`
  display: flex;
  flex-direction: center;
  font-style: italic;
  text-align: center;
  justify-content: center;
  width: 200px;
  height: auto;
  line-height: 1.2em;
  margin-top: 1.5em;
  margin-left: 2.5em;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  h2, p {
      padding: 10px;
      text-align: center;
  }
  `;

export const BoxOverCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin-top: 1.5em;
  background-size: cover;
  background-position: center;
  background-image: radial-gradient(circle, #49a1aa 0%, #333750 100%);
  box-shadow: 0 0 2px white;
  transition: all 0.3s ease-in-out; 
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #efc501;
    border-radius: 2%;
  }
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px; 
  line-height: 1.2em;
  margin: 1.5em;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 1px white;
  transition: all 0.3s ease-in-out;
  h2, p  {
      padding: 10px;
      text-align: center;
  }
`;

export const CardImage = styled.img`
  display: flex;
  flex-direction: column;
  width: auto; 
  height: 270px;

  margin: 10px;
  border-radius:3% 3% 3% 3%/3% 3% 3% 3%;
  transition: all 0.3s ease-in-out;
  h2, p {
      padding: 10px;
      text-align: center;
  }
      &:hover {
        width: 280px;
      }
`;

export const ButtonMore = styled.button`
  background-color: #f1f1f1;
  height: 40px;
  width: 400px;
  cursor: pointer;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
      background-color: lightgray;
      background-image: radial-gradient(circle, #49a1aa 0%, #333750 100%);
      box-shadow: 0 0 20px #efc501;
      border-radius: 2%;
  }
`;  
export const HeaderWrapper = styled.header`
  display: flex; 
  flex-direction: row;
  justify-content: space-between; 
  align-items: stretch; 
  width: 100%; 
  height: 20px; 
  background-color: black;
  padding: 0 20px; 
  box-sizing: border-box;
      @media(max-width: 640px) {
        justify-content:stretch;
      }
      @media(max-width: 520px){
        
      }
`;	

export const HeaderMarvel = styled.header`
  display: flex; 
  justify-content: center; 
  align-items: left; 
  background-color: black;
  padding: 0 20px; 
  box-sizing: border-box;
  padding-bottom: 35px;
  margin-bottom: 35px;

  img {
    width: 200px;
    height: 100px;
    margin-top: 0px;
    margin-bottom: -10px;
    @media (max-width: 640px) {
    width: 150px;
    height: 75px;
    margin-top: 0px;
    margin-bottom: -10px;
    }
    @media (max-width: 425px) {
      width: 50px;
      height: 25px;
    }
  }
`;
export const ButtonSearch = styled.nav`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  @media (max-width: 640px) {
    margin-bottom: 50px;
    padding-bottom: 5px;
  }
` ;
export const LoginContainer = styled.nav`
  display: flex; 
  align-items: flex-end; 
  justify-content: space-between;
`;
export const BoxOfStars = styled.div`
  display: flex;
  align-items: left;
  width: 300px;
  margin-bottom: 3px;
`;

export const Title = styled.span`
  display: flex; 
  align-items: center;
  cursor: pointer;
  padding-top: 1px;
  margin-top: 10px;
  transition: all 0.2s ease; 
  box-shadow: 1px 1px 2px white;
  transition: all 0.3s ease-in-out; 

  &:hover {
    background-image: radial-gradient(circle, #49a1aa 0%, #333750 100%);
    box-shadow: 0 0 20px #efc501;
  }
  
`;

export const Nav = styled.nav`
  display: flex; 
  align-items: space-between; 
`;

export const SearchInput = styled.input`
  background-color: #f1f1f1; 
  border: none; 
  border-radius: 5px; 
  padding: 5px 10px; 
  font-size: 1rem; 
  margin-right: 10px; 
  width: 300px;
  height: 35px;
    @media(max-width: 640px) {
      width: 200px;
    }
    @media(max-width: 425px) {
      width: 100px;
    }
`;

export const SearchButton = styled.button`
  background-color: transparent; 
  border: 1px solid #fff; 
  border-radius: 5px;
  padding: 5px 10px; 
  font-size: 1rem; 
  color: #fff; 
  cursor: pointer; 
  transition: all 0.2s ease;
  width: 300px;
  height: 35px;
  margin-bottom: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); 
    @media(max-width: 640px) {
      width: 200px;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: radial-gradient(circle, black 0%, black 100%);
  width: auto;
  max-height: 500px;
  font-size: 20px;
  margin: 25px;
  border: solid gold;
  border-width: 3px 4px 3px 5px;

  @media (max-width: 845px) { // Adjust the breakpoint as needed
    flex-direction: column;
  }
`;

export const ModalContent1 = styled.div`
  background-image: radial-gradient(circle, #fc1919 0%,  #960202 100%);
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px; 
  max-height: 400px;
  height: auto;
  width: auto; 
  font-size: 20px;
  margin-top: 25px;
  margin-left: 25px;
  margin-bottom: 25px;
  border: solid gold;
  float: left;
    @media (max-width: 845px) { 
        max-width:auto;
        max-height:auto;
        flex-direction: row;
        margin: auto;
        justify-content: left;
        font-size:70%;
        display: none;
      }
    img {
      width: 350px;
      height: 250px;
      max-width: 100%;
      max-height: 100%;
      margin-bottom:10px;
      opacity: 0.87; 
        --mask-height: 25px; 
        mask-image: linear-gradient(to top, transparent 0%, black var(--mask-height));
        -webkit-mask-image: linear-gradient(to top, transparent 0%, black var(--mask-height)); 
        @media (max-width: 845px) { 
          display: none;
          font-size:70%
      }
    }
`;
export const ModalContent2 = styled.div`
  background-image: radial-gradient(circle, #fc1919 0%,  #960202 100%);
  padding: 20px;  
  font-size: 20px;
  margin:25px;
  height:auto;
  max-height:400px;
  border: solid gold;
  float:left;
  width:auto;
  max-width: 300px;
  @media (max-width: 845px) { 
        max-width:auto;
        max-height:auto;
        flex-direction: row;
        margin: 5px;
        font-size: 70%;
      }
      @media (max-width: 400px) { 
        max-width:auto;
        max-height:auto;
        flex-direction: row;
        margin: 5px;
        font-size: 50%;
      }
`;
export const ModalContent3 = styled.div`
  background-image: radial-gradient(circle, #fc1919 0%,  #960202 100%);
  padding: 20px;
  max-width: auto;
  max-height: fit-content;
  width: 90%;
  font-size: 14px;
  width:auto;
  height:auto;
  border: solid black;
  border-color: gold;
  float:left;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
  @media (max-width: 845px) { 
        max-width:auto;
        max-height:auto;
        flex-direction: row;
        margin: 5px;
        font-size: 60%;
      }
      @media (max-width: 425px) { 
        max-width:auto;
        max-height:auto;
        flex-direction: row;
        margin: 5px;
        font-size: 50%;
      }
`;

export const HomeButton = styled.button`
  background-color: #F0131E; 
  border: 1px solid #fff; 
  border-radius: 5px;
  padding: 5px 10px; 
  font-size: 1rem; 
  color: white; 
  cursor: pointer; 
  transition: all 0.2s ease; 
  margin-bottom: 10px;
  box-shadow: 0 0 2px white;
  transition: all 0.3s ease-in-out; 
  cursor: pointer;

  &:hover {
    background-image: radial-gradient(circle, #49a1aa 0%, #333750 100%);
    box-shadow: 0 0 20px #efc501;
    border-radius: 2%;
  }
`;