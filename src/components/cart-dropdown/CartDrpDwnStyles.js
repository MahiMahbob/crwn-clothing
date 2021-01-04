import styled from "styled-components/macro";
import CustomButton from '../customButton/CustomButton'

export const CartDropDwn = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 80px;
    z-index: 5;
`

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`
export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
`
