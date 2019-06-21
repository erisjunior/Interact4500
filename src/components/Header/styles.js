import styled from 'styled-components'
import { colors } from '../../config/colors.js'

export const Container = styled.div`
  display: none;

  @media (min-width: 769px) {
    z-index: 5;
    top: 0;
    width: 100%;
    padding: 0 10%;
    height: 80px;
    display: flex;
    position: fixed;
    align-items: center;
    background: ${colors.lightgrey};
    border-bottom: 1px solid ${colors.grey};
    justify-content: space-between;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 60%;
  }
`

export const ItemNav = styled.span`
  :nth-child(4) {
    margin-left: 60px;
    border-bottom: 1px solid transparent;
  }

  display: flex;
  color: ${colors.black};
  font-size: 1em;
  text-align: left;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  padding: 8px;
  border-bottom: 1px solid transparent;

  svg {
    margin: 0 5px;
  }

  :hover {
    color: ${colors.interact};
    transition: 0.1s;
    cursor: pointer;
    border-bottom: 2px solid ${colors.interact};

    :nth-child(4) {
      svg {
        transform: translateX(3px);
        transition: 0.1s;
      }
    }
  }
`
