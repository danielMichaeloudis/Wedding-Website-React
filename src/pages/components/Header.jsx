"use client";
import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Header() {
    const router = useRouter();
    const [value, setValue] = useState();
    const bulletPoint = "\u2022";

    useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    return (
        <Box
            sx={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mt: 5,
            }}
        >
            <Paper
                sx={{
                    top: 0,
                    width: { xs: "90vw", md: "75vw" },
                    backgroundColor: { xs: "", md: "rgba(0,0,0,0)" },
                }}
                elevation={0}
            >
                <Typography
                    component="h1"
                    sx={{
                        m: 0,
                        fontSize: { xs: 25, md: 60 },
                        color: "#5c7892",
                        fontFamily: "Lustria",
                    }}
                >
                    HOPE & DANIEL
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        mb: 2,
                        color: "#57718c",
                        fontSize: { xs: 15, md: 25 }, // Adjust font size for mobile
                        fontFamily: "Lustria",
                    }}
                >
                    15 MAY 2025 {bulletPoint} BOURNEMOUTH, DORSET
                </Typography>
                <Paper elevation={1}>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            router.push(newValue);
                        }}
                        sx={{
                            display: "flex",
                            justifyContent: { md: "space-between" },
                            paddingBottom: "env(safe-area-inset-bottom)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                        }}
                        showLabels
                    >
                        <BottomNavigationAction label="Home" value={"/"} />
                        <BottomNavigationAction
                            label="Getting There"
                            value={"/map"}
                        />

                        <BottomNavigationAction label="Menu" value={"/menu"} />

                        <BottomNavigationAction label="RSVP" value={"/rsvp"} />
                        <BottomNavigationAction
                            label="Music"
                            value={"/music"}
                        />
                    </BottomNavigation>
                </Paper>
            </Paper>
        </Box>
    );
}

export default Header;
