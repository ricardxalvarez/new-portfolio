import styled, {keyframes} from 'styled-components'
import me from '../assets/me/me-1.png'
import resume from '../assets/resumes/resumeEng.pdf'
import { mobile } from '../responsive'
import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()
    function handlePortfolio() {
        const element = document.getElementById('recent-work')
        if (!element) return
        const y = element.getBoundingClientRect().top - window.scrollY;
        window.scroll({
            top: y,
            behavior: 'smooth'
        })
    }
    return (
        <Main>
            <div className='title'>
                <div className='typewriter'>
                    <h2 className='greet'>{t('greeting1')}</h2>
                    <h1 className='name'>Ricardo Alvarez</h1>
                </div>
                <p>{t('cta_hero')}</p>
                <div className='buttons'>
                    <button className='portfolio' 
                    onClick={handlePortfolio}
                    >{t('portfolio')}</button>
                    <button className='resume'>
                    {t('resume')}
                    <a href={resume} target='_BLANK' rel='noreferrer'> </a>
                    </button>
                </div>

            </div>
            <img src={me} alt=''/>
        </Main>
    )
}

const typing = keyframes`
  from { width: 0  }
  to { width: 100% }

`

const opacity = keyframes`
    to {
        opacity: 1
    }
`

const blinkcaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #5C4033; }

`

const Main = styled.section`
${mobile({
    flexDirection: 'column'
})}
height: calc(100vh - 80px);
margin: 0;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
overflow: hidden;
img {
    height: 80%;
    max-height: 600px;
    ${mobile({
        height: '60%'
    })}
}
.title {
    width: min-content;
    > p {
        ${mobile({
            fontSize: '14px'
        })}
        font-size: 16px;
    }
    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        ${mobile({
            justifyContent: 'center'
        })}
        .portfolio {
            background-color: #FFFFFF;
            color: ${props => props.theme.brown};
            border-radius: 10em;
            font-size: 17px;
            font-weight: 600;
            padding: 1em 2em;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            border: 1px solid ${props => props.theme.brown};
            box-shadow: 0 0 0 0 ${props => props.theme.brown};
            &:hover {
                transform: translateY(-4px) translateX(-2px);
                box-shadow: 2px 5px 0 0 ${props => props.theme.brown};
            };
            &:active {
                transform: translateY(2px) translateX(1px);
                box-shadow: 0 0 0 0 ${props => props.theme.brown};
            }
        }
        .resume {
            background-color: ${props => props.theme.white};
            position: relative;
            color: ${props => props.theme.brown};
            border-radius: 10em;
            font-size: 17px;
            border: 2px dashed ${props => props.theme.brown};
            font-weight: 550;
            padding: 1em 2em;
            cursor: pointer;
            a {
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 2;
                top: 0;
                left: 0;
                /* opacity: 0; */
            }
        }
    }
}
.typewriter > *  {
    width: min-content;
    opacity: 0;
    /* padding: 0 10px; */
    letter-spacing: 1px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    &.greet {
        ${mobile({
            fontSize: '1.5em'
        })}
        border-right: 3px solid #5C4033; /* The typwriter cursor */
        font-size: 1.7em;
        animation: 
        ${typing} 1s steps(9, end),
        ${blinkcaret} .75s step-end forwards,
        ${opacity} 0s forwards
        ;
    }
    &.name {
        ${mobile({
            fontSize: '2.5em'
        })}
        border-right: 5px solid #5C4033; /* The typwriter cursor */
        font-size: 3.5em;
        animation: 
        ${typing} 1s steps(15, end) forwards,
        ${blinkcaret} .75s step-end infinite,
        ${opacity} 0s forwards
        ;
        animation-delay: 1s;
        /* animation-delay: 1s; */
    }
}
`