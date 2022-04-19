import BackgroundImage from '../components/BackgroundImage/BackgroundImage';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundImage/>
      </Section>
      <About/>
      <Projects />
      <Technologies />
      <Blog/>
      <Contact/>
    </Layout>
  );
};

export default Home;
