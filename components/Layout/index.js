
import Contact from "../Contact";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }) {
    return(
        <>
        <Header/>
        <Main>{ children }</Main>
        <Contact/>   
        
        
        </>
    )
} 

export default Layout;