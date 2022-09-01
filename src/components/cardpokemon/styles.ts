import styled from "styled-components";

export const StyledDiv = styled.div`
`;

export const StyledH4 = styled.h4`
`;

export const StyledInput = styled.input`
`;

export const StyledSpan = styled.span`
`;

export const StyledH3 = styled.h3`
`;


export const ContainerList = styled.div`
  border-radius: 20px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 220px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
   > a {
    text-decoration: none;
   }
`;

type PropsDiv = {
  backColor: any
}

export const Div = styled.div<PropsDiv>`
  display: flex;
  justify-content: center;
  background: white;
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  background: ${props => props.backColor};

  svg{
    max-width: 140px;
    max-height: 100%;
    opacity: 0.6;
  }

  img{
    max-width: 100px;
  }
`;

export const DivTwo = styled.div`
  z-index: 10;
`;

export const ImagePokemon = styled.img`
`;

export const PokeInfos = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 150%;
  color: ${({ theme }) => theme.font};
  text-decoration: none;
  margin-top: 24px;
  
  span {
    display: block;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: ${({ theme }) => theme.font};
  }

  h3{
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 150%;
    color: ${({ theme }) => theme.font};
  }
`;

export const DivInfoTypeButton = styled.div`
  display: flex;
  gap:  10px;
`;

type SpanTypeProps = {
  backColor: string
}

export const SpanTypeInfo = styled.span<SpanTypeProps>`
  margin-top: 5px;  
  background: ${props => props.backColor};
  padding-inline: 10px;
  border-radius: 10px;
  color: white;
`;

export const StyledDivInfos = styled.div`
  width: 100%;
  padding-inline: 20px;
`;