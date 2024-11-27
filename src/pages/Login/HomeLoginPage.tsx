import { BookieHubHeader } from "@components";
import PageLayout from "@components/layout/PageLayout";
import { HomeLogin } from "@components/login";
import React from "react";

const HomeLoginPage: React.FunctionComponent = () => (
    <PageLayout
        id="home-login-page"
        customHeader={<BookieHubHeader title="Đăng nhập" />}
    >
        <HomeLogin />
    </PageLayout>
);

export default HomeLoginPage;
