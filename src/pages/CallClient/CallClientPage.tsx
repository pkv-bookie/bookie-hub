import { DefaultHeader } from "@components";
import { CommonCallClientCard } from "@components/call-client";
import PageLayout from "@components/layout/PageLayout";
import React from "react";

const CallClientPage: React.FunctionComponent = () => (
    <PageLayout
        id="call-client-page"
        customHeader={<DefaultHeader title="Gọi số" back />}
    >
        <CommonCallClientCard />
    </PageLayout>
);

export default CallClientPage;
