import CPCarousel from '../components/CPCarousel'
import CPSkills from '../components/CPSkills'

import { DivContainer, DivContainerSkills } from '../stylespages/HomePageStyles'
const HomePage = () => {
    return (
        <DivContainer>
            <CPCarousel />
            <DivContainerSkills>
                <CPSkills />
            </DivContainerSkills>
        </DivContainer>
    )
}

export default HomePage
