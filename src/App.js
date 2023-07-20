import {ThemeProvider, createTheme} from "@mui/material/styles";
import {Button} from "@mui/material";
import {HelmetProvider, Helmet} from "react-helmet-async";
import './App.css';


const theme = createTheme({
    typography: {
        fontFamily: 'Kavivanar,roboto',
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HelmetProvider>
                <Helmet>
                    <title>Meysam Sefidkars persönliche Website</title>
                </Helmet>
                <div className="App">
                    <Button variant="contained">click</Button>
                </div>
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default App;
