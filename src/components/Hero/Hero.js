import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, There!<br />
        I am Prashant Rawat
      </SectionTitle>
      <SectionText>
      Without hard work, nothing grows but weeds.
      </SectionText>
      <Button onClick={() => window.location.href = "mailto:rawatprashant063@gmail.com"}>Email me</Button>
    </LeftSection>
  </Section >
);

export default Hero;