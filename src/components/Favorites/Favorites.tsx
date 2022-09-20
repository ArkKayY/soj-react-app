import { LOCALSTORAGE_KEY } from "../../constants";
import {
  StyledHomeContainer,
  StyledContainer,
  StyledImg,
  StyledLink,
  StyledHome,
} from "./Favorites.styled";

function Favorites() {
  const storeWoofs: string[] = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEY) || "[]"
  );

  const showFavorites = () => {
    if (storeWoofs.length === 0) {
      return <div>There are no favorites selected</div>;
    }

    return (
      <ul>
        {storeWoofs.map((woof) => (
          <StyledImg key={woof} src={woof} />
        ))}
      </ul>
    );
  };

  return (
    <StyledHomeContainer>
      <StyledContainer>
        <StyledHome>Favorites</StyledHome>
      </StyledContainer>

      <StyledContainer>
        <StyledLink to="/">Go Home</StyledLink>
      </StyledContainer>

      <StyledContainer></StyledContainer>

      <StyledContainer>{showFavorites()}</StyledContainer>
    </StyledHomeContainer>
  );
}

export default Favorites;
