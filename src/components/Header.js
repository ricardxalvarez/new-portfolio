import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useTranslation } from "react-i18next";

export default function Header() {
    const {t} = useTranslation()
    function handleServices() {
        const element = document.getElementById('services-modal')
        if (!element) return
        const y = element.getBoundingClientRect().top - window.scrollY;
        window.scroll({
            top: y,
            behavior: 'smooth'
        })
    }
    return (
        <Main>
            <button className="services" onClick={handleServices}>
                {t("services")}
            </button>
            <button className="contact">
                    {t('contactme')}
                <a href="mailto:info@ricardocode.site">
                </a>
            </button>
        </Main>
    )
}

const Main = styled.header`
height: 80px;
padding: 0 30px;
${mobile({
    padding: '0 20px'
})}
display: flex;
gap: 10px;
align-items: center;
justify-content: end;
button {
    ${mobile({
        fontSize: '14px'
    })}
    font-size: 16px;
}
.services {
    background-color: transparent;
    color: #000000;
    border: none;
    cursor: pointer;
}
.contact {
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.brown};
    background: ${props => props.theme.white};
    box-shadow: 3px 3px ${props => props.theme.brown};
    color: #000000;
    cursor: pointer;
    position: relative;
    margin: 35px 0;
    a {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    &:active {
        box-shadow: none;
        transform: translate(3px, 3px);
    }
}
/* background-color: ${props => props.theme.brown}; */
`