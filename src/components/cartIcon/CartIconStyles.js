import styled from 'styled-components/macro';
import { ReactComponent as ShoppingIconSVG } from '../../assets/cartBag.svg';

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 45px;
    height: 45px;
    cursor: pointer;
`
export const ShoppingIcon = styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`
export const ItemCountContainer = styled.span`
    position: absolute;
    bottom: 12px;
    font-size: 11px;
    font-weight: bold;
`