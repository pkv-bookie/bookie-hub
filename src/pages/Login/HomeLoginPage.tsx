import { HomeHeader } from "@components";
import { HomeLogin } from "@components/login";
import React from "react";
import { Box } from "zmp-ui";

const HomeLoginPage: React.FunctionComponent = () => (
    <Box>
        <HomeHeader title="Bookie" />
        <HomeLogin />
    </Box>
);

export default HomeLoginPage;
