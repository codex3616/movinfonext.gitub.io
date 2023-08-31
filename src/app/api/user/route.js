import connect from "@/utils/connect";
import UserData from "@/models/user";
import { NextResponse } from "next/server";

export default async function POST(req, res) {
  try {
    const body = await req.json();
    await connect();

    await UserData.create(body);

    return NextResponse.json(
      { message: "message sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.log(`error isqual = ${e}`);
    return NextResponse.json(
      { message: "server err please try again..." },
      {
        status: 500,
      }
    );
  }
}
