import { Button, Paper, Popper, Tooltip, Typography } from "@mui/material";
import { setCookieFunction } from "../utils/cookies";

export default function musicPage() {
    const isSecure = window.isSecureContext;
    const handleClick = () => {
        if (true) {
            return;
        }
        fetch("/api/postMusicReq")
            .then((res) => res.json())
            .then((c) => {
                let cookie = JSON.parse(c);
                console.log("cookie: ", cookie);
                //let cookieNV = ;
                let cookieNV = cookie.cookie.split("=");
                let name = cookieNV[0];
                let val = cookieNV[1];
                console.log("name, val = ", name, val);
                setCookieFunction(name, val, 5, ".weperforms.co.uk", true);
            });
    };
    return (
        <Paper sx={{ mt: 6, p: 3, maxWidth: { md: "25vw", xs: "95vw" } }}>
            <Tooltip
                arrow
                title={isSecure ? "Click To Copy" : ""}
                onClick={() => {
                    if (isSecure) {
                        navigator.clipboard.writeText("hwl89bt");
                    } else {
                        console.error("Cannot Copy. Please Use HTTPS");
                    }
                }}
            >
                <Button variant="outlined">hwl89bt</Button>
            </Tooltip>
            <Typography sx={{ m: 3 }}>
                You can go to this website to request music to be played in the
                evening. You will need the code above to get in.
            </Typography>
            <Button
                variant="outlined"
                href="https://weperforms.co.uk/requests.asp?djidnumber=12394"
                target="_blank"
                onClick={handleClick}
            >
                Continue to Website
            </Button>
        </Paper>
    );
}
