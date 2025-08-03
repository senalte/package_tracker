import InputSection from "./Input";
import TrackingResult from "./TrackingResult";

const HeroSection = () => {
    return (
        <div
            className="grid py-6 grid-cols-1 gap-3 p-4
            bg-hero-pattern md:grid-cols-[1fr_2fr]"
        >
            <InputSection />
            <TrackingResult />
        </div>
    );
};

export default HeroSection;
