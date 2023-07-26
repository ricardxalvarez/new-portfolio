import styled from 'styled-components'
import { mobile } from '../responsive'
import { useTranslation } from 'react-i18next'

export default function CTA() {
    const {t} = useTranslation()
    return (
        <Main>
            <h2>
                {t('start_project')}
            </h2>
            <p>
                {t('cta_footer')}
            </p>
            <div>
                <button>
                    {t('cta_button')}
                    <a href='mailto:info@ricardocode.site'></a>
                </button>
            </div>
        </Main>
    )
}

const Main = styled.div`
${mobile({
    flexDirection: 'column',
    gap: '20px'
})}
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
max-width: 1000px;
margin: auto;
background-color: ${props => props.theme.white};
padding: 40px;
color: ${props => props.theme.brown};
> * {
    flex: 1;
}
h2 {
    font-weight: 600;
    text-align: center;
}
p {
    text-align: center;
}
> div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        appearance: none;
        background-color: transparent;
        border: 0.125em solid ${props => props.theme.brown};
        border-radius: 0.9375em;
        box-sizing: border-box;
        color: ${props => props.theme.brown};
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        min-height: 3.75em;
        min-width: 0;
        outline: none;
        padding: 1em 2.3em;
        text-align: center;
        text-decoration: none;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        will-change: transform;
        position: relative;
        a {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            left: 0;
            top: 0;
        }

        &:disabled {
         pointer-events: none;
        }

        &:hover {
         color: ${props => props.theme.white};
         background-color: ${props => props.theme.brown};
         box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
         transform: translateY(-2px);
        }

        &:active {
         box-shadow: none;
         transform: translateY(0);
        }
    }
}
`