import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import creds from "../../config/googleSheetsCreds.json";

export default async function handler(req, res) {
    try {
        const RSVPUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTxTSKovJqG9OHjO-Zolm-CHrvTbuIBUFFLAzK9coAc-qC47vf4TeP88JT11Bp0nNjzyII8kbMsEJy/pub?gid=35808886&single=true&output=csv";

        const serviceAccountAuth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const doc = new GoogleSpreadsheet(
            "1ONcYPOAiENUM9v9t3ed_uKTqwta3rliUoXkJJVtuvaY",
            serviceAccountAuth
        );
        let newRow = JSON.parse(req.body);
        newRow.attending = newRow.attending;
        await doc.loadInfo();
        const sheet = doc.sheetsById[35808886];
        const addedRow = await sheet.addRow({
            attending: newRow.attending,
            attendingOnlyAfternoon: newRow.attendingOnlyAfternoon,
            guests: newRow.guests,
            dietaryRequirements: newRow.dietaryRequirements,
            contactInfo: newRow.contactInfo,
            accommodations: newRow.accommodations,
            notes: newRow.notes,
        });
        sheet.saveUpdatedCells();
        res.status(200).json({});
    } catch (error) {
        console.error("Error fetching rsvp data:", error);
        res.status(500).json({ error: "Failed to fetch rsvp data" });
    }
}
