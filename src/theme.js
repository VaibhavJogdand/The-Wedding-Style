import { createMuiTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createMuiTheme({
	typography: {
		fontFamily: "Gabriela", // Set font family
	},
	palette: {
		primary: {
			main: "#1e202d", // Set primary color
			contrastText: "#dab871", // Set primary text color
		},
		secondary: {
			main: "#dab871", // Set primary color
			contrastText: "#1e202d",
		},
		textSecondary: {
			main: "#ffffff", // Set primary color
		},
	},
	components: {
		MuiListItem: {
			styleOverrides: {
				root: {
					padding: "5px",
				},
			},
		},
	},
});

export default theme;
