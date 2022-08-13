import React from "react";
import { ThemeSwitcher } from "../../hooks/ThemeSwitcher";
import * as Styled from "./styles";
import PokemonLogo from "../../assets/pngs/pokemon.png";
import PokeBlu from '../../assets/pngs/pokeblu.png'

export const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.CardHeader>

        <Styled.ImgLogo src={PokemonLogo} alt='logotipo pokemon' />

        <Styled.InfoHeader>
          <ThemeSwitcher />
        </Styled.InfoHeader>  

      </Styled.CardHeader>

      <Styled.PokeBolaCard>

          <Styled.ImgPokeBlu src={PokeBlu} alt='pokebola azul' />

      </Styled.PokeBolaCard>
    </Styled.Container>
  );
};
