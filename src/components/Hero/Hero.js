import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Richard <br />Grecki Jr
    </SectionTitle>
    <SectionText>
      FullStack Developer
    </SectionText>
    <Button onClick={() => window.location = 'mailto:richardgreckijr@gmail.com'}>Let's Collaborate</Button>
  </LeftSection>
</Section>
);

export default Hero;