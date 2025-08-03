import { footer } from "../assets/mockDatas";
import Logo from "./Logo";
const Footer = () => {
    return (
        <div className="bg-green-700 text-white py-6 px-4">
            <div>
                <Logo />
                <p className="text-sm py-2">{footer.description}</p>
            </div>
            <div className="py-4 ">
                <h1 className="font-bold">Follow us</h1>
                <div className="flex p-4 justify-between w-4/5">
                    {footer.socials.map(link => (
                        <FooterLink data={link} key={link.platform} />
                    ))}
                </div>
            </div>
            <p className="text-center py-4">
                {footer.year} © - all rights reserved
            </p>
        </div>
    );
};

export default Footer;

export const FooterLink = ({ data }) => {
    const Icon = data.icon;
    return <h1>{<Icon className="text-grreen-600 text-2xl" />}</h1>;
};
