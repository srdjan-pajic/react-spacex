import { useEffect, useState } from "react";

const PopupCloud = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth <= 900 && window.innerWidth >= 700);
            setTimeout(() => {
                setIsVisible(false);
            }, 9000);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    return isVisible ? <div className="popup-cloud"><p className="popup-cloud__text">{text}</p></div> : null;
}

export default PopupCloud;