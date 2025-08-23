import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/backend/data.txt");

    await fs.writeFile(filePath, "");

    return new Response(
      JSON.stringify({
        message: "Data cleared successfully",
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