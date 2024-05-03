import React, { useState } from "react";
import {
	Box,
	Divider,
	Grid,
	Typography,
	useTheme,
	useMediaQuery,
	Tabs,
	Tab,
} from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../Images/infobg.jpg"; // Import your background image
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Gallery } from "../data/Images";

const Section = styled("section")({
	backgroundImage: `url(${backgroundImage})`, // Set background image
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "relative",
	// height: "120vh", // Adjust height as needed
	display: "flex",
	justifyContent: "center",
	// alignItems: "center",
	overflow: "hidden",
	padding: "70px",
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background:
			"linear-gradient(to bottom, rgba(30, 32, 45,0.8) 20%, rgba(218,184,113,0.7) 80%)",
	},
});

const Content = styled("div")({
	zIndex: 1,
	textAlign: "center",
	color: "#fff", // Text color
});

const categories = [
	"Pre Wedding",
	"Haldi & Pooja",
	"Sangeet",
	"Engagement",
	"Wedding",
];

function Showcase() {
	const [activeCategory, setActiveCategory] = useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleClick = (category) => {
		setActiveCategory(category);
	};

	return (
		<Section>
			<Content>
				<Typography
					variant={isMobile ? "h5" : "h3"}
					component="h2"
					gutterBottom
				>
					Our Showcase
				</Typography>
				<Divider sx={{ width: "100px", bgcolor: "white", mx: "auto" }} />

				<Box>
					<Tabs
						// value={activeCategory}
						variant={isMobile ? "scrollable" : ""}
						scrollButtons={isMobile ? "auto" : ""}
						// aria-label="scrollable auto tabs example"
						sx={{ width: "100vw", p: 2, mt: isMobile ? 5 : 10 }}
						centered={isMobile ? false : true}
					>
						{categories.map((category, index) => (
							<Tab
								sx={{
									border: index !== activeCategory ? "1px solid #fff" : "",
									padding: isMobile ? "2px 20px" : "5px 20px",
									cursor: "pointer",
									backgroundColor:
										index === activeCategory ? "#1e202d" : "transparent",
									color: index === activeCategory ? "#dab871" : "#fff",
									mx: 1,
								}}
								label={
									<Typography variant="body1" noWrap>
										{category}
									</Typography>
								}
								onClick={() => handleClick(index)}
							/>
						))}
					</Tabs>
				</Box>

				<Box sx={{ mt: isMobile ? 5 : 10 }}>
					<Grid container spacing={isMobile ? 1 : 2}>
						{Gallery[activeCategory].map((image) => {
							return (
								<Grid item xs={12} sm={3}>
									<img
										src={image}
										width={300}
										height={300}
										style={{ objectFit: "cover", borderRadius: "5px" }}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Box>
				<Typography
					variant={isMobile ? "h6" : "h5"}
					color={"primary"}
					sx={{ mt: 4 }}
				>
					A true love story never ends...
				</Typography>
			</Content>
		</Section>
	);
}

export default Showcase;
