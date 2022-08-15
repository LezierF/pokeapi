import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 140px);
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    margin: 0;
    min-height: calc(100vh - 140px);
`;


export const CardDetailPokemon = styled.div`
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 100%;
    height: 100%;
    max-width: 50rem;
    height: 40.8rem;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 20px;
    display: flex;
`;

//LEFT CARD IMAGE

type PropsImg = {
    backColor: string
}

export const DivImage = styled.div<PropsImg>`
    background: ${props => props.backColor};
    height: 100%;
    width: 100%;
    max-width: 13rem;
    border-radius: 20px 0 0 20px;
    display: flex;
    align-items: center;
    

    svg{
        max-width: 380px;
        opacity: 0.6;
        margin: 5px;
    }
    
`;

export const DivDetails = styled.div`
    width: 100%;
    padding: 32px 104px;
`;

export const ImgPokemon = styled.img`
    margin-left: 32px;
    max-width: 280px;
`;

//RIGHT DETAILS CARD

export const NameAndId = styled.div`
    display: flex;
    align-items: baseline;


    h2{
        font-weight: bold;
        font-size: 2.2rem;
        line-height: 3.4rem;
        text-align: start;
        letter-spacing: -0.01em;
        color: ${({ theme }) => theme.colors.font};
        margin-right: 0.8rem;
        font-family: "Montserrat",sans-serif;

    }

    span{
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 150%;
        color: ${({ theme }) => theme.colors.font};
    }   
    
`;

export const TypesButtons = styled.div`
    display: flex;
    gap: 10px;
`

type SpanTypeProps = {
    backColor: string,
};

export const SpanTypeInfo = styled.span<SpanTypeProps>`
  margin-top: 5px;  
  background: ${props => props.backColor};
  padding-inline: 15px;
  font-size: 14px;
  padding-block: 4px;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  font-family: "Montserrat",sans-serif;
`;

export const PersonalInfos = styled.div`

`;

export const UlPersonal = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 18px;

`;

export const LiPersonal = styled.li`
    list-style-type: none;

    span{
        font-weight: 200;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.font};
        font-family: "Montserrat",sans-serif;
    }

    p{
        font-weight: 400;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.colors.font};
        font-family: "Montserrat",sans-serif;
    }

    ul{
        li{
            font-size: 14px;
            color: ${props => props.color};
            list-style-type: none;
            font-family: "Montserrat",sans-serif;
        }
    }

`;

export const Loading = styled.div`
    width: 100%;
    height: 100%;
    max-width: 50rem;
    height: 40.8rem;
    display: flex;
`;

export const LoadingCenter = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 140px);
`;

export const Stats = styled.div`
    margin-top: 50px;
`;

export const TypeStat = styled.span`
    font-size: 14px;
    color: ${props => props.color};
    list-style-type: none;
    font-family: "Montserrat",sans-serif;
`;