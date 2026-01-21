import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const DarkTheme = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // اختيار افتراضي: من localStorage أو light
        const saved = localStorage.getItem("theme");
        return saved || "light";
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        // حفظ في localStorage
        localStorage.setItem("theme", theme);

        // وضع الثيم على عنصر الجذر لتفعيل CSS variables
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

    return <DarkTheme.Provider value={value}>{children}</DarkTheme.Provider>;
}

export function useTheme() {
    const ctx = useContext(DarkTheme);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
