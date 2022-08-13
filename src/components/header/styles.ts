import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 112px;
  margin: auto 0;
  position: relative;
  padding-inline: 35px;
  display: grid;
  align-items: center;
  background-image: radial-gradient(circle, #2981c4, #1a78c6, #146fc6, #1b66c6, #295bc4);
  box-shadow: 1px 5px 5px -3px rgba(0,0,0,0.41);
  -webkit-box-shadow: 1px 5px 5px -3px rgba(0,0,0,0.41);
  -moz-box-shadow: 1px 5px 5px -3px rgba(0,0,0,0.41);
`;

export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;

    @media (max-width: 540px) {
      margin-top: 10px;

      img{
        max-width: 30%;
      }
    }
`;

export const ImgLogo = styled.img`
  max-width: 140px;


`;

export const InfoHeader = styled.div`

`;



function Pulse() {
  const pulse = keyframes`
      0% {
        transform: scale(0.90);
        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)';
      }
      70% {
        transform: scale(1.0);
        boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)';
      }
      100% {
        transform: scale(0.90);
        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)';
      }
      `

  return pulse
}
export const PokeBolaCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 320px;

  animation: ${Pulse()} 4s infinite;
`;

export const ImgPokeBlu = styled.img`
  max-width: 248px;
  position: relative;
  top: -72px;

  @media (max-width: 540px) {
      top: -32px;
    }

`;


