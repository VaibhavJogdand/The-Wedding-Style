import React, { useState } from "react";
import {
	Box,
	Divider,
	Grid,
	Paper,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";

const Section = styled("section")({
	backgroundPosition: "center",
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden",
	padding: "70px",
});

const Content = styled("div")({
	zIndex: 1,
	textAlign: "center",
});

// Styled Box component for the image container
const ImageContainer = styled(Box)({
	position: "relative",
	overflow: "hidden",
	"&:hover .overlay": {
		transform: "translateY(0)",
	},
	boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
	width: "fit-content",
	margin: "auto",
});

// Styled Box component for the overlay with animation
const Overlay = styled(Box)({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.7)",
	color: "#fff",
	padding: "8px",
	transform: "translateY(100%)",
	transition: "transform 0.5s ease",
});

function Team() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Section>
			<Content>
				<Typography
					variant={isMobile ? "h5" : "h3"}
					component="h2"
					gutterBottom
				>
					Meet Our Team
				</Typography>

				<Divider sx={{ width: "100px", bgcolor: "black", mx: "auto" }} />

				<Typography
					variant="body2"
					gutterBottom
					align="center"
					sx={{ mt: 5, width: "70%", mx: "auto" }}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when{" "}
				</Typography>

				<Grid container spacing={2} sx={{ mt: 5 }}>
					<Grid item xs={12} sm={4}>
						<ImageContainer>
							<img
								src="https://img.freepik.com/premium-photo/man-photographer-with-camera-takes-photo-dark_169016-17160.jpg?w=360"
								alt="Person"
								style={{ width: "250px", height: "300px", objectFit: "cover" }}
							/>
							<Overlay className="overlay">
								<Typography variant="h6">Jagdish Kakade</Typography>
								<Typography variant="body2">Photographer</Typography>
							</Overlay>
						</ImageContainer>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ImageContainer>
							<img
								src="https://img.freepik.com/free-photo/man-with-camera_23-2147689324.jpg?t=st=1714763821~exp=1714767421~hmac=4e6b45d5ba9482d01dc7f7153b4e88a896b29536d13d6cc4e1ed9762f4c2e1fd&w=360"
								alt="Person"
								style={{ width: "250px", height: "300px", objectFit: "cover" }}
							/>
							<Overlay className="overlay">
								<Typography variant="h6">Omkar Godham</Typography>
								<Typography variant="body2">Editor</Typography>
							</Overlay>
						</ImageContainer>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ImageContainer>
							<img
								src="https://img.freepik.com/free-photo/young-asian-man-with-camera-isolated-white-background-photographer-concept_231208-3767.jpg?t=st=1714763773~exp=1714767373~hmac=8ef804bbf8bceb0a402350d316e80a15a392d1cc0ad3554e46739a0c66b6b88a&w=996"
								alt="Person"
								style={{ width: "250px", height: "300px", objectFit: "cover" }}
							/>
							<Overlay className="overlay">
								<Typography variant="h6">Govind Kadam</Typography>
								<Typography variant="body2">Choreographer</Typography>
							</Overlay>
						</ImageContainer>
					</Grid>
				</Grid>
			</Content>
		</Section>
	);
}

export default Team;
