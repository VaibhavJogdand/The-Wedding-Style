import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import backgroundImage from "../Images/hero.jpg"; // Import your background image

const containerStyle = {
	position: "relative",
	width: "100%",
	height: "100vh",
};

const imageStyle = {
	width: "100%",
	height: "100%",
	objectFit: "cover", // Cover the entire container
};

function Hero() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const overlayTextStyle = {
		position: "absolute",
		top: isMobile ? "40%" : "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		textAlign: "center",
		color: "#dab871",
		fontSize: isMobile ? "6rem" : "10rem",
		fontFamily: "'Playball', cursive",
	};

	return (
		<div style={containerStyle}>
			<img src={backgroundImage} alt="Background" style={imageStyle} />
			<Box sx={overlayTextStyle}>Ethereal</Box>
		</div>
	);
}

export default Hero;
