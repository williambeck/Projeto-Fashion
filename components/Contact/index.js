import { Container } from "../Contact/styles";

function Contact() {
    return (
        <>       

        <Container>
            <h1>Contact</h1>
            <address>
                Call me now for design<br/>
                012-1234-4567
            </address>

            <div>
              
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28060.993180221885!2d-52.81692025!3d-28.460744350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd493c92d28c8f%3A0x6ff21ca741cec0c8!2sN%C3%A3o-Me-Toque%2C%20RS%2C%2099470-000!5e0!3m2!1spt-BR!2sbr!4v1662486491593!5m2!1spt-BR!2sbr" width="1024" height="450" style={{border: + 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <footer>
                Copyrigth &copy; fashion.com
            </footer>
        </Container>
        
     
        </>


    )
}

export default Contact;