import React, { FC } from "react";
import { Header, Icon } from "zmp-ui";
import styled from "styled-components";
import tw from "twin.macro";

export interface DefaultHeaderProps {
    title?: string;
    back?: boolean;
}

const HeaderContainer = styled(Header)`
    ${tw`flex flex-row items-center bg-main fixed top-0 left-0 w-full text-white px-4 h-[calc(48px + var(--zaui-safe-area-inset-top, 0px))]`};
    z-index: 1;
    background: white;
    color: black;
    background-size: cover;
    background-position: center;
    .zaui-btn-icon {
        ${tw`text-black`}
    }
    .zaui-header-back-btn:active {
        background-color: transparent;
    }
    &:after {
        display: none;
    }
    .zaui-header-title {
        padding-right: 98px;
    }
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const DefaultHeader: FC<DefaultHeaderProps> = props => {
    const { title, back } = props;

    return (
        <HeaderContainer
            title={title}
            backIcon={<Icon icon="zi-chevron-left-header" />}
            showBackIcon={back}
        />
    );
};

export default DefaultHeader;
