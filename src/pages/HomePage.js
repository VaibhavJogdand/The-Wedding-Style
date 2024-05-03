import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Info from "../Components/Info";
import Hero from "../Components/Hero";
import Showcase from "../Components/Showcase";
import Team from "../Components/Team";
import FAQ from "../Components/FAQ";
import TellStory from "../Components/TellStory";
import Footer from "../Components/Footer";

function HomePage() {
	return (
		<div>
			<Box id="home">
				<Hero />
			</Box>
			<Box id="about">
				<Info />
			</Box>
			<Box id="gallery">
				<Showcase />
			</Box>
			<Box id="team">
				<Team />
			</Box>
			<Box id="faq">
				<FAQ />
			</Box>
			<Box id="story">
				<TellStory />
			</Box>
			<Box id="footer">
				<Footer />
			</Box>
		</div>
	);
}

export default HomePage;
