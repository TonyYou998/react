import { render } from "@testing-library/react";
import React from "react";
import Header from "./header";
import Contact from "./contact";
import footer from "./footer";
import Carousel from "./carousel";
import Whatwedo from "./whatwedo";
import Listcard from "./listcard";
import Footer from "./footer";

export default function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <Whatwedo />
                    <Contact />
                </div>

            </div>

            <Listcard />
            <Footer />
        </div>


    )
}