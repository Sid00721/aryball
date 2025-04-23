import { NextResponse } from "next/server"
import { submitForm } from "@/app/actions"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const result = await submitForm(data)

    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 })
    }
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
