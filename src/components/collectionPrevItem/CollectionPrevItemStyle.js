import styled from "styled-components/macro";

export const CollectionItem = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
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
`