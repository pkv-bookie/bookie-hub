import React from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import tw from "twin.macro";
import styled from "styled-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    ${tw`flex flex-col items-center min-h-screen bg-white w-full pt-14`};
`;

const SignInButton = styled.button`
    ${tw`w-full px-6 py-3 bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition mt-10`};
`;

// Component
const BookieHubSignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    const handleOnClickSignIn = () => {
        navigate("/");
    };

    return (
        <Container>
            <FormControl sx={{ m: 1, width: "80vw" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">
                    Tên đăng nhập
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-username"
                    type="text"
                    placeholder=""
                    label="Tên đăng nhập"
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: "80vw" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Mật khẩu
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword
                                        ? "hide the password"
                                        : "display the password"
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Mật khẩu"
                />
            </FormControl>

            <div className="w-full max-w-sm">
                <SignInButton onClick={handleOnClickSignIn}>
                    Đăng nhập
                </SignInButton>
            </div>
        </Container>
    );
};

export default BookieHubSignIn;
