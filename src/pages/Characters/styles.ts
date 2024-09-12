import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%; 
  background-color: #202020;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around; /* Distribute cards evenly */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column; /* Stack image and text vertically */
  width: 300px; /* Adjust width as needed */
  height: auto;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  h2, p {
      padding: 10px;
      text-align: center;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
`;

export const CardContent = styled.div`
  .hide {
  display: none;
}

.CardImage:hover + .hide {
  display: block;
  color: red;
}
  
`;

export const ButtonMore = styled.button`
  background-color: #f1f1f1;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
      background-color: rgba(255, 255, 255, 0.2);
  }
`;  

/* Header Styles */
export const HeaderMarvel = styled.header`
  display: flex; /* Allow for side-by-side elements */
  justify-content: space-around; /* Distribute elements evenly */
  align-items: center; /* Vertically center content */
  width: 100%; /* Fill entire width */
  height: 80px; /* Adjust height as desired */
  background-color: #202020;
  padding: 0 20px; /* Add horizontal padding */
  box-sizing: border-box; /* Include padding in width calculation */
`;

/* Title Styles */
export const Title = styled.h1`
  color: #fff; /* White text */
  font-size: 2rem; /* Adjust font size */
  font-weight: bold;
  margin: 0; 
  border-radius: 10px;
  width: 160px;
  height: 70px;
  background-color: rgba(226, 54, 54)
`;

/* Navigation Styles */
export const Nav = styled.nav`
  display: flex; /* Allow for side-by-side elements */
  align-items: space-between; /* Vertically center content */
`;

export const SearchInput = styled.input`
  background-color: #f1f1f1; /* Light gray background */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  padding: 5px 10px; /* Add padding */
  font-size: 1rem; /* Adjust font size */
  margin-right: 10px; /* Add spacing between search and button */
`;

export const SearchButton = styled.button`
  background-color: transparent; /* Transparent background */
  border: 1px solid #fff; /* White border */
  border-radius: 5px; /* Rounded corners */
  padding: 5px 10px; /* Add padding */
  font-size: 1rem; /* Adjust font size */
  color: #fff; /* White text */
  cursor: pointer; /* Indicate clickable element */
  transition: all 0.2s ease; /* Add hover effect */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* White background on hover */
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, , 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent1 = styled.div`
  background: rgba(255, 255, 0, 0.9);
  padding: 20px;
  max-width: 500px; /* Keeps the box from getting too wide */
  width: auto; /* Allows the width to adjust based on content */
  font-size: 20px;
  margin: 25px;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5% / 4% 95% 6% 95%;
  transform: rotate(2deg);
  float: left;
`;
export const ModalContent2 = styled.div`
  background: rgba(255, 0, 0, 0.9);
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  margin:25px;
  height:250px;
  border: solid black;
  border-color: black;
  float:left;
  width:auto;
  max-width: 500px;
  border-width: 3px 3px 5px 5px;
  border-radius:4% 95% 6% 95%/95% 4% 92% 5%;
  transform: rotate(-2deg);
`;
export const ModalContent3 = styled.div`
  background: rgba(0, 0, 255, 0.9);
  padding: 20px;
  max-width: auto;
  width: 90%;
  font-size: 20px;
  width:auto;
  height:auto;
  border: solid black;
  border-color: black;
  float:left;
  border-width: 5px 3px 3px 5px;
  border-radius:95% 4% 97% 5%/4% 94% 3% 95%;
  transform: rotate(2deg);

  
`;