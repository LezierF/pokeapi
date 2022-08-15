import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NoImage from '../../assets/svgs/noimage'
import { firstCharToUP, format3Numbers } from '../../helpers'
import { ColorsTypes } from '../../helpers/typesList'
import api from '../../services/api'
import * as Styled from './styles'

const CardPokemon = ({ name }: any) => {

  const [item, setItem] = useState({} as any)

  useEffect(() => {
    if (name) {
      api.get(`/pokemon/${name}`).then(res => {
        setItem(res.data)
      })
    }
  }, [name])

  return (
    item.name && (
      <Link to={`/${item.name}?${ColorsTypes[item.types[0].type.name]}`}  style={{ textDecoration: 'none' }}>
        <Styled.ContainerList key={item.name}>
          <Styled.Div backColor={ColorsTypes[item.types[0].type.name]}>
            {
              item.sprites.other.dream_world.front_default ? (
                <Styled.ImagePokemon src={item.sprites.other.dream_world.front_default} />
              ) : (
                <NoImage />
              )
            }
          </Styled.Div>

          <Styled.StyledDivInfos>
            <Styled.PokeInfos>
              <Styled.StyledDiv>

                <Styled.StyledSpan className="spanID">#{format3Numbers(item.id)}</Styled.StyledSpan>
                <Styled.StyledH3>{firstCharToUP(item.name)}</Styled.StyledH3>

              </Styled.StyledDiv>

              <Styled.DivInfoTypeButton >
                {
                  item.types.map((item: any) => {
                    return (
                      <Styled.SpanTypeInfo key={item.type.name} backColor={ColorsTypes[item.type.name]}>{item.type.name}</Styled.SpanTypeInfo>
                    )
                  })
                }
              </Styled.DivInfoTypeButton>
            </Styled.PokeInfos>
          </Styled.StyledDivInfos>
        </Styled.ContainerList>
      </Link>
    )
  )
}

export default CardPokemon