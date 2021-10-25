import { createGlobalStyle } from 'styled-components'
import BackgroundImage from './../assets/background.svg'

const GlobalStyle = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: 'border-box'
    }

    :root {
    --background: #D6D6D6;
    --white: #FFF;
    --grey-light: #E0E0E0;
    --placeholder: #E0E0E0;

    --primary: #45545A;
    --secondary: #6E787C;
    --title: #2A363B;

    --blue-500: #4C8BEA;

    --green-100:#79E979;
    --green-250:#58BA58;
    --green-500:#10A610;
    --green-750:#008000;

    --red-100:#FECEAB;
    --red-250:#FF847C;
    --red-500:#E84A5F;

    --orange-500: #F37807;
    }

    @media(max-width: 1080px){
        html{
        font-size: 93.75%;
        }
    }
 
    @media(max-width: 720px){
        html{
        font-size: 87.5%;
        }
    }

    html, body {
        height: 100%;
    }

    #root{
        overflow-y: scroll;
        height: inherit;
        background-image: url(${BackgroundImage});
        background-repeat: repeat;
    }

    body{
        background: #F1F1F1;
        color: var(--primary);
    }

    body, input, textarea, select, button{
        font: 500 1rem "Roboto", sans-serif;
    }

    h1,h2, p, span {
        color: var(--primary);
    }

    button, input {
        border: 0;
        outline: none;
    }

    button{
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle