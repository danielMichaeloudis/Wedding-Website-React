export const metadata = {
    title: "Hope And Dan",
    description: "Website For Hope And Daniels Wedding",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
