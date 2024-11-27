import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { scanQRCode } from "zmp-sdk";

const Container = styled.div`
    ${tw`flex flex-col items-center justify-center min-h-screen bg-white w-full`};
`;

const Title = styled.h2`
    ${tw`text-xl font-semibold text-gray-800 mb-8`};
`;

const InputField = styled.input`
    ${tw`w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`};
`;

const Divider = styled.div`
    ${tw`flex items-center w-full max-w-sm my-6`};
    hr {
        ${tw`flex-grow border-gray-300`};
    }
    span {
        ${tw`px-3 text-gray-500`};
    }
`;

const QRButton = styled.button`
    ${tw`w-14 h-14 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-lg mb-2`};
`;

const QRText = styled.span`
    ${tw`text-gray-500`};
`;

const ContinueButton = styled.button`
    ${tw`w-full px-6 py-3 bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition mt-10`};
`;

const HomeLogin: FC = () => {
    const navigate = useNavigate();
    const handleOnClickContinue = () => {
        navigate("/");
    };
    const handleOnclickScanQR = () => {
        scanQRCode({
            success: res => {
                console.log(res.content);
            },
            fail: err => {
                console.log(err);
            },
        });
    };

    return (
        <Container>
            {/* Title */}
            <Title>ĐĂNG NHẬP</Title>

            {/* Input Field */}
            <div className="w-full">
                <InputField placeholder="Nhập mã CSYT" />
            </div>

            {/* Divider */}
            <Divider>
                <hr />
                <span>hoặc</span>
                <hr />
            </Divider>

            {/* QR Code Section */}
            <QRButton>
                <svg
                    width="40"
                    height="32"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.7276 18H18.7276C19.258 18 19.7667 17.7893 20.1418 17.4142C20.5169 17.0391 20.7276 16.5304 20.7276 16V13C20.7276 12.7348 20.833 12.4804 21.0205 12.2929C21.208 12.1054 21.4624 12 21.7276 12C21.9928 12 22.2472 12.1054 22.4347 12.2929C22.6222 12.4804 22.7276 12.7348 22.7276 13V16C22.7276 17.0609 22.3062 18.0783 21.556 18.8284C20.8059 19.5786 19.7885 20 18.7276 20H6.7276C5.66673 20 4.64932 19.5786 3.89917 18.8284C3.14903 18.0783 2.7276 17.0609 2.7276 16V13C2.7276 12.7348 2.83296 12.4804 3.02049 12.2929C3.20803 12.1054 3.46238 12 3.7276 12C3.99282 12 4.24717 12.1054 4.43471 12.2929C4.62224 12.4804 4.7276 12.7348 4.7276 13V16C4.7276 16.5304 4.93831 17.0391 5.31339 17.4142C5.68846 17.7893 6.19717 18 6.7276 18H9.7276C9.99282 18 10.2472 18.1054 10.4347 18.2929C10.6222 18.4804 10.7276 18.7348 10.7276 19C10.7276 19.2652 10.6222 19.5196 10.4347 19.7071C10.2472 19.8946 9.99282 20 9.7276 20H15.7276C15.4624 20 15.208 19.8946 15.0205 19.7071C14.833 19.5196 14.7276 19.2652 14.7276 19C14.7276 18.7348 14.833 18.4804 15.0205 18.2929C15.208 18.1054 15.4624 18 15.7276 18ZM4.7276 7C4.7276 7.26522 4.62224 7.51957 4.43471 7.70711C4.24717 7.89464 3.99282 8 3.7276 8C3.46238 8 3.20803 7.89464 3.02049 7.70711C2.83296 7.51957 2.7276 7.26522 2.7276 7V4C2.7276 2.93913 3.14903 1.92172 3.89917 1.17157C4.64932 0.421427 5.66673 0 6.7276 0L9.7276 0C9.99282 0 10.2472 0.105357 10.4347 0.292893C10.6222 0.48043 10.7276 0.734784 10.7276 1C10.7276 1.26522 10.6222 1.51957 10.4347 1.70711C10.2472 1.89464 9.99282 2 9.7276 2H6.7276C6.19717 2 5.68846 2.21071 5.31339 2.58579C4.93831 2.96086 4.7276 3.46957 4.7276 4V7ZM20.7276 7V4C20.7276 3.46957 20.5169 2.96086 20.1418 2.58579C19.7667 2.21071 19.258 2 18.7276 2H15.7276C15.4624 2 15.208 1.89464 15.0205 1.70711C14.833 1.51957 14.7276 1.26522 14.7276 1C14.7276 0.734784 14.833 0.48043 15.0205 0.292893C15.208 0.105357 15.4624 0 15.7276 0L18.7276 0C19.7885 0 20.8059 0.421427 21.556 1.17157C22.3062 1.92172 22.7276 2.93913 22.7276 4V7C22.7276 7.26522 22.6222 7.51957 22.4347 7.70711C22.2472 7.89464 21.9928 8 21.7276 8C21.4624 8 21.208 7.89464 21.0205 7.70711C20.833 7.51957 20.7276 7.26522 20.7276 7Z"
                        fill="#808186"
                    />
                    <path
                        d="M1.5 9.95061H23.5"
                        stroke="#808186"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </QRButton>
            <QRText onClick={handleOnclickScanQR}>Quét mã QR</QRText>

            {/* Continue Button */}
            <div className="w-full max-w-sm">
                <ContinueButton onClick={handleOnClickContinue}>
                    Tiếp tục
                </ContinueButton>
            </div>
        </Container>
    );
};

export default HomeLogin;
