const Highlight = ({ data }) => {
    const Icon = data.icon;

    return (
        <div className="relative p-2 rounded-md bg-gray-100">
            <Icon className={data.style} />
            <h1 className="font-bold my-2 text-md">{data.title}</h1>
            <p className="text-sm">{data.description}</p>
        </div>
    );
};

export default Highlight;
