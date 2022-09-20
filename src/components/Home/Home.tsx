import { useEffect, useState } from "react";
import { LOCALSTORAGE_KEY } from "../../constants";
import { ApiPayload, fetchWoof } from "../../utils/fetch-woof";
import {
  StyledHomeContainer,
  StyledContainer,
  StyledImg,
  StyledHome,
  StyledButton,
  Button,
  StyledImgContainer,
  StyledLink,
} from "./Home.styled";

function Home() {
  const [items, setItems] = useState<ApiPayload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWoof();
      setItems(data);
    };

    fetchData();
  }, []);

  const addToFavorites = (url: string) => {
    const storedWoofs: string[] = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY) || "[]"
    );

    if (!storedWoofs.includes(url)) {
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify([...storedWoofs, url])
      );
      window.alert("Added to Favorites");
    }
  };

  const onRefresh = () => {
    const fetchData = async () => {
      const data = await fetchWoof();
      setItems(data);
    };

    fetchData();
  };

  return (
    <StyledHomeContainer>
      <StyledContainer>
        <StyledHome>Homepage</StyledHome>
      </StyledContainer>

      <StyledContainer>
        <Button onClick={() => onRefresh()}>Refresh</Button>
        <StyledLink to="/favorites">View Favorites</StyledLink>
      </StyledContainer>

      <StyledContainer></StyledContainer>

      <StyledContainer>
        {items.map((item) => (
          <StyledImgContainer>
            <StyledImg key={item.url} src={item.url} />
            <StyledButton onClick={() => addToFavorites(item.url)}>
              Add to Favorites
            </StyledButton>
          </StyledImgContainer>
        ))}
      </StyledContainer>
    </StyledHomeContainer>
  );
}

export default Home;
