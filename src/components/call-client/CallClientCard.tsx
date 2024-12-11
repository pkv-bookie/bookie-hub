import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

const CardWrapper = styled.div`
    ${tw`bg-white mt-2 py-4 px-2 w-full flex-1 rounded-lg shadow shadow-lg`};
    box-shadow: 0px 1px 20px 0px #0000001a;
`;

const AppointmentCardWrapper = styled.div`
    ${tw`px-2 py-1`}
`;

const ActionButtonContainer = styled.div`
    ${tw`flex justify-end p-2`}
`;

const ActionButtonDiv = styled.div<{
    btnType: "call" | "done" | "close" | "rotate";
}>`
    ${tw`mx-2 p-2 border rounded-lg`};
    background-color: ${({ btnType }) => {
        switch (btnType) {
            case "call":
                return "#F7EFDC"; // Màu xanh
            case "done":
                return "#DEF7DC"; // Màu xám
            case "close":
                return "#FFE4E4"; // Màu xanh lá
            case "rotate":
                return "#ECF7FF"; // Màu đỏ
            default:
                return "transparent"; // Mặc định: không có màu nền
        }
    }};
`;

const DivSTTName = styled.div`
    ${tw`font-bold text-xl`}
`;

const DividerDiv = styled.div`
    ${tw`h-px bg-gray-300 my-4`}
`;

const CallClientCard: FC<{
    state?: string;
}> = props => {
    const { state } = props;
    const [lstAppointmentByState, setLstAppointmentByState] = useState([
        2, 3, 1,
    ]);

    useEffect(() => {
        setLstAppointmentByState([3, 2, 4, 1]);
    }, []);

    return (
        <CardWrapper>
            <div>{state} </div>
            {lstAppointmentByState.length > 0 &&
                lstAppointmentByState.map((appointment, index) => (
                    <AppointmentCardWrapper>
                        <div>{appointment}</div>
                        <DivSTTName>STT - Ho ten</DivSTTName>
                        <div>Gioi tinh - NamSinh(xx tuoi)</div>
                        <div>GioKham: hh gio MM phut </div>
                        <ActionButtonContainer>
                            <ActionButtonDiv btnType="call">
                                {" "}
                                <VolumeUpIcon />{" "}
                            </ActionButtonDiv>
                            <ActionButtonDiv btnType="done">
                                {" "}
                                <CheckIcon />{" "}
                            </ActionButtonDiv>
                            <ActionButtonDiv btnType="close">
                                {" "}
                                <CloseIcon />{" "}
                            </ActionButtonDiv>
                            <ActionButtonDiv btnType="rotate">
                                {" "}
                                <RotateLeftIcon />{" "}
                            </ActionButtonDiv>
                        </ActionButtonContainer>
                        {index < lstAppointmentByState.length - 1 ? (
                            <DividerDiv />
                        ) : (
                            <> </>
                        )}
                    </AppointmentCardWrapper>
                ))}
        </CardWrapper>
    );
};

export default CallClientCard;
