import { Container, GalleryCard, Gallery } from "../Main/styles";
import Image from "next/image";


function Main() {
    return (
        <>
        <Container>
        <h1>New Fashion Everything Never Enough</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nisi non ante dictum congue. Cras id odio gravida, posuere velit sed, lacinia mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vehicula, ipsum vel congue cursus, mi neque tincidunt enim, egestas porttitor felis neque et risus. Maecenas fringilla hendrerit enim malesuada laoreet. Aenean quis tortor a odio tempus tincidunt. Vivamus rutrum nulla sed metus congue bibendum. Sed ut aliquam purus. Donec odio mauris, commodo sed dignissim vitae, dapibus eget mauris.</p>
        </Container>

        <Gallery>
            <GalleryCard>
                <img src="images/modelo1.jpg"
                width={100}
                height={100} alt="" />
                <p>Loren</p>
            </GalleryCard>

            <GalleryCard>
                <img src="images/modelo2.jpg"
                width={100}
                height={100} alt="" />
                <p>Loren</p>
            </GalleryCard>

            <GalleryCard>
                <img src="images/modelo3.jpg"
                width={100}
                height={100} alt="" />
                <p>Loren</p>
            </GalleryCard>
        </Gallery>
        </>


    )
}

export default Main;