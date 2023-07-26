import './App.css';
import Header from './components/Header';
import { ThemeProvider, styled } from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import RecentWork from './components/RecentWork';
import Reviews from './components/Reviews';
import CTA from './components/Cta';

function App() {
  const theme = {
    whiteDark: '#CDD1C6',
    white: '#F9F6EE',
    brown: '#5C4033',
    brownLight: '#845D40',
    brownLighter: '#AA7E4A'
  }
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <RecentWork/>
        <Reviews/>
        <CTA/>
      </Main>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.main`
background-color: ${props => props.theme.white};
max-width: 100vw;
min-height: 100vh;
`