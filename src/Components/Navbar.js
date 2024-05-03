// Navbar.js

import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Images/logo.png"; // Import your logo component

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with 0.5 opacity
	position: "fixed", // Stick to the top
}));

const LogoContainer = styled("div")(({ theme }) => ({
	marginRight: theme.spacing(1),
}));

const Spacer = styled("div")(({ theme }) => ({
	flexGrow: 1,
}));

const TransparentDrawer = styled(Drawer)(({ theme }) => ({
	"& .MuiDrawer-paper": {
		backgroundColor: "rgba(30, 32, 45,0.8)",
		color: "#fff",
	},
}));

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const theme = useTheme();
	const isTab = useMediaQuery(theme.breakpoints.down("md"));
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleScrollToSection = (sectionId) => {
		setIsMenuOpen(false);

		const section = document.getElementById(sectionId);
		if (section) {
			const targetY = section.getBoundingClientRect().top + window.scrollY;
			const startingY = window.scrollY;
			const distance = Math.abs(targetY - startingY);
			const duration = 800; // Adjust the duration as needed

			let startTime = null;

			const animateScroll = (currentTime) => {
				if (!startTime) {
					startTime = currentTime;
				}

				const timeElapsed = currentTime - startTime;
				const scrollProgress = Math.min(timeElapsed / duration, 1);

				const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
				const easeScrollProgress = easing(scrollProgress);

				window.scrollTo(
					0,
					startingY + (targetY - startingY) * easeScrollProgress
				);

				if (timeElapsed < duration) {
					window.requestAnimationFrame(animateScroll);
				}
			};

			window.requestAnimationFrame(animateScroll);
		}
	};

	return (
		<>
			<CustomAppBar>
				<Toolbar sx={{ py: 1 }}>
					<LogoContainer>
						<img src={Logo} width={isMobile ? 50 : 70} alt="Logo" />
					</LogoContainer>

					<Typography variant={isMobile ? "body1" : "h6"} component="div">
						The Wedding Style
					</Typography>
					<Spacer />
					{!isTab ? (
						<Box alignItems="center" gap={4} display={"flex"}>
							<IconButton
								color="inherit"
								aria-label="Home"
								onClick={() => handleScrollToSection("home")}
							>
								<Typography variant="h6">Home</Typography>
							</IconButton>
							<IconButton
								color="inherit"
								aria-label="About"
								onClick={() => handleScrollToSection("about")}
							>
								<Typography variant="h6">About</Typography>
							</IconButton>
							<IconButton
								color="inherit"
								aria-label="Gallery"
								onClick={() => handleScrollToSection("gallery")}
							>
								<Typography variant="h6">Gallery</Typography>
							</IconButton>
							<IconButton
								color="inherit"
								aria-label="Contact"
								onClick={() => handleScrollToSection("team")}
							>
								<Typography variant="h6">Team</Typography>
							</IconButton>
							<IconButton
								color="inherit"
								aria-label="FAQ"
								onClick={() => handleScrollToSection("faq")}
							>
								<Typography variant="h6">FAQ</Typography>
							</IconButton>
						</Box>
					) : (
						<IconButton
							color="inherit"
							aria-label="Menu"
							onClick={toggleMenu}
							size="large"
						>
							<MenuIcon />
						</IconButton>
					)}
				</Toolbar>
			</CustomAppBar>
			<TransparentDrawer
				anchor="right"
				open={isMenuOpen}
				onClose={toggleMenu}
				sx={{ backgroundColor: "transparent" }}
			>
				<Box
					sx={{
						display: "flex",
						width: "100vw",
						position: "relative",
						backgroundColor: "transparent",
						py: 6,
					}}
				>
					<IconButton
						onClick={toggleMenu}
						sx={{
							display: "flex",
							position: "absolute",
							top: "16px",
							right: "16px",
							color: "#dab871",
						}}
					>
						<CloseIcon />
					</IconButton>
					<List
						sx={{
							mx: "auto",
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
							justifyContent: "center",
							mt: "6",
						}}
					>
						{["Home", "About", "Gallery", "Team", "FAQ"].map((text, index) => (
							<ListItem
								button
								key={text}
								color="secondary.main"
								onClick={() => handleScrollToSection(text.toLowerCase())}
							>
								<ListItemText
									color="secondary.main"
									primary={
										<Typography
											align="center"
											fontSize={"1.5rem"}
											color={"secondary"}
										>
											{text}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>
			</TransparentDrawer>
		</>
	);
}

export default Navbar;
