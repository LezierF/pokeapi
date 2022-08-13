import styled from "styled-components";

export const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.font};
  }
`;
export const Contents = styled.div`
  display: flex;
  background: #FFF;
  box-shadow: 0px 5px 5px 4px rgba(0,0,0,0.56);
  -webkit-box-shadow: 0px 5px 5px 4px rgba(0,0,0,0.56);
  -moz-box-shadow: 0px 5px 5px 4px rgba(0,0,0,0.56);

  @media (min-width: 472px) {
    
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  max-width: 22rem;
  min-width: 240px;
`;

export const RightContent = styled.div`
 display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;


  @media (min-width: 1920px) {
    margin: 0 20rem;
  }
  @media (max-width: 1600px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1300px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 968px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 714px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const RightContainer = styled.div`
`;

export const TitleCount = styled.div`
  margin-block: 55px;
  
  svg{
    width: 40px;
    height: 40px;

    path{
      width: 40px;
    }
  }

  span{
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 150%;
    color: #4D5053;
    font-family: "Montserrat", sans-serif;
  }
`;

export const ContainerList = styled.div`
  border-radius: 20px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.card};
  width: 220px;
  height: 220px;
  position: relative;
  margin: 0 auto;

   > a {
    text-decoration: none;
   }
`;

export const Div = styled.div`
  width: 100%;

  #slide {
    display: flex;
    justify-content: center;

    > img {
      width: 90px;
      transition: 0.5s ease-in-out;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
`;

export const DivTwo = styled.div`
  display: block;

  > span {
    display: flex;
    justify-content: center;
    font-size: 20px;
    text-transform: capitalize;
    align-items: center;
    font-weight: 600;
  }

  .name {
    background-color: white;
    border-radius: 5px;
    color: black;
  }

  > span:nth-child(2) {
    position: absolute;
    top: 5px;
    left: 15px;
    font-size: 12px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  > #types {
    display: flex;
    justify-content: center;
    gap: 5px;

    > span {
      text-transform: capitalize;
      padding: 5px 20px;
      background-color: white;
      color: black;
      border-radius: 5px;
    }
  }
`;

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
    color: #2F3133;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
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
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
