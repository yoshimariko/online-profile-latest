import React from 'react';
import { Stack, Container, Row, Col } from 'react-bootstrap';

import discordThumb from '../assets/image/portfolio/img_discord.png';
import profileThumb from '../assets/image/portfolio/img_profile.png';

import ContentTitle from '../common/ContentTitle';
import SectionContent from '../common/SectionContent';

const PortfolioItem = (props) => {
  return(
    <Col lg={6} className='px-2 text-center portfolio'>
      <Stack className='align-items-center'>
        <img src={props.img} alt="" className='mb-2' />
        <a href={props.link} target="_blank" rel="noreferrer" className='text-decoration-none'>
          <i className="fas fa-link me-2"></i>
          {props.title}
        </a>
        <p className='portfolio__desc'>( {props.description} )</p>
      </Stack>
    </Col>
  );
};

const Home = () => {
  return(
    <div>
      <ContentTitle title="Home" icon="fas fa-home" />
      <SectionContent title="About Me">
        <p className='m-0 text--indent'>A frontend developer based in Tokyo, Japan. For 4 years as a developer — I have mostly used WordPress(PHP) as my main prowess in the vast world of programming. Recently, I have been dabbling with JavaScript and its frameworks such as React and Node, starting with personal projects and sooner — hopefully in my profession as well.</p>
      </SectionContent>
      <SectionContent title="Projects">
        <Container>
          <Row>
            <PortfolioItem img={discordThumb} title="Moomin Bot" link="https://github.com/yoshimariko/MoominBot" description="Discord.js, Node.js, API" />
            <PortfolioItem img={profileThumb} title="Online Profile" link="https://github.com/yoshimariko/MoominBot" description="React.js" />
          </Row>
        </Container>
      </SectionContent>
    </div>
  );
};
export default Home;