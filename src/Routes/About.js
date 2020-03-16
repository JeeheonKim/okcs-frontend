import React from "react";
import styled from "styled-components";
 
const Wave = ()=> (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fill-opacity="1" d="M0,224L80,224C160,224,320,224,480,197.3C640,171,800,117,960,128C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
);

const SvgDiv = styled.div`
    svg path {
        display: block;
        fill: ${props => props.theme.main};
    }
`;

const Section = styled.section`
    display: block;
    background-color: ${props => props.theme.main};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

const Header1 = styled.h1`
    display: block;
    font-family: 'Fira Sans', sans-serif;
    font-size: 48px;
    font-weight: 300;
    color: #0078e8;
    margin: 20px 0px 30px;
`
Section.defaultProps = {
  theme: {
    main: "#f3f4f5"
  }
}

const divTheme = {
    main: "mediumseagreen"
}

export default () => {
    return (
        <>
            <Section>
                <Wrapper>
                    <Header1>Ottawa Korean Community School</Header1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Wrapper>
            </Section>
            <Section theme={divTheme}>
                <SvgDiv><Wave/></SvgDiv>
                <Wrapper>
                    <Header1>values</Header1>
                </Wrapper>
            </Section> 
            <Section >
                <SvgDiv theme={divTheme}><Wave/></SvgDiv>
                <Wrapper>
                    <Header1>team</Header1>
                </Wrapper>
            </Section> 
            <Section>
                <SvgDiv><Wave/></SvgDiv>
                <Header1>contact</Header1>
            </Section> 
        </>
    )
}