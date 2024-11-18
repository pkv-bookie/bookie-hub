import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "@assets/logo.png";

export interface HomeHeaderProps {
    title: string;
}

const HeaderContainer = styled.div`
    ${tw`flex flex-row bg-main text-white items-center fixed top-0 left-0 w-full px-4 h-[calc(48px + var(--zaui-safe-area-inset-top, 0px))]`};
    padding-top: var(--zaui-safe-area-inset-top);
    z-index: 1;
    background: white;
    color: #0e6ac8;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoWrapper = styled.div`
    width: 180px;
    height: 24px;
    position: relative;
    margin-right: 8px;
`;

const HomeHeader: FC<HomeHeaderProps> = props => {
    const { title } = props;
    return (
        <HeaderContainer>
            <LogoWrapper>
                <img src={Logo} alt={title} />
            </LogoWrapper>
        </HeaderContainer>
    );
};

export default HomeHeader;
