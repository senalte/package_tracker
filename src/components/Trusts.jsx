import Highlight from "./Highlight";

import { trustHighlights } from "../assets/mockDatas";
const Trusts = () => {
    return (
        <div className="text-center py-6 px-3 bg-white">
            <div>
                <h1 className="font-bold text-xl">Why Thousands Trust Us.</h1>
                <p className="text-sm text-center">
                    From individuals to businesses, we’ve built a reputation for
                    reliable, secure, and timely deliveries nationwide.,
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 px-4 py-8 md:grid-cols-4">
                {trustHighlights.map((highlight, ind) => (
                    <Highlight data={highlight} key={ind} />
                ))}
            </div>
        </div>
    );
};

export default Trusts;
