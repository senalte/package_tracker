import Card from "./Card";

import { miniCards } from "../assets/mockDatas";

const InfoCards = () => {
    return (
        <div className=" grid grid-cols-1 gap-4 px-4 py-8 md:grid-cols-3">
            {miniCards.map(item => (
                <Card infos={item} key={item.id}/>
            ))}
        </div>
    );
};

export default InfoCards;
