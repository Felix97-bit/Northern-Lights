import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050608",
        ink: "#0A0C10",
        shadow: "#11141B",
        midnight: "#1A1F2B",
        frost: "#E8EEF2",
        mist: "#9BA8B5",
        steel: "#4A5563",
        aurora: {
          green: "#00E5A0",
          teal: "#4EE2C8",
          blue: "#5B8DEF",
          violet: "#8B5CF6"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.025em",
        wider2: "0.18em"
      },
      maxWidth: {
        content: "1440px"
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, #00E5A0 0%, #4EE2C8 35%, #5B8DEF 70%, #8B5CF6 100%)",
        "aurora-glow":
          "radial-gradient(ellipse at center, rgba(0,229,160,0.18) 0%, rgba(91,141,239,0.08) 40%, transparent 70%)"
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.7", transform: "scaleX(1)" },
          "50%": { opacity: "1", transform: "scaleX(1.02)" }
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "wipe-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" }
        }
      },
      animation: {
        "aurora-shift": "aurora-shift 8s ease infinite",
        "aurora-pulse": "aurora-pulse 4s ease-in-out infinite",
        "twinkle": "twinkle 4s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "wipe-down": "wipe-down 700ms ease-in-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
