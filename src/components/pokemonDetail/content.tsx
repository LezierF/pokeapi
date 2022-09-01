import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Link, useParams } from "react-router-dom";
import { ColorsTypes } from "../../helpers/typesList";
import NoImage from "../../assets/svgs/noimage";
import { firstCharToUP, format3Numbers } from "../../helpers";
import { api, detaultApi } from "../../services/api";
import Skeleton from "../skeleton";
import { useApiContext } from "../../contexts/ApiContext";
import StatusBar from "../inputs/StatusBar";
import ButtonPrev from "../../assets/svgs/buttonPrev";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Details: React.FC = () => {
  const { setSearch, setLoading } = useApiContext();
  setLoading(true);
  const [currentPokemon, setCurrentPokemon] = useState({} as any);
  const [evolutions, setEvolutions] = useState<any[]>([]);
  const { name } = useParams();
  const history = useEffect(() => {
    setCurrentPokemon({});
    if (name?.length) {
      api.get(`pokemon/${name}`).then((res) => {
        setCurrentPokemon(res.data);
        setSearch(res.data.types[0].type.name);
        setLoading(false);
      });
    }
  }, [name]);

  return currentPokemon.name ? (
    <Styled.Container>
      <Link to={"/"}>
        <Styled.BackPage>
          <ButtonPrev color={ColorsTypes[currentPokemon.types[0].type.name]} />
          <h2 style={{ color: ColorsTypes[currentPokemon.types[0].type.name] }}>
            Pokédex
          </h2>
        </Styled.BackPage>
      </Link>

      <Styled.Content>
        <Link
          to={
            currentPokemon.id > 1
              ? `/${currentPokemon.id - 1}?${
                  ColorsTypes[currentPokemon.types[0].type.name]
                }`
              : ""
          }
          style={{ textDecoration: "none" }}
        >
          <Styled.LeftArrow
            color={ColorsTypes[currentPokemon.types[0].type.name]}
          >
            <ArrowBackIosNewIcon />
          </Styled.LeftArrow>
        </Link>

        <Styled.CardDetailPokemon>
          <Styled.DivImage
            backColor={ColorsTypes[currentPokemon.types[0].type.name]}
          >
            {currentPokemon?.sprites?.other?.dream_world?.front_default ? (
              <Styled.ImgPokemon
                src={currentPokemon.sprites.other.dream_world.front_default}
              />
            ) : (
              <NoImage />
            )}
          </Styled.DivImage>

          <Styled.DivDetails>
            <Styled.NameAndId>
              <h2>{firstCharToUP(currentPokemon.name)}</h2>
              <span>#{format3Numbers(currentPokemon.id)}</span>
            </Styled.NameAndId>

            <Styled.TypesButtons>
              {currentPokemon?.types &&
                currentPokemon?.types?.length > 0 &&
                currentPokemon.types.map((item: any) => {
                  return (
                    <Styled.SpanTypeInfo
                      key={item.id}
                      backColor={ColorsTypes[item.type.name]}
                    >
                      {item.type.name}
                    </Styled.SpanTypeInfo>
                  );
                })}
            </Styled.TypesButtons>

            <Styled.PersonalInfos>
              <Styled.UlPersonal>
                <Styled.LiPersonal>
                  <span>Altura</span>
                  <p>{currentPokemon.height / 10}m</p>
                </Styled.LiPersonal>

                <Styled.LiPersonal>
                  <span>Peso</span>
                  <p>{currentPokemon.weight / 10}kg</p>
                </Styled.LiPersonal>

                <Styled.LiPersonal
                  color={ColorsTypes[currentPokemon.types[0].type.name]}
                >
                  <span>Habilidades</span>
                  <ul>
                    {currentPokemon.abilities.map((item: any) => {
                      return (
                        <li key={item.ability.name}>{item.ability.name}</li>
                      );
                    })}
                  </ul>
                </Styled.LiPersonal>
              </Styled.UlPersonal>
            </Styled.PersonalInfos>

            <Styled.Stats>
              <Styled.TitleStats>
                <h2>Stats</h2>
              </Styled.TitleStats>
              {currentPokemon.stats.map(
                (item: { base_stat: number; stat: { name: string } }) => {
                  return (
                    <>
                      <StatusBar
                        numbers={item.base_stat}
                        typeStatus={item.stat.name}
                      />
                    </>
                  );
                }
              )}
            </Styled.Stats>
          </Styled.DivDetails>
        </Styled.CardDetailPokemon>

        <Link
          to={
            currentPokemon.id
              ? `/${currentPokemon.id + 1}?${
                  ColorsTypes[currentPokemon.types[0].type.name]
                }`
              : ""
          }
          style={{ textDecoration: "none" }}
        >
          <Styled.RightArrow
            color={ColorsTypes[currentPokemon.types[0].type.name]}
          >
            <ArrowForwardIosIcon />
          </Styled.RightArrow>
        </Link>
      </Styled.Content>
    </Styled.Container>
  ) : (
    <Styled.LoadingCenter>
      <Styled.Loading>
        <Skeleton style={{ width: "100%", height: "100%" }} />
      </Styled.Loading>
    </Styled.LoadingCenter>
  );
};
