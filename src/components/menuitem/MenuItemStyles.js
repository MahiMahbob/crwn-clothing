import styled from 'styled-components/macro'

export const MenuItem = styled.div`
min-width: 30%;
height: 240px;
display: flex;
flex: 1 1 auto;
justify-content: center;
align-items: center;
border: 1px solid #000;
margin: 0 7.5px 15px;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-position: center;

&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`
export const Content = styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
`
export const Title = styled.h1`
font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;
`
export const SubTitle = styled.span`
font-weight: lighter;
font-size: 16px;
`