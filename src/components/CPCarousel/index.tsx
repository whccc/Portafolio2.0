import {
    ContainerCarousel,
    DivContainerOver,
    DivContainerCarousel,
    DivContainerCarouselItem,
    ImgCarouselItem,
    DivContainerOverData,
    POverData,
    H1OverData,
    ImgOverData
} from './styles'
const CPCarousel = () => {
    return (
        <ContainerCarousel>
            <DivContainerCarousel controls={false} indicators={false}>
                <DivContainerCarouselItem>
                    <ImgCarouselItem
                        src="/images/landing.jpg"
                        alt="First slide"
                    />
                </DivContainerCarouselItem>
                <DivContainerCarouselItem>
                    <ImgCarouselItem
                        src="/images/landingtwo.jpg"
                        alt="First slide"
                    />
                </DivContainerCarouselItem>
            </DivContainerCarousel>
            <DivContainerOver>
                <DivContainerOverData className="animate__animated animate__bounce">
                    <H1OverData>Wilson Herney Castro Cabrera</H1OverData>
                    <POverData>Full Stack Javascript Developer</POverData>
                    <POverData>
                        <ImgOverData src="/images/github.png" />
                        <ImgOverData src="/images/linkedin.png" />
                    </POverData>
                </DivContainerOverData>
            </DivContainerOver>
        </ContainerCarousel>
    )
}

export default CPCarousel
