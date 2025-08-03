const Highlight = ({ data }) => {
    const Icon = data.icon;
    /* 
    title: "50,000+ Deliveries",
        description: "Packages safely delivered across Nigeria and beyond.",
        icon: FaBox,
        style: "text-blue-600 text-3xl"
    },  */
    return (
        <div className="relative p-2 rounded-md bg-gray-100">
            <Icon className={data.style} />
            <h1 className="font-bold my-2">{data.title}</h1>
            <p className="text-sm">{data.description}</p>
        </div>
    );
};

export default Highlight;
