import React, { useEffect, useState } from "react";
import * as Styled from './styles'
import { useLocation, useParams } from "react-router-dom";
import { ColorsTypes, typesList } from "../../helpers/typesList";
import NoImage from "../../assets/svgs/noimage";
import { firstCharToUP, format3Numbers } from "../../helpers";
import { api, detaultApi } from "../../services/api";
import Skeleton from "../skeleton";
import { useApiContext } from "../../contexts/ApiContext";
import Slider from '../inputs/Slider'

export const Details: React.FC = () => {

  const {setSearch} = useApiContext()
  const [currentPokemon, setCurrentPokemon] = useState({} as any);
  const [weaknesses, setWeaknesses] = useState<any[]>([]);
  const { name } = useParams()


  useEffect(() => {
    if (name?.length) {
      api.get(`pokemon/${name}`).then(res => {
        setCurrentPokemon(res.data)
        console.log(res.data)
        setSearch(res.data.types[0].type.name)
      })
    }
    
  }, []);

  

  return (
    currentPokemon.name ? (
      <Styled.Container>
        <Styled.Content>
          <Styled.CardDetailPokemon>

            <Styled.DivImage backColor={ColorsTypes[currentPokemon.types[0].type.name]}>
              {
                currentPokemon?.sprites?.other?.dream_world?.front_default ? (
                  <Styled.ImgPokemon src={currentPokemon.sprites.other.dream_world.front_default} />
                ) : (
                  <NoImage />
                )
              }
            </Styled.DivImage>

            <Styled.DivDetails>
              <Styled.NameAndId>
                <h2>{firstCharToUP(currentPokemon.name)}</h2>
                <span>#{format3Numbers(currentPokemon.id)}</span>
              </Styled.NameAndId>

              <Styled.TypesButtons>
                {
                  currentPokemon?.types && currentPokemon?.types?.length > 0 && (
                    currentPokemon.types.map((item: any) => {
                      return (
                        <Styled.SpanTypeInfo key={item.id} backColor={ColorsTypes[item.type.name]}>{item.type.name}</Styled.SpanTypeInfo>
                      )
                    })
                  )
                }
              </Styled.TypesButtons>

              <Styled.PersonalInfos>
                <Styled.UlPersonal>

                  <Styled.LiPersonal>
                    <span>Altura</span>
                    <p>{(currentPokemon.height) / 10}m</p>
                  </Styled.LiPersonal>

                  <Styled.LiPersonal>
                    <span>Peso</span>
                    <p>{(currentPokemon.weight) / 10}kg</p>
                  </Styled.LiPersonal>

                  <Styled.LiPersonal color={ColorsTypes[currentPokemon.types[0].type.name]}>
                    <span>Habilidades</span>
                    <ul>
                      {
                        currentPokemon.abilities.map((item: any) => {
                          return (
                            <li key={item.ability.name}>
                              {item.ability.name}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </Styled.LiPersonal>

                  

                </Styled.UlPersonal>
              </Styled.PersonalInfos>
              <Styled.Stats>
                      {
                        currentPokemon.stats.map((item: {base_stat: number, stat: {name: string}}) => {

                          return (
                            <>
                              <Styled.TypeStat>
                              {item.stat.name}
                              </Styled.TypeStat>
                              <Slider value={item.base_stat} />
                            </>
                          )
                        })
                      }
                  </Styled.Stats>

            </Styled.DivDetails>

          </Styled.CardDetailPokemon>
        </Styled.Content>
      </Styled.Container>
    ) : (
      <Styled.LoadingCenter>
        <Styled.Loading>
          <Skeleton style={{ width: "100%", height: "100%" }} />
        </Styled.Loading>
      </Styled.LoadingCenter>
    )
  );
};
