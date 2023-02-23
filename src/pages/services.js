
import React from "react";
import Header from "../component/Header/header";
import JoinEvent from "../component/Event/joinEvent";
import Event_schedule_2 from "../component/Event/event_schedule_2";
import PricingSectionHalf from '../component/Pricing/pricingSectionHalf'
import Footer from "../component/Footer/footer";
import Services from "../component/Services/services_header";


function services() {
    return (
        <div>
            <Header />
            <Services />
            <JoinEvent />
            <Event_schedule_2 />
            <PricingSectionHalf />
            <Footer />

        </div>
    )
}

export default services