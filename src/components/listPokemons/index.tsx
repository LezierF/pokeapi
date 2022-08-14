import { useApiContext } from "../../contexts/ApiContext";
import * as Styled from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { PaginationComponent } from "../Pagination";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import noImage from "../../assets/pngs/NoImage.png";
import Bug from '../../assets/svgs/types/bug'
import { ColorsTypes, typesList } from "./typesList";
import Pokebola from "../../assets/svgs/types/pokebola";
import { firstCharToUP, format3Numbers } from "../../helpers";

export const ListPokemons = () => {

  const { allPokemonsList, setSearch, search, filtered, count, setType, type } = useApiContext();

  const [ref] = useKeenSlider<HTMLDivElement>();


  return (
    <Styled.Container>
      <Styled.Filter>
        <div>
          <h4>Pesquise seu pokémon</h4>
        </div>

        <div>
          <div className="search">
            <SearchOutlinedIcon />
          </div>
          <input
            type="search"
            value={search}
            placeholder='Pesquise um pokémon'
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
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
                      <span style={{color: item.color}}>{item.type}</span>
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
              search.length > 0 ? (
                filtered.map((item: any, key: any) => {
                  return (
                    <a style={{textDecoration: 'none'}} href={`/${item.name}`} rel="noreferrer noopener">
                      <Styled.ContainerList key={key}>
                        <Styled.Div backColor={ColorsTypes[item.types[0].type.name]}>
                            <Styled.ImagePokemon src={item.sprites.other.dream_world.front_default}/>
                        </Styled.Div>

                        <Styled.DivTwo>
                          <Styled.PokeInfos>
                              <div>
                                <span>#{format3Numbers(item.id)}</span>
                                <h3>{firstCharToUP(item.name)}</h3>
                              </div>
                          </Styled.PokeInfos>
                        </Styled.DivTwo>

                      </Styled.ContainerList>
                    </a>
                  );
                })
              ) : (
                allPokemonsList.map((item: any, key: any) => {

                  return (
                    <a style={{textDecoration: 'none'}} href={`/${item.name}`} rel="noreferrer noopener">
                      <Styled.ContainerList key={key}>
                        <Styled.Div backColor={ColorsTypes[item.types[0].type.name]}>
                            <Styled.ImagePokemon src={item.sprites.other.dream_world.front_default}/>
                        </Styled.Div>

                        <Styled.DivTwo>
                          <Styled.PokeInfos>
                              <div>
                                <span>#{format3Numbers(item.id)}</span>
                                <h3>{firstCharToUP(item.name)}</h3>
                              </div>
                          </Styled.PokeInfos>
                        </Styled.DivTwo>

                      </Styled.ContainerList>
                    </a>
                  );
                })

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
