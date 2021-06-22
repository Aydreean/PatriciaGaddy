import React from 'react'
import Navbar from './Navbar';
import PhoneBar from './PhoneBar';
import HomeHeader from './HomeHeader';
import HomeBlurbs from './HomeBlurbs';
import HomeBio from './HomeBio';
import HomeBio2 from './HomeBio2';
import HomeTestimonials from './HomeTestimonials';
import Footer from './Footer';
import FooterMap from './FooterMap';
import ConsultationForm from './ConsultationForm';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function HomePage() {
    return (
        <>
        <HomeHeader></HomeHeader>
        <HomeBlurbs></HomeBlurbs>
        <HomeBio></HomeBio>
        <HomeBio2></HomeBio2>
        <HomeTestimonials></HomeTestimonials>
        <ConsultationForm></ConsultationForm>
        <FooterMap></FooterMap>
      <Footer></Footer>
        </>
    )
}

export default HomePage
