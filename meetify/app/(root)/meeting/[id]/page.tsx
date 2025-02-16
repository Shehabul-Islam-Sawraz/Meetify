"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { Loader } from "lucide-react";

import { useGetCallById } from "@/hooks/useGetCallById";
import MeetingRoom from "@/components/Meeting/MeetingRoom";
import MeetingSetup from "@/components/Meeting/MeetingSetup";

const MeetingPage = () => {
    const { id } = useParams();
    const { isLoaded } = useUser();
    const { call, isCallLoading } = useGetCallById(id);
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    if (!isLoaded || isCallLoading) return <Loader />;

    if (!call)
        return (
            <p className="text-center text-3xl font-bold text-white">
                Stream Video Client Call Not Found
            </p>
        );

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                    ) : (
                        <MeetingRoom />
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    );
};

export default MeetingPage;
