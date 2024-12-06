/* eslint-disable camelcase */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import FeatureCard from '../Cards/FeatureCard';
import MeetingModal from './MeetingModal';

const MeetingTypeList = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<
        'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
    >(undefined);

    const createMeeting = () => {

    }

    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setMeetingState('isInstantMeeting')}
                bgImage='./images/meeting-1.jpeg'
            />
            <FeatureCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                className="bg-blue-1"
                handleClick={() => setMeetingState('isJoiningMeeting')}
                bgImage='./images/meeting-3.jpeg'
            />
            <FeatureCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                // className="bg-purple-1"
                className="bg-try-14"
                handleClick={() => setMeetingState('isScheduleMeeting')}
                bgImage='./images/meeting-22.jpeg'
            />
            <FeatureCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                className="bg-yellow-1"
                handleClick={() => router.push('/recordings')}
                bgImage='./images/meeting-4.jpeg'
            />

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    );
};

export default MeetingTypeList;