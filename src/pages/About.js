import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import SecBestFeatures from '../components/SecBestFeatures';
import { Container, Row, Col } from 'react-bootstrap';
import SecVideo from '../components/SecVideo';
import SecBestPlatform from '../components/SecBestPlatform';

function About() {
  return (
    <>
      <section className="breadcrumbs">
        <Breadcrumbs pageTitle="About Us" />
      </section>
      <section className="OurBestPlatform">
        <SecBestPlatform />
      </section>    
    </>
  );
}

export default About;