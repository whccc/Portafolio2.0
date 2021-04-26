import styled from 'styled-components'
import Image from 'next/image'

export const DivContainerSkills = styled.div``

export const DivContainerDataInfo = styled.div`
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
`

export const DivDataInfo = styled.div`
    font-weight: 900;
    text-align: center !important;
    border-bottom: 1px solid #ddd;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        margin: 5px;
        border-bottom: 1px solid #ddd;

        & p:nth-child(2) {
            &::before {
                content: '|';
                margin-right: 10px;
                height: 20px;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
            }
            &::after {
                content: '|';
                margin-left: 10px;
                height: 20px;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
`

export const H1DataInfo = styled.h2`
    margin: 0px;
`

export const PDataInfo = styled.p`
    margin: 0px;
    font-weight: 500;
    line-height: 18px;
    @media (min-width: 1024px) {
        margin-right: 10px;
        font-size: 20px;
    }
`
export const PDataInfoIam = styled.p`
    text-align: left;
    margin: 0px;
    padding: 10px;
    line-height: 18px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`

export const DivContainerDataSkills = styled.div`
    padding: 20px;
`

export const H1DataSkill = styled.h1`
    @media (min-width: 1024px) {
        text-align: center;
    }
`

export const DivContainerSkill = styled.div`
    text-align: center;
    @media (min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`

export const DivContainerSkillFrontend = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const DivContainerFrontend = styled.div`
    border: 1px solid #ddd;

    @media (min-width: 1024px) {
        flex: 1;
    }
`
export const H2Title = styled.h3``
export const ImgSkill = styled.img`
    width: 60px;
    margin: 5px;
`

export const DivContainerBackend = styled.div`
    border: 1px solid #ddd;
    @media (min-width: 1024px) {
        flex: 1;
    }
`

export const DivContainerSql = styled.div`
    border: 1px solid #ddd;
    @media (min-width: 1024px) {
        flex: 1;
    }
`

export const DivContainerSkillSql = styled.div``
