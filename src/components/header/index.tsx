import React from "react";
import { ThemeSwitcher } from "../../hooks/ThemeSwitcher";
import * as Styled from "./styles";
import Pokemon from "../../assets/pngs/pokemon.png";
import Pokeblu from "../../assets/pngs/pokeblu.png";

export const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.HeaderContent>
        <div className="image">
          <img src={Pokemon} alt="pokemon" />
        </div>

        <div className="pokeblu">
          <img src={Pokeblu} alt='pokebola azul'  />
        </div>

        <div className="theme">
          <ThemeSwitcher />
        </div>


      </Styled.HeaderContent>
    </Styled.Container>
  );
};
