import React from "react";
import { DilonNavbar } from "./dilon-navbar";
import Gallery from "../construction/gallary-section";
import AboutGoldmanConstruction from "../construction/about-construction";
import DilonFooter from "./dilon-footer";
import ContactButtons from "../components/ui/contact-bottons";

export default function Page() {
  return (
    <div>
      <DilonNavbar />
<div className="pt-5"/>
      <Gallery />

      <AboutGoldmanConstruction />
      <ContactButtons />
      <DilonFooter />
    </div>
  );
}
