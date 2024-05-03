import React from "react";
import {
	Container,
	Typography,
	Card,
	CardContent,
	Box,
	Divider,
	useTheme,
	Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../Images/infobg.jpg"; // Import your background image
import ringImage from "../Images/rings.png"; // Import your background image

const Section = styled("section")({
	backgroundImage: `url(${backgroundImage})`, // Set background image
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "relative",
	minHeight: "100vh", // Adjust height as needed
	display: "flex",
	justifyContent: "center",
	// alignItems: "center",
	overflow: "hidden",
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.9)", // Black color overlay with 0.5 opacity
	},
});

const Content = styled(Container)({
	zIndex: 1,
	textAlign: "center",
	color: "#fff", // Text color
});

const CardContainer = styled("div")({
	marginTop: "2rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "2rem",
});

const CustomCard = styled(Card)({
	minWidth: 200,
	backgroundColor: "rgba(0, 0, 0, 0)", // Card background color with 0.7 opacity
	color: "#fff", // Text color
});

function Info() {
	const theme = useTheme();

	return (
		<Section>
			<Content maxWidth="md" sx={{ mt: 15 }}>
				<Box>
					<Typography variant="h5" gutterBottom>
						About The Studio
					</Typography>
					<Divider sx={{ width: "100px", bgcolor: "white", mx: "auto" }} />
				</Box>
				<Box sx={{ mt: 10 }}>
					<img src={ringImage} alt="" width={50} />

					<Typography
						variant="h4"
						gutterBottom
						sx={{ color: theme.palette.secondary.main, mt: 5 }}
					>
						The Wedding Style
					</Typography>
					<Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting.
					</Typography>
				</Box>
				<CardContainer sx={{ mt: 10, py: 5 }}>
					<Grid
						container
						spacing={4}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Grid item xs={12} sm={8} md={4}>
							{/* Card 1 */}
							<CustomCard>
								<CardContent>
									<Typography
										variant="h6"
										component="h3"
										gutterBottom
										color={"secondary"}
									>
										What we love
									</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</Typography>
								</CardContent>
							</CustomCard>
						</Grid>
						{/* Card 2 */}
						<Grid item xs={12} sm={8} md={4}>
							{/* Card 1 */}
							<CustomCard>
								<CardContent>
									<Typography
										variant="h6"
										component="h3"
										gutterBottom
										color={"secondary"}
									>
										What we do
									</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
									</Typography>
								</CardContent>
							</CustomCard>
						</Grid>
						<Grid item xs={12} sm={8} md={4}>
							{/* Card 1 */}
							<CustomCard>
								<CardContent>
									<Typography
										variant="h6"
										component="h3"
										gutterBottom
										color={"secondary"}
									>
										What we believe in
									</Typography>
									<Typography variant="body2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
									</Typography>
								</CardContent>
							</CustomCard>
						</Grid>
					</Grid>
				</CardContainer>
			</Content>
		</Section>
	);
}

export default Info;
