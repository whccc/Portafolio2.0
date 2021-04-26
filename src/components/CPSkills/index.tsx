import {
    DivContainerSkills,
    DivContainerDataInfo,
    DivDataInfo,
    PDataInfoIam,
    H1DataInfo,
    PDataInfo,
    DivContainerDataSkills,
    H1DataSkill,
    DivContainerSkill,
    DivContainerSkillFrontend,
    DivContainerFrontend,
    ImgSkill,
    H2Title,
    DivContainerBackend,
    DivContainerSql,
    DivContainerSkillSql
} from './styles'
const CPSkils = () => {
    return (
        <DivContainerSkills>
            <DivContainerDataInfo>
                <H1DataInfo>Wilson Herney Castro Cabrera</H1DataInfo>
                <DivDataInfo>
                    <PDataInfo>Information Systems Technologist</PDataInfo>
                    <PDataInfo>Medellín-Colombia</PDataInfo>
                    <PDataInfo>wilsoncastro0710@gmail.com</PDataInfo>
                </DivDataInfo>
                <PDataInfoIam>
                    I am a responsible, creative person, with initiative and
                    punctuality, I accept challenges and goals with pleasure;
                    with good management of interpersonal relationships, ability
                    to work in a team, in high pressure conditions, as well as
                    to solve problems efficiently. Programming lover and very
                    self-taught.
                </PDataInfoIam>
            </DivContainerDataInfo>
            <DivContainerDataSkills>
                <H1DataSkill>Skills</H1DataSkill>
                <DivContainerSkill>
                    <DivContainerFrontend>
                        <H2Title>Frontend</H2Title>
                        <DivContainerSkillFrontend>
                            <ImgSkill src="/images/ImgFrontendHtml.jpg" />
                            <ImgSkill src="/images/ImgFrontendJs.jpg" />
                            <ImgSkill src="/images/ImgFrontendCss.jpg" />
                            <ImgSkill src="/images/ImgFrontendReact.jpg" />
                            <ImgSkill src="/images/ImgFrontendNextJs.jpg" />
                            <ImgSkill src="/images/ImgFrontendAngular.jpg" />
                        </DivContainerSkillFrontend>
                    </DivContainerFrontend>

                    <DivContainerBackend>
                        <H2Title>Backend</H2Title>
                        <DivContainerSkillFrontend>
                            <ImgSkill src="/images/ImgBackendNode.jpg" />
                            <ImgSkill src="/images/ImgBackendExpress.jpg" />
                            <ImgSkill src="/images/ImgBackendAdonis.jpg" />
                        </DivContainerSkillFrontend>
                    </DivContainerBackend>

                    <DivContainerSql>
                        <H2Title>Database</H2Title>
                        <DivContainerSkillSql>
                            <ImgSkill src="/images/ImgSqlMysql.jpg" />
                            <ImgSkill src="/images/ImgSqlSqlServer.jpg" />
                            <ImgSkill src="/images/ImgSqlMongoDb.jpg" />
                        </DivContainerSkillSql>
                    </DivContainerSql>
                </DivContainerSkill>
            </DivContainerDataSkills>
        </DivContainerSkills>
    )
}

export default CPSkils
