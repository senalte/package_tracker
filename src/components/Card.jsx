const Card = ({ infos }) => {
    const Icon = infos.icon;

    return (
        <div className="bg-white py-8 px-4 rounded-md">
            <p
                className="text-2xl bg-green-100 p-2 text-center mb-3 w-fit
            rounded-full text-green-600"
            >
                <Icon />
            </p>
            <h1 className="font-semibold">{infos.title}</h1>
            <p className="text-gray-600">{infos.text}</p>
        </div>
    );
};

export default Card;
