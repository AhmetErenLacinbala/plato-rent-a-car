import { useState, useEffect } from "react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(() => localStorage.getItem("cookiesAccepted") === null);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        if (cookiesAccepted === null) {
            setIsVisible(true);
        }
    }, []);

    const setCookie = (value) => {
        localStorage.setItem("cookiesAccepted", value);
        setIsVisible(false);
    };

    const acceptCookies = () => {
        window.gtag &&
            window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
            });
        setCookie("true");
    };

    const rejectCookies = () => {
        setCookie("false");
    };

    return isVisible ? (
        <div className="fixed bottom-6 left-6 z-50">
            <div className="bg-black/80 text-white p-5 rounded-xl shadow-lg w-[clamp(250px,90vw,400px)] backdrop-blur-md">
                <div className="border-t-2 border-[#dc493a] w-10 mb-2"></div>
                <h3 className="text-lg font-bold">Çerezler & Gizlilik</h3>
                <p className="text-sm mt-2">
                    Deneyiminizi geliştirmek için çerezleri kullanıyoruz. Çerez politikamızı ve gizlilik politikamızı okumak için
                    <a href="/privacy" target="_blank" className="underline text-red-400 mx-1">
                        tıklayın.
                    </a>
                </p>
                <div className="flex justify-start mt-4 gap-3">
                    <button
                        onClick={acceptCookies}
                        className="bg-[#dc493a] text-white px-5 py-2 rounded-md font-medium transition hover:bg-red-600"
                    >
                        Kabul Et
                    </button>
                    <button
                        onClick={rejectCookies}
                        className="border-2 border-[#dc493a] text-white px-5 py-2 rounded-md font-medium transition hover:bg-red-500"
                    >
                        Reddet
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default CookieConsent;
