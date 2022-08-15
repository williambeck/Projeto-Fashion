import { Headertop, Links } from "./styles";
import Image from "next/image";


 function Header() {
    return (
        <>
        <h1>Header</h1>
        <Headertop>
            <Image 
                src="/images/logo.png" 
                width={50}
                height={50}
                alt="logo"/>

                <Links>
                    <ul>
                        <li><a href="#">Portifólio</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </Links>            
            </Headertop>
            <Image 
            src="/images/topo.jpg" 
            width={500}
            height={500}
            alt="logo"/></>
    )
}

export default Header;