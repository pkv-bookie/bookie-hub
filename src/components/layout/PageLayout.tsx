import React, { ReactNode, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { Page } from "zmp-ui";
import { PageProps } from "zmp-ui/page";
import tw from "twin.macro";
import { DefaultHeader } from "@components/layout";
import { Navigation } from "@components/navibar/navigation";

interface PropsType extends PageProps {
    children?: ReactNode;
    title?: string;
    customHeader?: ReactNode;
    name?: string;
    restoreScroll?: boolean;
    restoreScrollBackOnly?: boolean;
    bg?: string;
    showNavigationBar?: boolean;
}

const StyledPage = styled(Page)`
    ${tw`bg-[#EAEBED] flex flex-col h-screen`}
    padding: calc(var(--zaui-safe-area-inset-top, 0px) + 48px) 0 var(--zaui-safe-area-inset-bottom) 0;
    ${({ $bg }: { $bg?: string }) => {
        if (!$bg) {
            return "";
        }
        return {
            backgroundColor: $bg,
        };
    }}
`;

const Footer = styled.footer`
    ${tw`w-full bg-white`}
    position: fixed;
    bottom: 0;
    z-index: 10;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.05);
`;

const PageLayout = React.forwardRef<HTMLDivElement, PropsType>((props, ref) => {
    const {
        title,
        children,
        customHeader,
        restoreScrollBackOnly = true,
        restoreScroll,
        bg,
        showNavigationBar = false,
        ...rest
    } = props;
    const pageRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => pageRef.current as HTMLDivElement);

    return (
        <StyledPage
            {...rest}
            restoreScroll={restoreScroll}
            restoreScrollOnBack={restoreScrollBackOnly}
            ref={pageRef}
            $bg={bg}
        >
            {customHeader || <DefaultHeader title={title} back />}
            <div
                className="flex-1 overflow-auto bg-white"
                style={{ paddingBottom: showNavigationBar ? 50 : 0 }}
            >
                {children}
            </div>
            {showNavigationBar && (
                <Footer>
                    <Navigation />
                </Footer>
            )}
        </StyledPage>
    );
});

export default PageLayout;
