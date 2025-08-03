import ContactLink from "./ContactLink";
import { contactSection } from "../assets/mockDatas";

const Contact = () => {
    return (
        <div className="px-4 py-6 grid grid-cols-1 items-center md:grid-cols-2">
            <div className="py-4">
                <h1 className="font-bold text-center text-xl uppercase">
                    {contactSection.headline}
                </h1>
                <p className="text-center text-sm p-3 md:px-14">
                    {contactSection.subtitle}
                </p>
            </div>
            <div className="flex flex-col gap-2 py-3 px-1.5">
                {contactSection.contacts.map(contact => (
                    <ContactLink linkData={contact} key={contact.type} />
                ))}
            </div>
        </div>
    );
};

export default Contact;
