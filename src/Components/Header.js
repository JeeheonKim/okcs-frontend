import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, User, Bookmark, HeartFull } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import {gql} from "apollo-boost";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  font: 1em sans-serif;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ME = gql`
  {
    me {
    usrname
    }
  }
`;
const List = styled.ul`
    display: flex;
    justify-content: left;

`;

const ListItem = styled.li`
    &:not(:last-child){
        margin-right: 20px;
        padding:auto;
        
    }
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 20px;
`;

export default () => {
  const search = useInput("");
  const meQuery = useQuery(ME);
  console.log('meQuery',meQuery);
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <List>
              <ListItem>
                <Link to="/">
                  <HeartFull/>
                </Link>
              </ListItem>
              <ListItem>
                  <Link to="/about">About Us</Link>
              </ListItem>
              <ListItem>
                  <Link href="#">Events</Link>
              </ListItem>
          </List>
        </HeaderColumn>
        <HeaderColumn>

        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/userFeed">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/bookmarks">
            <Bookmark />
          </HeaderLink>
          <HeaderLink to="/username">
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};