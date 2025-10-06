(function (global) {
    const now = new Date();

    const THEMES = {
        1: { // Enero — Reyes
            name: "Reyes", emojis: ["👑", "⭐", "🍬", "🎁"],
            bg: [
                "radial-gradient(1400px 800px at 0% -10%, rgba(255,220,120,0.08), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(180,220,255,0.10), transparent 55%)",
                "linear-gradient(180deg,#0b1226 0%, #15244a 60%, #0b1226 100%)"
            ],
            paper1: "#fff8e9", paper2: "#f7efde", border: "#e2c9a8", title: "#2b1c17", text: "#3e2a23"
        },
        2: { // Febrero — San Valentín
            name: "San Valentín", emojis: ["❤️", "💘", "💌", "🌹"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,100,150,0.12), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(255,120,160,0.10), transparent 55%)",
                "linear-gradient(180deg,#2a0c16 0%, #3b0f1d 60%, #2a0c16 100%)"
            ],
            paper1: "#fff5f7", paper2: "#ffeef2", border: "#f3c2cf", title: "#3b1a1f", text: "#402428"
        },
        3: { // Marzo — Primavera
            name: "Primavera", emojis: ["🌸", "🌷", "🦋", "🌼"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(150,255,190,0.12), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(255,200,230,0.10), transparent 55%)",
                "linear-gradient(180deg,#10241a 0%, #133222 60%, #0f1f18 100%)"
            ],
            paper1: "#fffaf0", paper2: "#f5fbe9", border: "#d5e6c8", title: "#293019", text: "#2d3a2a"
        },
        4: { // Abril — Lluvioso/Pascua suave
            name: "Abril", emojis: ["☔", "🐣", "🌈", "🌧️"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(160,190,255,0.12), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(130,210,255,0.10), transparent 55%)",
                "linear-gradient(180deg,#0d1a2a 0%, #15314b 60%, #0d1a2a 100%)"
            ],
            paper1: "#f7fbff", paper2: "#eef7ff", border: "#c8dbee", title: "#1e2b3a", text: "#233141"
        },
        5: { // Mayo — Cumple Itzy 💕
            name: "Cumple Itzy", emojis: ["🎂", "🎉", "💗", "🐮"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,190,220,0.14), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(255,210,120,0.10), transparent 55%)",
                "linear-gradient(180deg,#261226 0%, #3b1a3c 60%, #261226 100%)"
            ],
            paper1: "#fff7fb", paper2: "#ffeef9", border: "#f3c6e8", title: "#3b1736", text: "#3a2640"
        },
        6: { // Junio — Verano inicio
            name: "Junio", emojis: ["🌞", "🌴", "🍉", "🕶️"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,220,120,0.14), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(255,160,100,0.10), transparent 55%)",
                "linear-gradient(180deg,#1d1405 0%, #3a260d 60%, #1d1405 100%)"
            ],
            paper1: "#fff8e1", paper2: "#fff1cc", border: "#f0d2a6", title: "#3a2a10", text: "#3a2e1f"
        },
        7: { // Julio — Verano
            name: "Julio", emojis: ["🏖️", "🍦", "🌊", "🌺"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(120,240,255,0.14), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(100,190,255,0.10), transparent 55%)",
                "linear-gradient(180deg,#051b26 0%, #0f384c 60%, #051b26 100%)"
            ],
            paper1: "#f0fbff", paper2: "#e6f7ff", border: "#b9e1f5", title: "#113043", text: "#163545"
        },
        8: { // Agosto — Fin de verano
            name: "Agosto", emojis: ["⛱️", "🍹", "🌅", "🫧"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,180,120,0.14), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(255,120,120,0.10), transparent 55%)",
                "linear-gradient(180deg,#26130b 0%, #402114 60%, #26130b 100%)"
            ],
            paper1: "#fff4e8", paper2: "#ffeede", border: "#f0cdb8", title: "#3a2016", text: "#3a271f"
        },
        9: { // Septiembre — Otoño suave
            name: "Septiembre", emojis: ["🍁", "🍂", "🕯️", "📜"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,160,90,0.12), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(200,130,80,0.10), transparent 55%)",
                "linear-gradient(180deg,#1b0f07 0%, #2e1a0e 60%, #1b0f07 100%)"
            ],
            paper1: "#fff4e6", paper2: "#f6ebdc", border: "#e1c6ad", title: "#2b1c17", text: "#3e2a23"
        },
        10: { // Octubre — Halloween
            name: "Halloween", emojis: ["🎃", "🕸️", "🕷️", "🦇"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,140,0,0.12), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(255,69,0,0.10), transparent 55%)",
                "linear-gradient(180deg, #0b0615 0%, #120a24 55%, #0b0615 100%)"
            ],
            paper1: "#fff8e9", paper2: "#f7efde", border: "#e2c9a8", title: "#2b1c17", text: "#3e2a23"
        },
        11: { // Noviembre — Día de Muertos
            name: "Día de Muertos", emojis: ["💀", "🕯️", "🌼", "🧡"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(255,170,0,0.14), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(160,60,160,0.10), transparent 55%)",
                "linear-gradient(180deg,#1a0a14 0%, #2a1234 60%, #1a0a14 100%)"
            ],
            paper1: "#fff6ea", paper2: "#ffeedb", border: "#f0c99f", title: "#2f1423", text: "#3b2331"
        },
        12: { // Diciembre — Navidad
            name: "Navidad", emojis: ["🎄", "✨", "❄️", "🕯️"],
            bg: [
                "radial-gradient(1500px 800px at 10% -10%, rgba(90,200,140,0.14), transparent 60%)",
                "radial-gradient(1200px 700px at 110% 0%, rgba(120,180,255,0.10), transparent 55%)",
                "linear-gradient(180deg,#0a1710 0%, #163226 60%, #0a1710 100%)"
            ],
            paper1: "#f5fff7", paper2: "#ecfff2", border: "#cbe6d3", title: "#173422", text: "#243a2e"
        },
    };

    // Tipografías por tema
    const TYPO = {
        "Reyes": { // Enero
            title: "'Spectral SC', serif",
            body: "'Merriweather', serif",
            href: "https://fonts.googleapis.com/css2?family=Spectral+SC:wght@700&family=Merriweather:wght@400;700&display=swap"
        },
        "San Valentín": { // Febrero
            title: "'Playfair Display', serif",
            body: "'Crimson Text', serif",
            href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Crimson+Text:wght@400;600&display=swap"
        },
        "Primavera": { // Marzo
            title: "'Marcellus SC', serif",
            body: "'Cardo', serif",
            href: "https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Cardo:wght@400;700&display=swap"
        },
        "Abril": { // Abril
            title: "'IM Fell English SC', serif",
            body: "'Lora', serif",
            href: "https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=Lora:wght@400;600&display=swap"
        },
        "Cumple Itzy": { // Mayo
            title: "'Alegreya SC', serif",
            body: "'Alegreya', serif",
            href: "https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@700&family=Alegreya:wght@400;600&display=swap"
        },
        "Junio": {
            title: "'Cinzel', serif",
            body: "'Source Serif 4', serif",
            href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Source+Serif+4:wght@400;600&display=swap"
        },
        "Julio": {
            title: "'Cormorant SC', serif",
            body: "'Libre Baskerville', serif",
            href: "https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@700&family=Libre+Baskerville:wght@400;700&display=swap"
        },
        "Agosto": {
            title: "'Prata', serif",
            body: "'Rosarivo', serif",
            href: "https://fonts.googleapis.com/css2?family=Prata&family=Rosarivo:ital@0;1&display=swap"
        },
        "Septiembre": {
            title: "'Gloock', serif",
            body: "'Quattrocento', serif",
            href: "https://fonts.googleapis.com/css2?family=Gloock&family=Quattrocento:wght@400;700&display=swap"
        },
        "Halloween": { // Octubre
            title: "'UnifrakturCook', cursive",
            body: "'Spectral SC', serif",
            href: "https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Spectral+SC:wght@400;700&display=swap"
        },
        "Día de Muertos": { // Noviembre
            title: "'UnifrakturCook', cursive",
            body: "'Cormorant Garamond', serif",
            href: "https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Cormorant+Garamond:wght@400;600&display=swap"
        },
        "Navidad": { // Diciembre
            title: "'Forum', serif",
            body: "'Merriweather', serif",
            href: "https://fonts.googleapis.com/css2?family=Forum&family=Merriweather:wght@400;700&display=swap"
        },
        "default": {
            title: "'Spectral SC', serif",
            body: "Georgia, serif",
            href: "https://fonts.googleapis.com/css2?family=Spectral+SC:wght@700&display=swap"
        }
    };


    function applyTypography(theme) {
        const cfg = TYPO[theme.name] || TYPO.default;
        // link único para fuentes del tema
        let link = document.getElementById('theme-fonts');
        if (!link) {
            link = document.createElement('link');
            link.id = 'theme-fonts';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
        link.href = cfg.href;
        // expone vars para que el CSS las use
        document.documentElement.style.setProperty('--title-font', cfg.title);
        document.documentElement.style.setProperty('--body-font', cfg.body);
    }

    function getAutoTheme(date = new Date()) {
        const m = date.getMonth() + 1; // 1 al 12
        const d = date.getDate();
        // Regla especial: del 1 al 31 Oct = Halloween; del 1 Nov en adelante = Día de Muertos
        if (m === 10) return THEMES[10];
        if (m === 11 && d >= 1) return THEMES[11];
        return THEMES[m] || THEMES[9];
    }



    function applyTheme(theme) {
        if (!theme) theme = getAutoTheme();
        // Aplica fondos
        document.body.style.background = theme.bg.join(", ");
        // Variables de papel/colores
        const root = document.documentElement;
        root.style.setProperty('--paper-bg-1', theme.paper1);
        root.style.setProperty('--paper-bg-2', theme.paper2);
        root.style.setProperty('--paper-border', theme.border);
        root.style.setProperty('--title', theme.title);
        root.style.setProperty('--text', theme.text);
        // Ajusta colores si hay títulos u hojas
        // (las hojas usan esos CSS vars si están presentes)
        // Retorna el tema por si se requiere
        return theme;
    }

    // Oscurecimiento nocturno (0..1)
    function computeNightOverlay(hour) {
        // Día claro ~10–17h, atardecer 18–20, noche fuerte 21–5, amanecer 6–9
        if (hour >= 10 && hour <= 17) return 0.0;
        if (hour >= 18 && hour <= 20) return (hour - 18 + 1) * 0.15; // 0.15..0.45
        if (hour >= 21 || hour <= 5) return 0.55; // noche cerrada
        // 6..9 am: desvaneciendo
        if (hour >= 6 && hour <= 9) return 0.15;
        return 0.0;
    }

    function applyNightOverlay(simulated) {
        const h = (typeof simulated === "number") ? simulated : new Date().getHours();
        const val = computeNightOverlay(h);
        document.documentElement.style.setProperty('--night-overlay', val.toString());
    }

    // Lluvia de emojis según tema
    function spawnEmojiRain(container, total = 36, customDate) {
        if (!container) return;
        container.innerHTML = "";

        // Usa el tema de demo si se pasó fecha; si no, el tema actual guardado; si no hay, calcula
        const theme = customDate
            ? getAutoTheme(customDate)
            : (Theme && Theme._currentTheme) || getAutoTheme();

        for (let i = 0; i < total; i++) {
            const node = document.createElement("div");
            node.className = "spook";
            node.textContent = theme.emojis[Math.floor(Math.random() * theme.emojis.length)];
            node.style.left = `${Math.random() * 100}vw`;
            const size = Math.floor(Math.random() * 20) + 22;
            node.style.fontSize = `${size}px`;
            const duration = 5 + Math.random() * 6;
            const delay = Math.random() * 4;
            node.style.animationDuration = `${duration}s`;
            node.style.animationDelay = `${delay}s`;
            container.appendChild(node);
        }
    }


    // API pública
    const Theme = {
        _currentTheme: null,

        applyAutoTheme(customDate) {
            // Usa fecha real si no pasan una personalizada
            const theme = applyTheme(getAutoTheme(customDate || new Date()));
            this._currentTheme = theme;        // guarda el tema actual
            applyTypography(theme);            // aplica tipografías del tema
            return theme;
        },

        spawnEmojiRain(container, total = 36, customDate) {
            return spawnEmojiRain(container, total, customDate);
        },

        applyNightOverlay,
        simulateNightToggle: (() => {
            let toggled = false;
            return function () {
                toggled = !toggled;
                applyNightOverlay(toggled ? 23 : new Date().getHours()); // 23 = noche cerrada demo
            };
        })(),
    };


    // Aplicación automática si el script se carga sin esperar
    document.addEventListener("DOMContentLoaded", () => {
        Theme.applyAutoTheme();
        Theme.applyNightOverlay(); // según hora rial no feik
    });

    global.Theme = Theme;
})(window);
