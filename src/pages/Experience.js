import React from 'react';
import { Stack } from 'react-bootstrap';

import ContentTitle from '../common/ContentTitle';

const ExperienceCard = (props) => {
  return(
    <Stack className={'experience-card position-relative w-50' + (props.side === 'left' ? ' pe-4' : ' ps-4 align-self-end')}>
      <p className={'text-end mb-1 px-3 experience-card__date' + (props.side === 'left' ? '  experience-card__date--left' : '  experience-card__date--right')}>{props.date}</p>
      <div className='px-3 py-2 m-0 d-flex justify-content-between align-items-center experience-card__title'>
        <Stack>
          <span>{props.title}</span>
          <span className='fw-light experience-card__subtitle'>{props.subtitle}</span>
        </Stack>
      </div>
      <div className='p-3 pt-2 experience-card__content'>
        {props.children}
      </div>
    </Stack>
  );
};

const Experience = () => {
  return(
    <div>
      <ContentTitle title="Experience" icon="far fa-clipboard" />
      <Stack className='mt-5 experience position-relative'>
        <ExperienceCard side="left" title="Centro Escolar University" subtitle="BSBA Major in Marketing Management" date="2011">
        </ExperienceCard>
        <ExperienceCard side="right" title="Be-i co. ltd.," subtitle="Part-time Web Developer" date="2015 Mar ~ 2015 Apr">
          <p className='m-0'>- with zero knowledge in programming, I started creating simple webpages and updating our company clients' websites with basic HTML, CSS and Jquery.</p>
        </ExperienceCard>
        <ExperienceCard side="left" title="Be-i co. ltd.," subtitle="In-house Web Developer" date="2015 May ~ 2017 Mar">
          <p className='m-0'>- Started working on new projects directly with clients from product planning to development. Conceptualizing new market-worthy applications and services depending on the current demands and trends while maintaining and enhancing prior software. **Mainly using Wordpress</p>
        </ExperienceCard>
        <ExperienceCard side="right" title="Be-i co. ltd.," subtitle="Major Automaker Company ( Contractual )" date="2017 Apr ~ 2019 Sep">
          <p className='m-0'>- Manages the organization’s websites including the corporate site, newsroom and others. Periodic checking of contents to ensure accuracy and relevancy while working closely with stakeholders and other cross-functional teams globally.</p>
        </ExperienceCard>
        <ExperienceCard side="left" title="Be-i co. ltd.," subtitle="In-house Web Developer" date="2019 Oct ~ Present">
          <p className='m-0'>- Manages the organization’s websites including the corporate site, newsroom and others. Periodic checking of contents to ensure accuracy and relevancy while working closely with stakeholders and other cross-functional teams globally.</p>
        </ExperienceCard>
      </Stack>
    </div>
  );
};
export default Experience;