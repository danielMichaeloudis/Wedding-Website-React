import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import {
    Box,
    CircularProgress,
    createTheme,
    Paper,
    ThemeProvider,
} from "@mui/material";
import { useRouter } from "next/router";
import { getCookie } from "../utils/cookies";
import LoginPage from "./login/login";
import "./App.css";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1b3247",
            paper: "#1b3247",
        },
        text: {
            primary: "#5c7892",
        },
    },
});

function MyApp({ Component, pageProps }) {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const router = useRouter();

    async function checkPasswordCookie() {
        const pwCookie = getCookie("password");
        await fetch("/api/getPassword")
            .then((res) => res.json())
            .then(({ password: correctPassword }) => {
                console.log("trying to log in with cookiepw: ", pwCookie);
                if (pwCookie === correctPassword) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch((err) => {
                console.error("Error fetching password:", err);
                setIsLoggedIn(false);
            });
    }

    useEffect(() => {
        checkPasswordCookie();
    }, []);

    if (isLoggedIn == false) return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
    if (isLoggedIn == null)
        return (
            <CircularProgress
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, calc(-50% - 28px))",
                }}
            />
        );
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    //  width: "100%",
                    height: "100%",
                    padding: "10px",
                    background: "rgba(0, 0, 0, 0)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        zIndex: -1,
                        position: "absolute",
                        top: 0,
                        right: 0,
                        minWidth: "950px",
                        minHeight: "1167px",
                        height: "100%",
                        m: 0,
                        p: 0,
                        backgroundImage: "url('/Hope__Dannn_bg_right.png')",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundOrigin: "border-box",
                        display: { xs: "none", md: "block" },
                    }}
                />
                <Header />
                <Component {...pageProps} />
                <Box
                    sx={{
                        zIndex: -1,
                        position: "absolute",
                        left: 0,
                        minWidth: "950px",
                        minHeight: "1167px",
                        m: 0,
                        p: 0,
                        backgroundImage: "url('/Hope__Dannn_bg_left.png')",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundOrigin: "border-box",
                        display: { xs: "none", md: "block" },
                    }}
                />
            </Box>
        </ThemeProvider>
    );
}

export default MyApp;
