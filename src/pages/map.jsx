"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
    Grid,
    Icon,
    Button,
    Paper,
    Typography,
    Box,
    Stack,
    Link,
} from "@mui/material";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
//import Link from "next/link";

const googleMapsLink =
    "https://www.google.co.uk/maps/place/Best+Western+Plus+The+Connaught+Hotel+and+Spa/@50.7174195,-1.8848205,19z/data=!4m9!3m8!1s0x4873a1b86af06547:0xc9a0aaffdfe042d7!5m2!4m1!1i2!8m2!3d50.7172811!4d-1.8853063!16s%2Fg%2F11f54z6bgj?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D";
const appleMapsLink =
    "https://maps.apple.com/?address=32+West+Hill+Road%2C+Bournemouth%2C+BH2+5PH%2C+England&auid=11879943295911631907&ll=50.7172996%2C-1.885373&lsp=9902&q=Connaught+Lodge";
const hotelLatLong = { lat: 50.71729, lng: -1.88544 };
const containerStyle = {
    width: "100%",
    minHeight: "400px",
    height: "50vh",
};

function MapPage() {
    return (
        <>
            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { md: "45vw", xs: "95vw" },
                }}
            >
                <Paper
                    sx={{
                        m: 2,
                        p: 2,
                        width: "100%",
                    }}
                    elevation={2}
                >
                    <LoadScript googleMapsApiKey="AIzaSyBTbysFYwdfconiq-tuogbGAUZfjfev-0A">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={hotelLatLong}
                            zoom={15}
                        >
                            <Marker position={hotelLatLong} />
                        </GoogleMap>
                    </LoadScript>
                    <Box
                        sx={{
                            width: "100%",
                            justifyContent: "center",
                            display: "flex",
                        }}
                    >
                        <Paper sx={{ m: 3, p: 4 }} elevation={3}>
                            <Typography>
                                Best Western Plus The Connaught Hotel and Spa
                            </Typography>
                            <Typography>30 West Hill Rd</Typography>
                            <Typography>Bournemouth</Typography>
                            <Typography>BH2 5PH</Typography>
                            <Typography>
                                What 3 Words:{" "}
                                <Link
                                    href="http://www.what3words.com/pens.become.public"
                                    target="_blank"
                                    style={{ colour: "#212b93" }}
                                >
                                    ///pens.become.public
                                </Link>
                            </Typography>
                        </Paper>
                    </Box>
                    <Grid container sx={{ justifyContent: "center" }}>
                        <Paper elevation={3} sx={{ m: 3 }}>
                            <Button sx={{ p: 1 }}>
                                <Link href={googleMapsLink} target="_blank">
                                    <Image
                                        src="/google-map-icon.svg"
                                        width="80"
                                        height="80"
                                        alt="Google Maps"
                                    />
                                </Link>
                            </Button>
                        </Paper>
                        <Paper elevation={3} sx={{ m: 3 }}>
                            <Button sx={{ p: 1 }}>
                                <Link href={appleMapsLink} target="_blank">
                                    <Image
                                        src="/AppleMaps_logo.svg"
                                        width="80"
                                        height="80"
                                        alt="Google Maps"
                                    />
                                </Link>
                            </Button>
                        </Paper>
                        <Paper elevation={3} sx={{ m: 3 }}>
                            <Button sx={{ p: 1 }}>
                                <Link
                                    href="http://www.what3words.com/pens.become.public"
                                    target="_blank"
                                >
                                    <Image
                                        src="/w3w_Symbol_RGB_Red.svg"
                                        width="80"
                                        height="80"
                                        alt="WhatThreeWords"
                                    />
                                </Link>
                            </Button>
                        </Paper>
                    </Grid>
                    <Box
                        sx={{
                            width: "100%",
                            justifyContent: "center",
                            display: "flex",
                        }}
                    >
                        <Paper sx={{ m: 3, p: 4 }} elevation={3}><Typography>The hotel car park can be used by anybody staying overnight at the hotel.</Typography><Typography>For anybody not staying overnight at the hotel, the nearest car park is the west hill car park, a five minute walk away</Typography></Paper>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default MapPage;
