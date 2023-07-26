import styled from 'styled-components'
import { mobile } from '../responsive'
import nomad from '../assets/work/nomad.jpeg'
import loanr from '../assets/work/getloanr.png'
import leals from '../assets/work/leals.png'
import tanteador from '../assets/work/tanteador.jpg'
import weekly from '../assets/work/weekly.png'
import memory from '../assets/work/memory.png'
import { useTranslation } from 'react-i18next'

export default function RecentWork() {
  const {t} = useTranslation()
  const projects = [
    {
      project_name: t('living.title'),
      desc: t('living.desc'),
      img: nomad
    },
    {
      project_name: t('getloanr.title'),
      desc: t('getloanr.desc'),
      demo: 'https://getloanr.com/',
      img: loanr
    },
    {
      project_name: t('leals.title'),
      desc: t('leals.desc'),
      img: leals
    },
    {
      project_name: t('tanteador.title'),
      desc: t('tanteador.desc'),
      img: tanteador
    },
    {
      project_name: t('weekly.title'),
      desc: t('weekly.desc'),
      img: weekly
    },
    {
      project_name: t('memory.title'),
      desc: t('memory.desc'),
      img: memory,
      source: 'https://github.com/ricardxalvarez/memory'
    }
  ]
    return (
        <Main id='recent-work'>
            <h1>{t('recent_work')}</h1>
            <Cards>
              {
                projects.map((item, idx) => {
                  return (
                    <Card key={idx}>
                        <img className='card__image' src={item.img} alt=''></img>
                        <div className="card__content">
                          <p className="card__title">{item.project_name}</p>
                          <p className="card__description">{item.desc}</p>
                          {
                            item.demo &&
                            <button className="card__button">
                            <a href={item.demo} target='_BLANK' rel='noreferrer'> </a>
                              Live Demo
                            </button>
                          }
                          {
                            item.source &&
                            <button className="card__button secondary">
                              <a href={item.source} target='_BLANK' rel='noreferrer'> </a>
                              Source Code
                              </button>
                          }
                        </div>
                    </Card>
                  )
                })
              }
            </Cards>
        </Main>
    )
}

const Main = styled.section`
background-color: ${props => props.theme.white};
${mobile({
  width: '85%'
})}
width: 80%;
max-width: 1000px;
margin: 0 auto;
padding-bottom: 20%;
h1 {
    text-align: center;
    margin-bottom: 40px;
    color: ${props => props.theme.brown};
}
`

const Cards = styled.div`
display: grid;
${mobile({
  gridTemplateColumns: '1fr'
})}
grid-template-columns: 1fr 1fr;
gap: 20px;
`

const Card = styled.article`
${mobile({
  height: 'max-content'
})}
position: relative;
width: 100%;
background-color: #f2f2f2;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
box-shadow: 0 0 0 5px ${props => props.theme.brown};
transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

&:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.theme.brown};
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

&:hover .card__content {
  transform: rotateX(0deg);
  z-index: 2;
}

.card__title {
  margin: 0;
  font-size: 20px;
  color: #FFFFFF;
}


.card__description {
  margin: 10px 0 10px;
  font-size: 14px;
  ${mobile({
    fontSize: '12px',
    lineHeight: '1.2'
  })}
  color: ${props => props.theme.white};
  font-weight: 500;
  line-height: 1.4;
}

.card__button {
  padding: 15px;
  border-radius: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.white};
  border: none;
  color: ${props => props.theme.brown};
  position: relative;
  font-weight: 500;
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
}

.secondary {
  background: transparent;
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.white};
  margin-left: 5px;
}
`