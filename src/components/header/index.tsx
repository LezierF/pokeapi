import React from "react";
import { ThemeSwitcher } from "../../hooks/ThemeSwitcher";
import * as Styled from "./styles";
import Pokemon from "../../assets/pngs/pokemon.png";
import Pokeblu from "../../assets/pngs/pokeblu.png";
import { useLocation, useParams } from "react-router-dom";
import { useApiContext } from "../../contexts/ApiContext";
import { ColorsTypes } from "../../helpers/typesList";


export const Header: React.FC = () => {
  const { pathname, hash } = useLocation()
  const { search } = useApiContext()

  return (
    <Styled.Container color={ColorsTypes[search]}>
      <Styled.HeaderContent>
        <a href="/">
          <div className="image">
            <img src={Pokemon} alt="pokemon" />
          </div>
        </a>

        {
          pathname === "/" && (
            <div className="pokeblu">
              <img src={Pokeblu} alt='pokebola azul' />
            </div>
          )
        }

        <div className="theme">
          <ThemeSwitcher />
        </div>


      </Styled.HeaderContent>
    </Styled.Container>
  );
};
