import { useApiContext } from "../../contexts/ApiContext";
import * as Styled from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { PaginationComponent } from "../Pagination";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import noImage from "../../assets/pngs/NoImage.png";
import Bug from "../../assets/svgs/types/Bug";

export const ListPokemons = () => {
  const { allPokemonsList, setSearch, search, filtered, count } = useApiContext();
  console.log(allPokemonsList)

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
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </Styled.Filter>
      <Styled.Contents>
        <Styled.LeftContent>

        </Styled.LeftContent>

        <Styled.RightContainer>
          
          <Styled.TitleCount>
            <Bug width={42} height={42} fill="#111"/>
            <span>{(count * 10)} Pokémons</span>
          </Styled.TitleCount>

          <Styled.RightContent>

            {
              search.length > 0 ? (
                filtered.map((item: any, key: any) => {
                  console.log('filtrado')
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
                  console.log('total')
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

              )
            }
          </Styled.RightContent>
        </Styled.RightContainer>
      </Styled.Contents>
      <Styled.Pag>
        <PaginationComponent />
      </Styled.Pag>
    </Styled.Container>
  );
};
