import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

import ContentTitle from '../common/ContentTitle';
import SectionContent from '../common/SectionContent';

const SkillProgress = (props) => {
  return(
    <div className='mb-2 skill-progress'>
      <h6 className='fw-bold skill-progress__title'>
        <i className={`${props.icon} me-1`}></i>
        {props.title}
      </h6>
      <ProgressBar striped now={props.percent} />
    </div>
  );
};

const Skills = () => {
  return(
    <div>
      <ContentTitle title="Skills" icon="fas fa-cogs" />
      <SectionContent title="Skills">
        <Container className='p-0'>
          <Row className='mb-3'>
            <Col>
              <SkillProgress title="HTML5" percent={97} icon="fab fa-html5" />
              <SkillProgress title="CSS3" percent={97} icon="fab fa-css3-alt" />
              <SkillProgress title="Sass (Scss)" percent={80} icon="fab fa-sass" />
              <SkillProgress title="JS" percent={85} icon="fab fa-js-square" />
              <SkillProgress title="React JS" percent={80} icon="fab fa-react" />
              <SkillProgress title="Node JS" percent={70} icon="fab fa-node-js" />
              <SkillProgress title="Laravel" percent={70} icon="fab fa-laravel" />
              <SkillProgress title="AWS" percent={65} icon="fab fa-aws" />
            </Col>
            <Col>
              <div className='skill-others'>
                <h5 className='fw-bold skill-others__title'>Others:</h5>
                <p className='m-0 skill-others__text'>TypeScript・JQuery・PHP・CI・WordPress・Git・GCP・Bootstrap・CLI・Webpack</p>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionContent>
    </div>
  );
};
export default Skills;