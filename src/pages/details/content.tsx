import React from "react";
import { PerfilPokemon } from "../../components/PokemonPerfil";
import { Header } from "../../components/header";
import { Sty } from "../../components/PokemonPerfil/styles";

export const Content: React.FC = () => {
  return (
    <Sty.ContainerContent>
      <Header />
      <PerfilPokemon />
    </Sty.ContainerContent>
  );
};
