import React from 'react';
import Header from './Header';
import NewsLetter from './NewsLetter';
import ReviewSection from './ReviewSection';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
            <SectionFive></SectionFive>
            <ReviewSection></ReviewSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;