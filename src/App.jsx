import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import Services from "./components/Services";
import Trusts from "./components/Trusts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <NavBar />
            <HeroSection />
            <InfoCards />
            <Services />
            <Trusts />
            <Contact />
            <Footer />
        </QueryClientProvider>
    );
}

export default App;
