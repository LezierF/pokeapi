import styled from "styled-components";

export const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.font};
  }
`;


export const SearchCard = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px;

`;

export const TextInfo = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: #595959;
  max-width: 10rem;
`;

export const InputSearch = styled.input`
  border: none;
  height: 32px;
  min-width: 240px;
  border-radius: 15px;
  z-index: 10;
  padding: 14px;

  ::placeholder{
    font-size: 10px;
  }

  &:focus{
    outline: 1px solid rgba(0,0,0,0.2);
  }
`;


export const CardPokemons = styled.div`
  background: #FFF;
  height: 100%;
`

export const OptionsType = styled.div`
`;

export const UlOptions = styled.ul`
  margin: 30px;
  color: #909090;
  display: flex;
  justify-content: space-between;
  flex-direction:column ;
  gap: 10px;
  padding-top: 36px;
`;

export const LiOption = styled.li`
  font-weight: 500;
  font-size: 14px;
  padding: 6px;
  list-style-type: none;
  display: flex;
  align-items: center;
  max-width: 150px;

  span{
    margin-left: 8px;
    color: #ababb8;
  }
`;