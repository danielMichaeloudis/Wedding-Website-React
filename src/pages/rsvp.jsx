"use client";
import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Checkbox,
    FormControlLabel,
    Paper,
    Card,
    CardContent,
} from "@mui/material";
import { useRouter } from "next/router";

const WeddingRSVP = () => {
    const [formData, setFormData] = useState({
        attending: false,
        attendingOnlyAfternoon: false,
        guests: "",
        dietaryRequirements: "",
        contactInfo: "",
        accommodations: "",
        notes: "",
    });
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        console.log("RSVP Data Submitted:", formData);
        const request = new Request("/api/insertRsvp", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        fetch(request)
            .then(
                () => {
                    console.log("sent rsvp data");
                    router.push("/sendRsvpRes");
                },
                (err) => {
                    console.error("failed to get rsvp data: ", err);
                    router.push("/sendRsvpRes?fail=true");
                }
            )
            .finally(() => {});
    };

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
                        RSVP
                    </Typography>
                    <Typography varient="h6" gutterBottom>
                        Please make sure each person named on an invitation is
                        named in a resonse. Additional guests only need
                        mentioning if they are attending
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="attending"
                                    checked={formData.attending}
                                    onChange={handleChange}
                                />
                            }
                            label="Will you be attending the wedding?"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="attendingOnlyAfternoon"
                                    checked={formData.attendingOnlyAfternoon}
                                    onChange={handleChange}
                                />
                            }
                            label="Will you be attending the afternoon ceremony?"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Names of attendees"
                            name="guests"
                            required
                            value={formData.guests}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Dietary requirements or allergies"
                            name="dietaryRequirements"
                            value={formData.dietaryRequirements}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Phone number or email address"
                            name="contactInfo"
                            required={formData.attending}
                            value={formData.contactInfo}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Special accommodations/accessibility requirements"
                            name="accommodations"
                            value={formData.accommodations}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Additional notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            multiline
                            rows={3}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 2 }}
                            loading={loading}
                        >
                            Submit RSVP
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default WeddingRSVP;
