import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Meetify",
    description: "Video Calling App",
    icons: {
        icon: "/icons/meetify.png",
    },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    );
};

export default RootLayout;
