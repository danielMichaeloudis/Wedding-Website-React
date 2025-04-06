import { Container, Typography, Card, CardContent } from "@mui/material";
export default function WeddingMenu() {
    return (
        <Container
            maxWidth="sm"
            sx={{
                mt: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card sx={{ p: 4, textAlign: "center" }} elevation={2}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Wedding Menu
                    </Typography>
                    <Typography variant="h6">Starter</Typography>
                    <Typography variant="body1" gutterBottom>
                        Confit tomato, mozzarella, rocket, balsamic vinegar (v)
                    </Typography>
                    <Typography variant="h6">Main</Typography>
                    <Typography variant="body1" gutterBottom>
                        Roasted chicken breast, wild mushroom, creamed potato,
                        savoy cabbage, and apple jus
                    </Typography>
                    <Typography variant="h6">Dessert</Typography>
                    <Typography variant="body1">
                        Triple chocolate brownie, vanilla ice cream
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
