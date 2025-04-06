"use client";
import { Paper, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { setCookieFunction } from "../../utils/cookies";

function LoginPage({ setIsLoggedIn }) {
    const [password, setPassword] = useState(null);
    const [invalidPw, setInvalidPw] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setPassword(value);
        setInvalidPw(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password == "") {
            setInvalidPw(true);
            return;
        }
        await fetch("/api/getPassword")
            .then((res) => res.json())
            .then(({ password: correctPassword }) => {
                console.log(
                    "trying to log in. correct password: ",
                    correctPassword
                );
                if (password === correctPassword) {
                    setCookieFunction("password", password, 2);
                    setIsLoggedIn(true);
                } else {
                    setInvalidPw(true);
                }
            })
            .catch((err) => console.error("Error fetching password:", err));
    };
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper
                elevation={3}
                style={{
                    padding: 20,
                    marginTop: 20,
                }}
            >
                <Typography varient="h1">Enter A Password</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label={invalidPw ? "Invalid Password" : "Password"}
                        name="password"
                        value={password || ""}
                        onChange={handleChange}
                        margin="normal"
                        required
                        error={invalidPw}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Enter
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default LoginPage;
