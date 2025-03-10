import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Meetify",
    description: "Video Calling App",
    icons: {
        icon: "/icons/meetify.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <ClerkProvider
            appearance={{
                layout: {
                    socialButtonsVariant: "iconButton",
                    logoImageUrl: "/icons/meetify_logo2.png",
                },
                variables: {
                    colorText: "#fff",
                    colorPrimary: "#0E78F9",
                    colorBackground: "#1C1F2E",
                    colorInputBackground: "#252A41",
                    colorInputText: "#fff",
                },
            }}
        >
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
                >
                    <Toaster />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}