import { useCallback, useEffect, useState } from "react";
import "./SlideShow.css";

interface ImgeUrlProps {
    img_url: string[];
}

const SlideShow = ({ img_url }: ImgeUrlProps) => {
    const [ImgeIndex, setImgeIndex] = useState<number>(0);


    const SlideImgRight = useCallback(() => {
        setImgeIndex((prev) => (prev === img_url.length - 1 ? 0 : prev + 1));
    },[ img_url.length ])

    useEffect(() => {
        const timer = setTimeout(SlideImgRight, 4000);
        return () => clearTimeout(timer);
    }, [ImgeIndex, img_url.length , SlideImgRight]);

    return (
        <div className="slide-show">
            <div className="slide-show-content">
                {img_url.map((url, index) => (
                    <div key={index} className="img-content" >
                        <img
                            src={url}
                            style={{ transform: `translateX(${100 * ImgeIndex}%)` }}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;
