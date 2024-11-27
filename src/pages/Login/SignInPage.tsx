import { DefaultHeader } from "@components";
import PageLayout from "@components/layout/PageLayout";
import { BookieHubSignIn } from "@components/login";
import React from "react";

const SignInPage: React.FunctionComponent = () => (
    <PageLayout
        id="sign-in-page"
        customHeader={<DefaultHeader title="Đăng nhập" back />}
    >
        <BookieHubSignIn />
    </PageLayout>
);

export default SignInPage;
