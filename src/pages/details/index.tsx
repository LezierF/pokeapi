

import React from "react";
import { Details } from "../../components/pokemonDetail/content";
import { Header } from "../../components/header";
import * as Styled from './styles';

export const PokemonDetail: React.FC = () => {
  return (
    <Styled.ContainerContent>
      <Header />
      <Details />
    </Styled.ContainerContent>
  );
};
