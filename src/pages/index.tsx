import React from "react";
import { Route } from "react-router-dom";
import { AnimationRoutes, Box, ZMPRouter } from "zmp-ui";

import {
    FeedbackPage,
    FeedbackDetailPage,
    CreateFeedbackPage,
} from "./Feedback";
import { GuidelinesPage } from "./Guidelines";
import { HomePage } from "./Home";
import { InformationGuidePage } from "./InformationGuide";
import { CreateScheduleAppointmentPage } from "./CreateScheduleAppointment";
import { AppointmentScheduleResultPage } from "./AppointmentScheduleResult";
import { SearchPage } from "./Search";
import { ProfilePage } from "./Profile";
import HomeLoginPage from "./Login/HomeLoginPage";
import SignInPage from "./Login/SignInPage";
import { CallClientPage } from "./CallClient";

const Routes: React.FC = () => (
    <ZMPRouter>
        <Box className="flex-1 flex flex-col overflow-hidden">
            <AnimationRoutes>
                <Route path="/home-login" element={<HomeLoginPage />} />
                <Route path="/sign-in" element={<SignInPage />} />

                <Route path="/call-client" element={<CallClientPage />} />

                <Route path="/" element={<HomePage />} />
                <Route path="/guidelines" element={<GuidelinesPage />} />

                <Route path="/feedbacks" element={<FeedbackPage />} />
                <Route path="/feedbacks/:id" element={<FeedbackDetailPage />} />
                <Route
                    path="/create-feedback"
                    element={<CreateFeedbackPage />}
                />
                <Route
                    path="/create-schedule-appointment"
                    element={<CreateScheduleAppointmentPage />}
                />
                <Route
                    path="/schedule-appointment-result"
                    element={<AppointmentScheduleResultPage />}
                />
                <Route
                    path="/information-guide"
                    element={<InformationGuidePage />}
                />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </AnimationRoutes>
        </Box>
    </ZMPRouter>
);

export default Routes;
