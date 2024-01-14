import { Inter } from "next/font/google";
import ThemeWrapper from "./theme";
import Sidebar from "./sidebar";

// import '../global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SBHacks X",
  description: "Project created for SBHacks X",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper>
          <>
            <Sidebar />
            {children}
          </>
        </ThemeWrapper>
      </body>
    </html>
  );
}
