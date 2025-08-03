import InputSection from "./Input";
import TrackingResult from "./TrackingResult";

const HeroSection = () => {
    return (
        <div
            className="grid p-6 grid-cols-1 gap-3 bg-hero-pattern md:grid-cols-2 place-items-center"
        >
            <InputSection />
            <TrackingResult />
        </div>
    );
};

export default HeroSection;
