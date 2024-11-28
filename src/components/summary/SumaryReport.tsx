import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Divider = styled.div`
    ${tw`flex items-center w-full max-w-sm my-3 px-1`};
    hr {
        ${tw`flex-grow border-gray-300`};
    }
    span {
        ${tw`px-3 text-gray-500`};
    }
`;

const CardWrapper = styled.div`
    ${tw`bg-white p-4 max-w-sm w-full mt-2 p-4`};
`;

const Header = styled.div`
    ${tw`flex justify-between items-center mb-4`};
`;

const Title = styled.h2`
    ${tw`font-bold text-lg`};
`;

const Timestamp = styled.span`
    ${tw`text-sm text-gray-500 flex flex-row`};
`;

const ReportInfo = styled.div`
    ${tw`shadow-lg rounded-lg p-6 bg-white`}
`;

const Row = styled.div`
    ${tw`flex justify-between`};
    margin-bottom: 0.75rem;
`;

const Label = styled.span`
    ${tw`text-gray-700`};
`;

const Value = styled.span`
    ${tw`text-blue-500 font-semibold`};
`;

const SumaryReport: React.FunctionComponent = () => (
    <CardWrapper>
        {/* Header */}
        <Header>
            <Title>Báo cáo</Title>
            <Timestamp>
                <p>13/11/2024 - 08:42:00 &nbsp; </p>
                <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 10.3943C2 10.6866 2.01983 10.9779 2.0595 11.2683C2.09933 11.5588 2.16733 11.845 2.2635 12.127C2.3275 12.3398 2.32075 12.5433 2.24325 12.7375C2.16575 12.9317 2.034 13.0711 1.848 13.1557C1.65183 13.2506 1.45667 13.2583 1.2625 13.1788C1.06833 13.0993 0.939167 12.9532 0.875 12.7405C0.741667 12.3635 0.645833 11.9766 0.5875 11.5798C0.529167 11.1831 0.5 10.7879 0.5 10.3943C0.5 8.23142 1.25258 6.39075 2.75775 4.87225C4.26292 3.35358 6.09367 2.59425 8.25 2.59425H9.03075L7.70775 1.27125C7.56925 1.13275 7.49842 0.958667 7.49525 0.749001C7.49208 0.539501 7.56292 0.36225 7.70775 0.21725C7.85258 0.0724167 8.02817 0 8.2345 0C8.441 0 8.61667 0.0724167 8.7615 0.21725L11.2557 2.7115C11.4366 2.89233 11.527 3.10325 11.527 3.34425C11.527 3.58525 11.4366 3.79617 11.2557 3.977L8.7615 6.47125C8.623 6.60958 8.449 6.68042 8.2395 6.68375C8.02983 6.68692 7.85258 6.61608 7.70775 6.47125C7.56292 6.32625 7.4905 6.15058 7.4905 5.94425C7.4905 5.73792 7.56292 5.56225 7.70775 5.41725L9.03075 4.09425H8.25C6.51283 4.09425 5.03683 4.70575 3.822 5.92875C2.60733 7.15192 2 8.64042 2 10.3943ZM14.5 10.2943C14.5 10.0019 14.4802 9.71058 14.4405 9.42025C14.4007 9.12975 14.3327 8.8435 14.2365 8.5615C14.1725 8.34867 14.1793 8.14517 14.2568 7.951C14.3343 7.75683 14.466 7.61742 14.652 7.53275C14.8482 7.43792 15.0417 7.43025 15.2327 7.50975C15.4237 7.58925 15.5512 7.73533 15.6152 7.948C15.7486 8.325 15.8461 8.71192 15.9078 9.10875C15.9692 9.50542 16 9.90058 16 10.2943C16 12.4571 15.2474 14.2978 13.7423 15.8163C12.2371 17.3349 10.4063 18.0943 8.25 18.0943H7.46925L8.79225 19.4172C8.93075 19.5557 9.00158 19.7298 9.00475 19.9395C9.00792 20.149 8.93708 20.3263 8.79225 20.4713C8.64742 20.6161 8.47183 20.6885 8.2655 20.6885C8.059 20.6885 7.88333 20.6161 7.7385 20.4713L5.24425 17.977C5.06342 17.7962 4.973 17.5853 4.973 17.3443C4.973 17.1033 5.06342 16.8923 5.24425 16.7115L7.7385 14.2173C7.877 14.0789 8.051 14.0081 8.2605 14.0048C8.47017 14.0016 8.64742 14.0724 8.79225 14.2173C8.93708 14.3623 9.0095 14.5379 9.0095 14.7443C9.0095 14.9506 8.93708 15.1262 8.79225 15.2712L7.46925 16.5943H8.25C9.98717 16.5943 11.4632 15.9827 12.678 14.7598C13.8927 13.5366 14.5 12.0481 14.5 10.2943Z"
                        fill="#272D34"
                    />
                </svg>
            </Timestamp>
        </Header>
        {/* Content */}
        <ReportInfo>
            <Row>
                <Label>Số khách hàng:</Label>
                <Value>2.000 (khách)</Value>
            </Row>
            <Row>
                <Label>Số khách hàng mới:</Label>
                <Value>10 (khách)</Value>
            </Row>
            <Divider>
                <hr />
            </Divider>
            <Row>
                <Label>Lịch hẹn:</Label>
                <Value>295 (lịch hẹn)</Value>
            </Row>
            <Divider>
                <hr />
            </Divider>
            <Row>
                <Label>Chờ khám:</Label>
                <Value>10 (khách)</Value>
            </Row>
            <Row>
                <Label>Chờ kết luận:</Label>
                <Value>10 (khách)</Value>
            </Row>
            <Divider>
                <hr />
            </Divider>
            <Row>
                <Label>Tin nhắn chờ:</Label>
                <Value>30 (tin nhắn chờ)</Value>
            </Row>
        </ReportInfo>
    </CardWrapper>
);

export default SumaryReport;
