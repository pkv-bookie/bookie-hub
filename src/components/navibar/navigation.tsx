import { MenuItem } from "@interfaces/menu.interface";
import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
// import { useVirtualKeyboardVisible } from "src/hooks";
import { BottomNavigation, Icon, useNavigate } from "zmp-ui";

const tabs: Record<string, MenuItem> = {
    "/": {
        label: "Trang chủ",
        icon: <Icon icon="zi-home" />,
    },
    "/treatment": {
        label: "Lịch hẹn",
        icon: <Icon icon="zi-calendar" />,
    },
    "/service": {
        label: "CSKH",
        icon: <Icon icon="zi-bubble-multiselect" />,
        className: "relative",
    },
    "/notification": {
        label: "Thông báo",
        icon: <Icon icon="zi-notif" />,
    },
    "/home-login": {
        label: "Cài đặt",
        icon: <Icon icon="zi-tune" />,
    },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category"];

export const Navigation: FC = () => {
    const [activeTab, setActiveTab] = useState<TabKeys>("/");
    // // const keyboardVisible = useVirtualKeyboardVisible();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab(location.pathname);
        }
    }, [location]);

    // const noBottomNav = useMemo(() => {
    //     return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
    // }, [location]);

    // // if (noBottomNav || keyboardVisible) {
    // //     return <></>;
    // // }
    // if (noBottomNav) {
    //     return <></>;
    // }

    return (
        <BottomNavigation
            id="footer"
            activeKey={activeTab}
            onChange={(key: TabKeys) => setActiveTab(key)}
            className="z-50"
        >
            {Object.keys(tabs).map((path: TabKeys) => (
                <BottomNavigation.Item
                    key={path}
                    className={tabs[path].className}
                    label={tabs[path].label}
                    icon={tabs[path].icon}
                    activeIcon={tabs[path].activeIcon}
                    onClick={() => navigate(path)}
                />
            ))}
        </BottomNavigation>
    );
};
