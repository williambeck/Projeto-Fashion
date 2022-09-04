import styled from "styled-components";
import bg from "../../public/images/bg_detalhe.png"

export const Container = styled.div`

padding: 50px 100px;
text-align: center;


> h1 {
    font-size: 36px;
    color: #252525;
    text-transform: uppercase;
}

> p {
    font-size: 16px;
    line-height: 2;
    color: #555;
    margin-top: 25px;
    text-align: justify;
}


 
`;

export const GalleryCard = styled.div`
width: 32%;
float: left;
text-align: center; 

.title {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: bold;
}
`;

export const Gallery = styled.div`

color: #555;
padding: 0 100px 50px 100px;
overflow: auto;


 
`;

export const About = styled.div`

padding: 100px;
//text-align: center;
background-color: #003d52;
color: white;
background-image: url(../../images/bg_detalhe.png);
background-repeat: no-repeat;
background-position: right bottom;

> h2 {
    font-size: 36px;
    color: white;
    text-transform: uppercase;
    font-weight: normal;
}

> p {
    font-size: 16px;
    line-height: 1.5;
    width: 70%;
    color: white;
    margin-top: 25px;
    text-align: justify;
}


 
`;

export const Contact = styled.div`


 
`;