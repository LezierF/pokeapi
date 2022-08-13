import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 140px;
  padding: 35px;
  background: radial-gradient(circle at bottom, #0a45a4 , #3f9fe4);
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.56);
  -webkit-box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.56);
  -moz-box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.56);
`;


const Balance = () => {
  const balance = keyframes`
    0%{
      transform: scale(0.92);
    }
    50%{
      transform: scale(1.2);
      transform: rotate(10deg);
    }
    70%{
      transform: rotate(-10deg);
    }
    0%{
      transform: scale(0.92);
      transform: rotate(0deg);
    }
  `;

  return balance
}



export const HeaderContent = styled.div`
  position: relative;
  border-top: none;
  display: flex;
  justify-content: space-between;
  
  > .image {
    > img {
      max-width: 155px;
      max-height: 120px;
    }
  }

  > .theme {
    display: flex;
    right: 5%;
    top: 15%;
    width: 155px;
    justify-content: center;
  }

  > .pokeblu{
    width: 120px;
    display: flex;
    justify-content: center;
    animation:   ${ Balance()} 2.0s  infinite;
    img{
      width: 265px;
    }
  }

  @media (max-width: 560px) {
    > .image {
    > img {
      max-width: 120px;
      max-height: 120px;
    }
  }
  }
`;

