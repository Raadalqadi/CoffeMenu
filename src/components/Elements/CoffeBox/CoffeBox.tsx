import React, { useEffect, useState } from "react";
import "./CoffeBox.css";
import { map } from "jquery";

interface CoffeeProps {
    data: {
        id: number;
        name: string;
        category: string[];
        kind: {
            type: string;
            description: string;
            img: string;
        }[];
        price: string;
    };
    FilterCoffeeData: any;
}

const CoffeeBox: React.FC<CoffeeProps> = ({ data, FilterCoffeeData }) => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [desc,] = useState<String[]>(data.kind[photoIndex]?.description.split(" "));
    const [isMore, setIsMore] = useState(false)
    const desc1 = desc.filter((descrption, index) => {
        return index <= 10 && (descrption);
    })
    const desc2 = desc.filter((descrption, index) => {
        return index > 10 && (descrption);
    })

    const filterDescrption = () => {
        setIsMore(prev => !prev)
    }
    useEffect(() => {
        filterDescrption()
    }, [])
    useEffect(() => {
        setShowMoreKind(data.kind.length > 3);
    }, [data.kind.length]);

    useEffect(() => {
        setPhotoIndex(0)
    }, [data])



    const [ShowMoreKind, setShowMoreKind] = useState<boolean>(false);

    return (
        <div className={isMore ? "coffee-box show-to-up " : "coffee-box show-to-up big-box"}>
            <div className="img-content">
                <img src={data.kind[photoIndex]?.img} alt="" />
            </div>
            <div className="coffee-info">
                <div className="title">
                    <div className="head">
                        <h2>{data.name}</h2>
                        <button onClick={FilterCoffeeData} value={JSON.stringify(data.category[0])}><span>{data.category[0]}</span></button>
                    </div>
                    <ul>
                        {ShowMoreKind
                            ? data.kind.slice(0, 3).map((kind, index) => (
                                <li
                                    key={index}
                                    className={index === photoIndex ? "active" : undefined}
                                    onClick={() => setPhotoIndex(index)}
                                >
                                    {kind.type}
                                </li>
                            ))
                            : data.kind.map((kind, index) => (
                                <li
                                    key={index}
                                    className={index === photoIndex ? "active" : undefined}
                                    onClick={() => setPhotoIndex(index)}
                                >
                                    {kind.type}
                                </li>
                            ))}
                        {data.kind.length > 3 && (
                            <p onClick={() => setShowMoreKind((prev) => !prev)}>
                                {ShowMoreKind ? "عرض اقل" : "عرض المزيد"}
                            </p>
                        )}
                    </ul>
                </div>
                <div className="description">
                    <p><span>{desc1.map(descrption => descrption + " ")} <span style={isMore ? { display: "none" } : { display: "inline" }} className="show-out">{desc2.map(descrption => descrption + " ")}</span> </span> <span className="show-desc" onClick={filterDescrption}>{isMore ? "المزيد" : "أقل"}</span></p>

                </div>
                <div className="price">
                    <p>{parseInt(data.price) * 450} ﷼</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeBox;
