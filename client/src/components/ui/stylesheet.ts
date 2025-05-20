import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-burgundy text-white hover:bg-burgundy/90 transition-all duration-300 ease-in-out shadow-md",
        dark: "bg-black text-white hover:bg-burgundy transition-all duration-300 ease-in-out shadow-md",
        outline: "border border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all duration-300 ease-in-out",
        ghost: "bg-transparent text-white hover:text-burgundy hover:bg-white/10 transition-all duration-300 ease-in-out",
        secondary: "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 ease-in-out",
        link: "text-burgundy hover:text-black border-b border-burgundy hover:border-black transition-all duration-300 ease-in-out",
      },
      size: {
        default: "h-10 px-8 py-3",
        sm: "h-9 px-6 py-2",
        lg: "h-11 px-10 py-4",
        xl: "h-12 px-12 py-5 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const glassVariants = cva(
  "rounded-md shadow-lg backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-white/85",
        dark: "bg-black/85",
        burgundy: "bg-burgundy/85",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const headingVariants = cva(
  "font-playfair font-semibold",
  {
    variants: {
      variant: {
        h1: "text-4xl md:text-5xl lg:text-6xl",
        h2: "text-3xl md:text-4xl",
        h3: "text-2xl md:text-3xl",
        h4: "text-xl md:text-2xl",
        h5: "text-lg md:text-xl",
        h6: "text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "h2",
    },
  }
);

export const sectionContainerVariants = cva(
  "py-20",
  {
    variants: {
      variant: {
        white: "bg-white",
        gray: "bg-gray-100",
        dark: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  }
);

export const dividerVariants = cva(
  "w-20 h-0.5 bg-burgundy",
  {
    variants: {
      alignment: {
        center: "mx-auto",
        left: "mr-auto",
        right: "ml-auto",
      },
      spacing: {
        default: "mb-8 mt-3",
        tight: "mb-4 mt-2",
        loose: "mb-12 mt-4",
      }
    },
    defaultVariants: {
      alignment: "center",
      spacing: "default",
    },
  }
);
