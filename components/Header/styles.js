import styled from "styled-components";

export const Headertop = styled.div`

height: 55px;
background: #003d52;
position: relative;

background-image: url(../../images/bg_detalhe.png);
background-repeat: no-repeat;
background-position: right bottom;


  
`;

export const Headerbottom = styled.div`

padding: 50px ;
text-align: center;

  
`;

export const Links = styled.div`

position: absolute;
top: 0;
right: 0;
display: inline-block;

> ul {
    padding: 0;
    margin: 0;
}

> li {
    display: inline-block;
    margin: 15px; 
    text-transform: uppercase;
    font-size: 14px;    
}

a {
    //color: #425564;
    letter-spacing: 5px;
} 
`;

export const Logo = styled.div`

margin: 0 0 0 135px;



 
`;