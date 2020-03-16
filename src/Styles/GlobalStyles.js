import {createGlobalStyle} from "styled-components";
import {reset} from "styled-reset";

// creating globalstyles
export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,600|Open+Sans:300,400,600|Source+Sans+Pro:300,400,600&display=swap');
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.blackColor};
        font-size: 14px;
        font-family:'Fira Sans','Source Sans Pro', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
    }

    a {
        color: ${props => props.theme.blackColor};
        text-decoration: none;
    }
    input:focus{
        outline:none;
    }
`;