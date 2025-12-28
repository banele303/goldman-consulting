import React from "react";
import { ErthagoNavbar } from "./erthago-navbar";
import ErthagoSlideshow from "./erthago-slideshow";
import AboutErthago from "./about-erthago";
import ErthagoFooter from "./erthago-footer";
import ContactButtons from "../components/ui/contact-bottons";

export default function ErthagoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ErthagoNavbar />
      <div className="pt-5"/>
      
      <main className="flex-grow">
        <ErthagoSlideshow />
        <AboutErthago />
      </main>

      <ContactButtons />
      <ErthagoFooter />
    </div>
  );
}
