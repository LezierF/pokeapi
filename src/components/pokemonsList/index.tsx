import { firstCharToUP, format3Numbers } from "../../helpers";
import { ColorsTypes, typesList } from "./typesList";
import { PaginationComponent } from "../pagination";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useApiContext } from "../../contexts/ApiContext";
import * as Styled from "./styles";
import Pokebola from "../../assets/svgs/types/pokebola";
import NoImage from "../../assets/svgs/noimage";
import Skeleton from "../skeleton";

export const ListPokemons = () => {

  const {
    allPokemonsList,
    setSearch,
    search,
    filtered,
    count,
    setType,
    type,
    loading
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

          <Styled.StyledInput
            type="search"
            value={search}
            placeholder='Pesquise um pokémon'
            onChange={(event) => setSearch(event.target.value)}
          />

        </Styled.StyledDiv>

      </Styled.Filter>

      <Styled.Contents>
        <Styled.LeftContent>
          <Styled.UlList>
            {
              typesList.map((item: any) => {
                return (
                  <>
                    <Styled.LiList
                      onClick={() => {
                        setType(item.key)
                      }}
                      type={type}
                      keyAtual={item.key}
                    >
                      {<item.iconType width={24} key={item.key} />}
                      <span style={{ color: item.color }}>{item.type}</span>
                    </Styled.LiList>
                  </>
                )
              })
            }
          </Styled.UlList>
        </Styled.LeftContent>

        <Styled.DividerMenu />

        <Styled.RightContainer>


          <Styled.TitleCount>
            <Pokebola width={28} height={28} />
            {
              type === 0 ? (<span>{count * 10} Pokémons</span>) : (<span>{count} Pokémons</span>)
            }
          </Styled.TitleCount>

          <Styled.RightContent>
            {
              loading ? (
                Array.from({ length: 10 }).map((item, key) => {
                  return (
                    <Styled.SkeletonCardDiv>
                      <Skeleton style={{ width: "100%", height: "100%" }} />
                    </Styled.SkeletonCardDiv>
                  )
                })
              ) : (
                search.length > 0 ? (
                  filtered.map((item: any, key: any) => {
                    return (
                      <a style={{ textDecoration: 'none' }} href={`/${item.name}`} rel="noreferrer noopener">
                        <Styled.ContainerList key={key}>
                          <Styled.Div backColor={ColorsTypes[item.types[0].type.name]}>
                            <Styled.ImagePokemon src={item.sprites.other.dream_world.front_default} />
                          </Styled.Div>

                          <Styled.DivTwo>
                            <Styled.PokeInfos>
                              <Styled.StyledDiv>

                                <Styled.StyledSpan>#{format3Numbers(item.id)}</Styled.StyledSpan>
                                <Styled.StyledH3>{firstCharToUP(item.name)}</Styled.StyledH3>

                              </Styled.StyledDiv>
                            </Styled.PokeInfos>
                          </Styled.DivTwo>

                        </Styled.ContainerList>
                      </a>
                    );
                  })
                ) : (
                  allPokemonsList.map((item: any, key: any) => {
                    return (
                      <a style={{ textDecoration: 'none' }} href={`/${item.name}`} rel="noreferrer noopener">
                        <Styled.ContainerList key={key}>
                          <Styled.Div backColor={ColorsTypes[item.types[0].type.name]}>
                            {
                              item.sprites.other.dream_world.front_default ? (
                                <Styled.ImagePokemon src={item.sprites.other.dream_world.front_default} />
                              ) : (
                                <NoImage />
                              )
                            }
                          </Styled.Div>

                          <Styled.StyledDivInfos>
                            <Styled.PokeInfos>
                              <Styled.StyledDiv>

                                <Styled.StyledSpan className="spanID">#{format3Numbers(item.id)}</Styled.StyledSpan>
                                <Styled.StyledH3>{firstCharToUP(item.name)}</Styled.StyledH3>

                              </Styled.StyledDiv>

                              <Styled.DivInfoTypeButton >
                                {
                                  item.types.map((item: any) => {
                                    return (
                                      <Styled.SpanTypeInfo backColor={ColorsTypes[item.type.name]}>{item.type.name}</Styled.SpanTypeInfo>
                                    )
                                  })
                                }
                              </Styled.DivInfoTypeButton>
                            </Styled.PokeInfos>
                          </Styled.StyledDivInfos>

                        </Styled.ContainerList>
                      </a>
                    );
                  })
                )

              )
            }
          </Styled.RightContent>
          {
            type === 0 && (
              <Styled.Pag>
                <PaginationComponent />
              </Styled.Pag>
            )
          }
        </Styled.RightContainer>
      </Styled.Contents>

    </Styled.Container>
  );
};
