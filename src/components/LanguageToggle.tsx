"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLanguage = () => {
        const targetLang = currentLang === "en" ? "es" : "en";
        const newPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);
        router.push(newPath);
    };

    return (
        <button
            onClick={switchLanguage}
            className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 px-4 py-2 rounded-full font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            aria-label="Toggle Language"
        >
            {currentLang === "en" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
    );
}