import { Inter, Outfit } from "next/font/google";

export const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "600"], 
  display: "swap", 
  variable: "--font-inter" 
});

export const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"], 
  display: "swap", 
  variable: "--font-outfit" 
});
