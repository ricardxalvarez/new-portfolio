import { css } from "styled-components"

export const mobile = (props)=>{
    return css`
    @media only screen and (max-width: 870px){
        ${props}
    }
    `
}

export const tiny = (props) => {
    return css`
    @media only screen and (max-width: 400px) {
        ${props}
    }
    `
}