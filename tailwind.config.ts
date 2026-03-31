import { colors } from "./constants/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        foreground: colors.foreground,
        card: colors.card,
        muted: colors.muted,
        mutedForeground: colors.mutedForeground,
        primary: colors.primary,
        accent: colors.accent,
        border: colors.border,
        success: colors.success,
        destructive: colors.destructive,
        subscription: colors.subscription,
      },
    },
  },
  plugins: [],
};
