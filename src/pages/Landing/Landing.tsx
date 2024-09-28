import { ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";

import theme from "../../theme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Roadmap from "../../sections/Roadmap";
import Gifts from "../../sections/Gifts";
import Rules from "../../sections/Rules";
import { DEFAULT_GUEST, GUESTS } from "../../constants/guests";

const Landing = () => {
  const { guest } = useParams();
  const guestDetails =
    GUESTS.find((guestItem) => guestItem.hash === guest) || DEFAULT_GUEST;
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Roadmap isYogaAvailable={guestDetails.isYogaAvailable} />
      <Gifts />
      <Rules isYogaAvailable={guestDetails.isYogaAvailable} />
      <Footer />
    </ThemeProvider>
  );
};

export default Landing;
