'use client'
import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import LandingPageHero from "./components/LandingPageHero";
import LandingPageDemo from "./components/LandingPageDemo";
import LandingPageTechStack from './components/LandingPageTechStack'
import LandingPageTeam from './components/LandingPageTeam'
const LandingPage = () => {

	return (<div>
		<Navbar />
		<LandingPageHero />
		<LandingPageDemo />
		<LandingPageTechStack />
		<LandingPageTeam />
	</div>)
}

export default LandingPage;
