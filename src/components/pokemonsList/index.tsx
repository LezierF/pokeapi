import { typesList } from "../../helpers/typesList";
import PaginationComponent from "../pagination/index";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useApiContext } from "../../contexts/ApiContext";
import * as Styled from "./styles";
import Pokebola from "../../assets/svgs/types/pokebola";
import NoImage from "../../assets/svgs/noimage";
import Skeleton from "../skeleton";
import CardPokemon from "../cardpokemon";
import AutoCompletInput from "../inputs/AutoComplet";

export const ListPokemons = (props: any) => {
  const {
    allPokemonsList,
    setSearch,
    search,
    count,
    setType,
    type,
    loading,
    allPokemonsTypeList,
  } = useApiContext();

  return (
    <Styled.Container>
      <Styled.Filter>
        <Styled.StyledDiv>
          <Styled.StyledH4>Pesquise seu pokémon</Styled.StyledH4>
        </Styled.StyledDiv>

        <Styled.StyledDiv>
          <Styled.StyledDiv className="search">
            <SearchOutlinedIcon />
          </Styled.StyledDiv>

          <AutoCompletInput />
        </Styled.StyledDiv>
      </Styled.Filter>

      <Styled.Contents>
        <Styled.LeftContent>
          <Styled.UlList>
            {typesList.map((item: any) => {
              return (
                <>
                  <Styled.LiList
                    key={item.key}
                    onClick={() => {
                      if (item.key === 0) window.location.reload();
                      setType(item.key);
                    }}
                    type={type}
                    keyAtual={item.key}
                  >
                    {<item.iconType width={24} key={item.key} />}
                    <span style={{ color: item.color }}>{item.type}</span>
                  </Styled.LiList>
                </>
              );
            })}
          </Styled.UlList>
        </Styled.LeftContent>

        <Styled.DividerMenu />

        <Styled.RightContainer>
          <Styled.TitleCount>
            <Pokebola width={28} height={28} />
            {type === 0 ? (
              <span>{count * 10} Pokémons</span>
            ) : (
              <span>{count} Pokémons</span>
            )}
          </Styled.TitleCount>

          <Styled.RightContent>
            {loading
              ? Array.from({ length: 10 }).map((item, key) => {
                  return (
                    <Styled.SkeletonCardDiv key={key * key}>
                      <Skeleton style={{ width: "100%", height: "100%" }} />
                    </Styled.SkeletonCardDiv>
                  );
                })
              : allPokemonsTypeList.length > 0
              ? allPokemonsTypeList.map((item: any, key: any) => {
                  return <CardPokemon name={item.pokemon.name} />;
                })
              : allPokemonsList &&
                allPokemonsList.map((item: any, key: any) => {
                  return <CardPokemon name={item.name} />;
                })}
          </Styled.RightContent>
          {type === 0 && (
            <Styled.Pag>
              <PaginationComponent />
            </Styled.Pag>
          )}
        </Styled.RightContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};
