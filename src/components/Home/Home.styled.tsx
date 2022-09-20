import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledHome = styled("div")`
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled("ul")`
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled("img")`
  width: 200px;
  height: 300px;
`;

export const StyledImgContainer = styled("div")`
  position: relative;
  &:hover {
    & > button {
      display: block;
    }
  }
`;

export const StyledButton = styled("button")`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const Button = styled("button")`
  position: absolute;
  left: 45%;
  transform: translate(-50%, -20%);
  -ms-transform: translate(-50%, -20%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  justifycontent: center;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  left: 55%;
  transform: translate(-50%, -20%);
  -ms-transform: translate(-50%, -20%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 5px;
  justifycontent: center;
  text-decoration: none;
`;
