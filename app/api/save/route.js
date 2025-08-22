import path, { join } from "path";
import { promises as fs } from "fs";

const filesDir = path.join(process.cwd(), "public/backend/files");

export async function POST(request, response) {
    try {
        const {
            name,
            email,
            phone,
            property,
            checkIn,
            checkOut,
            noOfGuest,
            message
        } = await request.json();

        const dataFilePath = path.join(process.cwd(), "public/backend/data.txt");

        const payload = {
            Name: name,
            Email: email,
            Phone: phone,
            ["Intrested Property"]: property,
            checkInDate: checkIn,
            checkOutDate: checkOut,
            noOfGuest: noOfGuest || "N/A",
            Message: message || "N/A",
            Timestamp: new Date().toISOString("GMT+0530 (India Standard Time)"),
        };

        if (!name || !email || !phone || !checkIn || !checkOut) {
            return new Response(
                JSON.stringify({
                    message: "All fields are required",
                    status: false,
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        const textContent = `${payload.Name},${payload.Email},${payload.Phone},${payload.["Intrested Property"]},${payload.checkInDate},${payload.checkOutDate},${payload.noOfGuest},${payload.Message},${payload.Timestamp}`;

        await fs.appendFile(dataFilePath, textContent + "\n", (err) => {
            if (err) {
                return new Response(
                    JSON.stringify({
                        message: "Failed to save data",
                        status: false,
                    }),
                    {
                        status: 500,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
            }
            //   res.send("Data saved");
        });

        sendWhatsApp(payload)
        return new Response(
            JSON.stringify({
                message: "Data saved successfully",

                status: true,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (e) {
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                status: false,
                error: e.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}


async function sendWhatsApp(data) {
    try {
        const { Name, checkInDate, checkOutDate, noOfGuest, Phone } = data;
        const var2 = `${Name}, ${checkInDate}, ${checkOutDate}, ${noOfGuest}`
        const payload = {
            "template": {
                "components": [
                    {
                        "type": "BODY",
                        "parameters": [
                            {
                                "text": data.["Intrested Property"],
                                "type": "text"
                            },
                            {
                                "text": var2,
                                "type": "text"
                            }
                        ]
                    }
                ],
                "name": "websiteinquiry",
                "language": {
                    "code": "en",
                    "policy": "deterministic"
                }
            },
            "to": "919680003399",
            "type": "template",
            "messaging_product": "whatsapp"
        }

        const customerPayload = {
            "template": {
                "components": [
                    {
                        "type": "BODY",
                        "parameters": [
                            {
                                "text": Name,
                                "type": "text"
                            },
                            {
                                "text": data.["Intrested Property"],
                                "type": "text"
                            },
                            {
                                "text": checkInDate,
                                "type": "text"
                            },
                            {
                                "text": checkOutDate,
                                "type": "text"
                            },
                            {
                                "text": noOfGuest,
                                "type": "text"
                            }
                        ]
                    }
                ],
                "name": "webinquiryresponse",
                "language": {
                    "code": "en",
                    "policy": "deterministic"
                }
            },
            "to": Phone,
            "type": "template",
            "messaging_product": "whatsapp"
        }


        const config = {
            headers: {
                key: process.env.WHATSAPP_KEY,
                wabaNumber: process.env.WHATSAPP_NUMBER,
                // "Content-Type": "application/json",
            },
        };

        const response = await axios.post(
            "https://api.celitix.com/wrapper/waba/message",
            payload,
            config
        );

        const [customer, admin] = await Promise.all([
            axios.post(
                "https://api.celitix.com/wrapper/waba/message",
                customerPayload,
                config
            );
        axios.post(
            "https://api.celitix.com/wrapper/waba/message",
            payload,
            config
        );
        ])

        if (Array.isArray(admin?.data?.messages) && admin?.data?.messages[0]?.message_status === "accepted" || Array.isArray(customer?.data?.messages) && customer?.data?.messages[0]?.message_status === "accepted") {
            return new Response(JSON.stringify({ status: true }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } else {
            return new Response(
                JSON.stringify({ status: false, message: response.data }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }
    }
    catch (e) {
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                status: false,
                error: e.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}