import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function HomePage() {
    return (
        <>
            <Box
                component="img"
                src="/cover_photo.jpg"
                sx={{
                    maxWidth: { xs: "80%", md: "35%" },
                    m: 4,
                    borderRadius: 5,
                }}
            ></Box>
        </>
    );
}

export default HomePage;
