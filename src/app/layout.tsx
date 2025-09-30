import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Intergamma Frontend Developer Assessment",
    description: "This is the assessment for front-end developers at Intergamma.",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${overpass.className} antialiased`}>{children}</body>
        </html>
    );
};
export default RootLayout;
