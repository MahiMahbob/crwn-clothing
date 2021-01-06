import styled from "styled-components/macro";
import CustomButton from "../customButton/CustomButton";

export const CollectionItem = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image{
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }
`

export const Image = styled.div`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 95%;
    margin-bottom: 5px;
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`
export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`
export const Price = styled.span`
    width: 10%;
    text-align: right;
`
export const AddItemButton = styled(CustomButton)`
    width: 80%;
    position: absolute;
    top: 255px;
    opacity: 0.7;
    display: none;
`