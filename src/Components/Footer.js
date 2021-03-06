import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    margin: 50px 0px;
`;

const List = styled.ul`
    display: flex;
`;

const ListItem = styled.li`
    &:not(:last-child){
        margin-right: 16px;
    }
`;

const Link = styled.a`
    color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
    color: ${props => props.theme.darkGreyColor};
`

export default () => (
    <Footer>
        <List>
            <ListItem>
                <Link href="#">about us</Link>
            </ListItem>
            <ListItem>
                <Link href="#">jobs</Link>
            </ListItem>
            <ListItem>
                <Link href="#">language</Link>
            </ListItem>
        </List>
        <Copyright>Ottawa Korean Community School {new Date().getFullYear()} &copy;</Copyright>
    </Footer>
)