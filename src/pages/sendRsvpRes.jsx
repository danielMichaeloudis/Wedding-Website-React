import { Button, Paper, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function sendRsvpResPage() {
    let searchParams = useSearchParams();
    let router = useRouter();
    const failed = searchParams.get("fail");
    let message = failed
        ? "RSVP Failed to send. Please retry at a later date. Alternatively you can contact Daniel at dmichaeloudis@gmail.com to report the issue and manually rsvp. I'm sorry for any inconvenience caused"
        : "Rsvp succesfully sent. We hope to see you at the wedding :)";
    return (
        <Paper sx={{ mt: 6, maxWidth: "sm", p: 3 }}>
            <Typography sx={{ mb: 2 }}>{message}</Typography>
            <Button
                onClick={() => {
                    router.push("/");
                }}
            >
                Home
            </Button>
        </Paper>
    );
}
