import React, { useContext, useEffect, useRef, useState } from "react";
import CoffeBox from "../components/Elements/CoffeBox/CoffeBox";
import "../style/CoffeMenu.css";
import CoffeData from "../CoffeData.json";
import MyContext from "../context/MyContext";
import { OuiArrowRight } from "../assets/icons/icon";

// Define the data structure for Coffee items
interface DataFilter {
    id: number;
    name: string;
    category: string[];
    kind: {
        type: string;
        description: string;
        img: string;
    }[];
    price: string;
}

const CoffeMenu = () => {
    const CategoryContentBox = useRef<any>()
    const [DataByCategory, setDataByCategory] = useState<string[]>(["الكل"]);
    const [DataWithFilter, setDataWithFilter] = useState<DataFilter[]>([]);
    const { state } = useContext(MyContext)!;

    const FilterCoffeeData = (evt: React.MouseEvent<HTMLButtonElement>) => {
        const category = JSON.parse(evt.currentTarget.value);
            setDataByCategory(category === "الكل" ? ["الكل"] : Array.isArray(category) ? category : [category]);
    };
    const ScrollLeft = ()=>{
        CategoryContentBox.current.scrollLeft -= 200;
    }
    const ScrollRight = ()=>{
        CategoryContentBox.current.scrollLeft += 200;
    }

    useEffect(() => {
        const NewData = DataByCategory.includes("الكل")
        ? CoffeData.Data
        : CoffeData.Data.filter((coffeeBox) =>
            DataByCategory.every(category =>
                coffeeBox.category.includes(category)
            )
        );
    

        setDataWithFilter(NewData);
    }, [DataByCategory, state]);

    return (
        <main className="coffee-menu ">
            <div className="category">
                <OuiArrowRight onClick={ScrollLeft} className="left-btn scroll-btn"/>
                <OuiArrowRight onClick={ScrollRight} className="right-btn scroll-btn"/>
                <div ref={CategoryContentBox} className="category-content show-to-up" >
                    {CoffeData.catogry.map((category, index) => (
                        <button
                            key={index}
                            value={JSON.stringify(category)}
                            type="button"
                            onClick={FilterCoffeeData}
                            className={DataByCategory.includes(category) ? "active" : undefined}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="category-content  ">

                </div>
            </div>
            {DataWithFilter.length ? (
                <div className="box-content ">
                    {DataWithFilter.map((coffeeBox, index) => (
                        <CoffeBox FilterCoffeeData={FilterCoffeeData} key={index} data={coffeeBox} />
                    ))}
                </div>
            ) : (
                <h1 style={{ textAlign: "center" }}>لايوجد</h1>
            )}
        </main>
    );
};

export default CoffeMenu;
