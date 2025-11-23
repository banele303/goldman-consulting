import React from "react";
import { DilonNavbar } from "./dilon-navbar";
import Gallery from "../construction/gallary-section";
import AboutGoldmanConstruction from "../construction/about-construction";
import DilonFooter from "./dilon-footer";

export default function Page() {
  return (
    <div>
      <DilonNavbar />

      <Gallery />

      <AboutGoldmanConstruction />
      <DilonFooter />
    </div>
  );
}
