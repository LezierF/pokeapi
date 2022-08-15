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

export const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const Contents = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;

  @media (max-width: 468px) {
    flex-direction: column;
  }
`;

export const DividerMenu = styled.div`
  border-right: 1px solid rgba(0,0,0,0.10);
  margin-inline: 25px;
`;

export const LeftContent = styled.div`
  width: 100%;
  max-width: 8rem;
  min-width: 156px;
  display: flex;
  justify-content: right;
  margin-block: 68px;

  @media (max-width: 620px) {
    margin-left: 20px;
  }

  @media (max-width: 468px) {
    justify-content: center;
    max-width: 100%;
    min-width: 0;
    margin: 0;
    margin-top: 16px;
  }
`;

export const RightContent = styled.div`
 display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  

  @media (max-width: 1600px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1300px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1040px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 778px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const RightContainer = styled.div`

  .loading-card{
    flex-shrink: 0;
    height: 2rem;
    width: 100%;
    margin-top: 1.2rem;
  }
`;

export const TitleCount = styled.div`
  margin-block: 65px;
  display: flex;
  align-items: center;
  

  span{
    font-weight: 600;
    margin-left: 10px;
    font-size: 1.2rem;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.font};
    font-family: "Montserrat", sans-serif;
  }

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

//FILTRO

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 74px;
  margin-block: 52px;

  h4{
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.font};
  }

  @media (min-width: 1000px) {
    margin-inline: 10%;
  }

  @media (max-width: 704px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 54px;
    flex-direction: column;
  }

  @media (max-width: 442px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 54px;
    margin-bottom: 22px;
    flex-direction: column;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: center;
    
    .search {
      left: 35px;
      top: 8px;
      position: relative;
    }
    > input {
      width: 280px;
      border: 1px solid white;
      border-radius: 15px;
      padding: 10px 40px;
      outline-color: rgba(0,0,0,0.20);
      background-color: ${({ theme }) => theme.colors.input.bg};
    }
  }
`;

export const Pag = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

//LISTA DE SELECT LATERAL ESQUERDO

export const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 468px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0;
    justify-content: center ;
  }

`;

type PropsLi = {
  type: any;
  keyAtual: any
}

export const LiList = styled.li<PropsLi>`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 168px;
  cursor: pointer;
  height: 32px;
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.keyAtual === props.type ? "#f7f7f7" : ''};

  span{
    color: #aaa7a7;
    box-sizing: border-box;
    list-style: none;
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 468px) {
    min-width: 110px;
  }
`;


//CARDS pokemon 

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

//INFORMAÇÕES NO CARD DE POKEMON 

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

// SKELETONS E LOADINGS

export const SkeletonCardDiv = styled.div`
  width: 220px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;