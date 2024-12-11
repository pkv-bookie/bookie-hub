import { APPOINTMENT_STATES } from "@constants";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { CallClientCard } from ".";

const CardWrapper = styled.div`
    ${tw`bg-white p-4 w-full flex-1 `};
    min-height: calc(100vh - 150px);
`;

const CardCurrentClient = styled.div`
    ${tw`rounded-lg pt-4 bg-white px-4`};
    background-color: #f3faff;
    border: 1px solid #0099ff;
`;

const CardCallState = styled.div`
    ${tw`flex flex-col grid grid-cols-3 pt-4`};
`;

const StateColumn = styled.div`
    ${tw`flex justify-center items-center content-center bg-blue-500 p-3 m-2 rounded-full text-white`};
    background: #0099ff;
`;

const Row = styled.div`
    ${tw`flex justify-between items-center`};
    margin-bottom: 0.75rem;
`;

const Label = styled.span`
    ${tw`text-gray-700`};
`;

const Value = styled.span`
    ${tw`font-semibold text-xl`};
`;

const CommonCallClientCard: FC = () => {
    const [appointmentState, setAppointmentState] = useState(
        APPOINTMENT_STATES.ChoKham,
    );

    useEffect(() => {
        setAppointmentState(APPOINTMENT_STATES.ChoKham);
    }, []);

    return (
        <CardWrapper>
            <CardCurrentClient>
                <Row>
                    <Label>Đang gọi:</Label>
                    <Value>10 (khách)</Value>
                </Row>

                <Row>
                    <Label>CCCD:</Label>
                    <Value>10 (khách)</Value>
                </Row>
            </CardCurrentClient>
            <CardCallState>
                <StateColumn>Chờ khám</StateColumn>
                <StateColumn>Chờ KL</StateColumn>
                <StateColumn>Quá lượt</StateColumn>
            </CardCallState>

            <CallClientCard state={appointmentState} />
        </CardWrapper>
    );
};

export default CommonCallClientCard;
