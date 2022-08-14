import { useApiContext } from "../../contexts/ApiContext";
import * as Styled from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { PaginationComponent } from "../Pagination";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import noImage from "../../assets/pngs/NoImage.png";
import Bug from '../../assets/svgs/types/bug'
import { typesList } from "./typesList";
import Pokebola from "../../assets/svgs/types/pokebola";

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
                      <span >{item.type}</span>
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
                    <Styled.ContainerList key={key}>
                      <Styled.Div>
                        <div ref={ref} className="keen-slider">
                          <div className="keen-slider__slide number-slide1" id="slide">
                            {!!item.sprites.front_default ? (
                              <img src={item.sprites.front_default} alt="pokemonPics" />
                            ) : (
                              <img src={noImage} alt="noimagefound"></img>
                            )}
                          </div>

                          <div className="keen-slider__slide number-slide1" id="slide">
                            <img src={item.sprites.front_shiny} alt="pokemonPics" />
                          </div>
                          <div className="keen-slider__slide number-slide1" id="slide">
                            <img src={item.sprites.back_default} alt="pokemonPics" />
                          </div>
                          <div className="keen-slider__slide number-slide1" id="slide">
                            <img src={item.sprites.back_shiny} alt="pokemonPics" />
                          </div>
                        </div>
                      </Styled.Div>
                      <a href={`/${item.name}`} rel="noreferrer noopener">
                        <Styled.DivTwo>
                          <span className="name"> {item.name}</span>

                          <span>
                            {"#"}
                            {item.id}
                          </span>
                          <div id="sizes">
                            <span>Peso: {item.weight}kg</span>
                            <span> Altura: {item.height}m</span>
                          </div>
                          <div id="types">
                            <span> {item.types[0].type.name}</span>
                            {item.types[1] && <span> {item.types[1].type.name}</span>}
                          </div>
                        </Styled.DivTwo>
                      </a>
                    </Styled.ContainerList>
                  );
                })
              ) : (
                allPokemonsList.map((item: any, key: any) => {

                  console.log(item.sprites.other.dream_world.front_default)
                  return (
                    <a href={`/${item.name}`} rel="noreferrer noopener">
                      <Styled.ContainerList key={key}>
                        <Styled.Div>
                            <Styled.ImagePokemon src={item.sprites.other.dream_world.front_default}/>
                        </Styled.Div>
                        <Styled.DivTwo>

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
