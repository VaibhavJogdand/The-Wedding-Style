import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

const Section = styled("section")(({ theme }) => ({
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden",
	padding: "70px",
	backgroundColor: theme.palette.secondary.main,
}));

const Content = styled("div")({
	zIndex: 1,
	textAlign: "center",
});

function TellStory() {
	return (
		<div>
			<Section>
				<Box sx={{ textAlign: "center" }}>
					<Typography variant="h4">Tell us your story</Typography>
					<Typography sx={{ mt: 3 }}>
						Write few things of yourself and let us put face to your story.
					</Typography>
					<Button
						variant="contained"
						sx={{
							mt: 6,
							borderRadius: "0",
							color: "#fff",
							px: 10,
							py: 1,
							textWrap: "nowrap",
						}}
					>
						WRITE HERE
					</Button>
				</Box>
			</Section>
		</div>
	);
}

export default TellStory;
