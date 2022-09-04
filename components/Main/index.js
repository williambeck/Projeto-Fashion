import { Container, GalleryCard, Gallery, About, Contact } from "../Main/styles";
import Image from "next/image";
import modelo1 from "../../public/images/modelo1.jpg"
import modelo2 from "../../public/images/modelo2.jpg"
import modelo3 from "../../public/images/modelo3.jpg"


function Main() {
    return (
        <>
        <Container>
        <h1>New Fashion Everything Never Enough</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nisi non ante dictum congue. Cras id odio gravida, posuere velit sed, lacinia mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vehicula, ipsum vel congue cursus, mi neque tincidunt enim, egestas porttitor felis neque et risus. Maecenas fringilla hendrerit enim malesuada laoreet. Aenean quis tortor a odio tempus tincidunt. Vivamus rutrum nulla sed metus congue bibendum. Sed ut aliquam purus. Donec odio mauris, commodo sed dignissim vitae, dapibus eget mauris.</p>
        </Container>

        <Gallery>
            <GalleryCard>
                <Image src={modelo1}
                width={175}
                height={175} alt="" />
                <p className="title">Vest Romasa </p>
                <p>Strong &amp; charismatic</p>
            </GalleryCard>

            <GalleryCard>
                <Image src={modelo2}
                width={175}
                height={175} alt="" />
                <p className="title">Jacket Fima</p>
                <p>Strong Sersonality</p>
            </GalleryCard>

            <GalleryCard>
                <Image src={modelo3}
                width={175}
                height={175} alt="" />
                <p className="title">Jacket Black Kira</p>
                <p>Power Fascinating</p>
            </GalleryCard>
        </Gallery>

        <About>
            <h2>Everything Never Enough Just Fashion</h2>
            <p>Just Fashion</p>
            <p>Praesent placerat eros eget lacus ullamcorper, id dapibus ante vestibulum. Curabitur quis condimentum diam. Duis aliquet erat vel laoreet tincidunt. Pellentesque vitae varius ligula. Phasellus in nibh tempus, gravida justo et, suscipit felis. Cras ornare arcu ac sodales tincidunt. Mauris vehicula erat vel ligula porttitor imperdiet. Curabitur nec magna urna. Sed porta ex ex, at pulvinar nibh aliquet quis. Integer dapibus congue vestibulum. Phasellus bibendum lobortis quam, nec sollicitudin nisl volutpat at.</p>

        </About>

        <Contact>
            <h1>Contact</h1>
        </Contact>
        </>


    )
}

export default Main;