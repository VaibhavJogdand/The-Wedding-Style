import {
	Box,
	Button,
	Divider,
	Grid,
	List,
	ListItem,
	Typography,
	styled,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Section = styled("section")(({ theme }) => ({
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden",
	padding: "70px",
	// backgroundColor: theme.palette.secondary.main,
}));

const Content = styled("div")({
	zIndex: 1,
	textAlign: "center",
});

function Footer() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<div>
			<Section>
				<Box sx={{ textAlign: "center" }}>
					<Box>
						<Typography variant={isMobile ? "h5" : "h4"}>Contact Us</Typography>
						<Divider
							sx={{
								width: "100px",
								bgcolor: "black",
								mx: "auto",
								mt: 2,
							}}
						/>
					</Box>

					<Grid
						container
						width={"80vw"}
						sx={{ mt: isMobile ? 5 : 10 }}
						spacing={3}
					>
						<Grid item xs={12} sm={4}>
							<Box sx={{ minWidth: "200px" }}>
								<Typography variant="h6" align="left">
									About Us
								</Typography>
								<Box>
									<List>
										<ListItem>
											<Typography>About Studio</Typography>
										</ListItem>
										<ListItem>
											<Typography>About Team</Typography>
										</ListItem>
										<ListItem>
											<Typography>Terms & Conditions</Typography>
										</ListItem>
										<ListItem>
											<Typography>Privacy Policy</Typography>
										</ListItem>
										<ListItem>
											<Typography>Career</Typography>
										</ListItem>
										<ListItem>
											<Typography>FAQ</Typography>
										</ListItem>
									</List>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box sx={{ minWidth: "200px" }}>
								<Typography variant="h6" align="left">
									Keep in touch
								</Typography>
								<Box>
									<List>
										<ListItem>
											<Typography>India</Typography>
										</ListItem>
										<ListItem>
											<Typography>
												+91999999999
												<br />
												+91465875645
												<br />
												+91465875645
											</Typography>
										</ListItem>
										<ListItem>
											<Typography>
												Lorem Ipsum is simply <br />
												dummy text of the printing and
												<br /> typesetting industry
											</Typography>
										</ListItem>
									</List>
								</Box>
							</Box>
						</Grid>

						<Grid item xs={12} sm={4}>
							<Box sx={{ minWidth: "200px" }}>
								<Typography variant="h6" align="left">
									Career
								</Typography>
								<Box>
									<List>
										<ListItem>
											<Typography>
												Are you interested in working with Wedding Style?
												<br />
												Give us a call or drop a line.
											</Typography>
										</ListItem>
										<ListItem>
											<Button
												variant="outlined"
												sx={{
													mt: 6,
													borderRadius: "0",
													px: 2,
													py: 1,
												}}
											>
												CAREER OPPORTUNITIES
											</Button>
										</ListItem>
									</List>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Section>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				sx={{ bgcolor: "primary.main", p: 2 }}
			>
				<CopyrightIcon sx={{ color: "textSecondary.main", mr: 1 }} />
				<Typography color={"textSecondary.main"} variant="body2">
					2024 The Wedding Style
				</Typography>
			</Box>
		</div>
	);
}

export default Footer;
