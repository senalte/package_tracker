const ContactLink = ({ linkData }) => {
    const Icon = linkData.icon;
    // console.log(linkData);
    return (
        <div className="flex gap-3 bg-white rounded-md p-3 items-center">
            <span className="bg-green-100 p-3 rounded-md">
                <Icon className="text-green-600 text-xl" />
            </span>
            <p>{linkData.value}</p>
        </div>
    );
};

export default ContactLink;
