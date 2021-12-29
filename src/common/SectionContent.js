import React from 'react';
import { Stack, Container, Row, Col } from 'react-bootstrap';

const SectionContent = (props) => {
  return(
    <Container className='mb-4 section-content'>
      <Row>
        <Stack>
          <Col>
            <h6 className='p-2 ps-3 m-0 fw-bold section-content__title'>{props.title}</h6>
          </Col>
          <Col>
            <div className='h-100 w-100 p-3 section-content__content'>
              {props.children}
            </div>
          </Col>
        </Stack>
      </Row>
    </Container>
  );
};
export default SectionContent;