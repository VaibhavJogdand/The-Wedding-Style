import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	Typography,
	styled,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import backgroundImage from "../Images/camera.jpg"; // Import your background image
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "../data/Images";

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
	padding: "70px",
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		// background:
		// 	"linear-gradient(to bottom, rgba(30, 32, 45,0.8) 20%, rgba(218,184,113,0.7) 80%)",
		backgroundColor: "rgba(30, 32, 45, 0.9)",
	},
});

const Content = styled("div")({
	zIndex: 1,
	textAlign: "center",
	color: "#fff", // Text color
});

const CustomAccordion = styled(Accordion)(({ theme }) => ({
	backgroundColor: "rgba(30, 32, 45,0.6)",
	marginTop: "20px",
	color: "#fff",
	"&.Mui-expanded": {
		border: "1px solid #fff",
	},
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
	backgroundColor: "rgba(30, 32, 45,0.6)",
	color: "#fff",
	display: "flex",
	width: "90vw",
	textAlign: "left",
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
	backgroundColor: "rgba(30, 32, 45,0.6)",
	paddingLeft: "30px",
	textAlign: "left",
}));

function FAQ() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Section>
			<Content>
				<Box>
					<Typography
						variant={isMobile ? "h5" : "h3"}
						component="h2"
						gutterBottom
					>
						Frequently Asked Questions
					</Typography>
					<Divider sx={{ width: "100px", bgcolor: "white", mx: "auto" }} />
				</Box>
				<Box sx={{ mt: 10 }}>
					{faqData.map((faq, index) => (
						<CustomAccordion key={index}>
							<CustomAccordionSummary
								expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />} // Use ExpandMoreIcon by default
								aria-controls={`panel-${index}-content`}
								id={`panel-${index}-header`}
							>
								<Typography>{faq.question}</Typography>
							</CustomAccordionSummary>
							<CustomAccordionDetails>
								<Typography variant="body2">{faq.answer}</Typography>
							</CustomAccordionDetails>
						</CustomAccordion>
					))}
				</Box>
			</Content>
		</Section>
	);
}

export default FAQ;
