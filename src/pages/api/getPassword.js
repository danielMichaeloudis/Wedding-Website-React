import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import creds from "../../config/googleSheetsCreds.json";

//const rsvpSheet = doc.sheetsById[35808886];

export default async function handler(req, res) {
    try {
        const serviceAccountAuth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const doc = new GoogleSpreadsheet(
            "1ONcYPOAiENUM9v9t3ed_uKTqwta3rliUoXkJJVtuvaY",
            serviceAccountAuth
        );
        await doc.loadInfo();
        const sheet = doc.sheetsById[0];
        const rows = await sheet.getRows();
        const pw = rows[0].get("Website Password:");
        res.status(200).json({ password: pw });
    } catch (error) {
        console.error("Error fetching password:", error);
        res.status(500).json({ error: "Failed to fetch password" });
    }
}
