import { Headertop, Links, Logo } from "./styles";
import Image from "next/image";

import logo from "../../public/images/logo.svg"


 function Header() {
    return (
        <>
        
        <Headertop>
        <Logo>
            <Image
                src={logo} 
                width={75}
                height={60}
                alt="logo"/>           
        </Logo>                 

                <Links>
                    
                        <li><a href="#">Portifólio</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                    
                </Links>            
            </Headertop>
            <Image 
            src="/images/topo.jpg" 
            width={1024}
            height={500}
            alt="logo"/></>
    )
}

export default Header;