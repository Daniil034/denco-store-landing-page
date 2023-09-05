import React from 'react';
import {Header} from "./sections/Header/Header";
import {IntroSection} from "./sections/IntroSection/IntroSection";
import {WhoNeedsItSection} from "./sections/WhoNeedsItSection/WhoNeedsItSection";
import {ServicesSection} from "./sections/ServicesSection/ServicesSection";
import {WhyChooseUsSection} from "./sections/WhyChooseUsSection/WhyChooseUsSection";
import {PricesSection} from "./sections/PricesSection/PricesSection";
import {CarouselSection} from "./sections/CarouselSection/CarouselSection";
import {FooterSection} from "./sections/FooterSection/FooterSection";

function App() {
    return (
        <div className="App">
            <Header/>
            <IntroSection/>
            <WhoNeedsItSection/>
            <ServicesSection/>
            <WhyChooseUsSection/>
            <PricesSection/>
            <CarouselSection/>
            <FooterSection/>
        </div>
    );
}

export default App;
