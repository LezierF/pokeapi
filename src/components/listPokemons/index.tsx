import * as Styled from "./styles";
import { ListType } from './optionsLi'

export const Pokemons = () => {

  return (
    <Styled.Container>

      <Styled.SearchCard>
        <Styled.TextInfo>
          Selecione o seu Pokémon.
        </Styled.TextInfo>

        <Styled.InputSearch
          placeholder="Pesquisar pelo nome ou código"
          type={'text'}
        />
      </Styled.SearchCard>


      <Styled.CardPokemons>

        <Styled.OptionsType>
          <Styled.UlOptions>
            {
              ListType.map((item) => {
                return (
                  <Styled.LiOption>
                    {<item.iconType width={18} fillColor={"#ababb8"} />}
                    <span>{item.type}</span>
                  </Styled.LiOption>
                )
              })
            }
          </Styled.UlOptions>
        </Styled.OptionsType>

        

      </Styled.CardPokemons>

    </Styled.Container>
  );
};
