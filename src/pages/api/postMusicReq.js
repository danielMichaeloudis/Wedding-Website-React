export default async function handler(req, res) {
    console.log("aaaaa");
    const request = new Request("https://weperforms.co.uk/requests.asp", {
        method: "POST",
        body: JSON.stringify({
            djidnumber: "12394",
            day: "15",
            month: "5",
            year: "2025",
            password: "hwl89bt",
        }),
    });
    fetch(request).then(
        (resp) => {
            console.log("res: ", resp);
            console.log("H: ", resp.headers.get("set-cookie"));
            const cookie = resp.headers.get("set-cookie");
            res.status(resp.status).json(JSON.stringify({ cookie }));
        },
        (err) => {
            console.error(err);
        }
    );
}
