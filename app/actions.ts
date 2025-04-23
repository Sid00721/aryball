"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Your email address where you want to receive form submissions
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "your-email@example.com"

// Define the type for form data
type FormData = {
  parentName: string
  playerName: string
  playerAge: string
  email: string
  phone: string
  skillLevel: string
  areasForImprovement: string
  trainingType: string
  message: string
  consent: boolean
}

export async function submitForm(data: FormData) {
  try {
    // Validate the data
    if (!data.parentName || !data.playerName || !data.playerAge || !data.email || !data.phone) {
      return { success: false, error: "Missing required fields" }
    }

    // Format the email content
    const emailContent = `
      <h1>New Basketball Coaching Expression of Interest</h1>
      
      <h2>Contact Information</h2>
      <p><strong>Parent/Guardian:</strong> ${data.parentName}</p>
      <p><strong>Player Name:</strong> ${data.playerName}</p>
      <p><strong>Player Age/Grade:</strong> ${data.playerAge}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      
      <h2>Basketball Information</h2>
      <p><strong>Skill Level:</strong> ${data.skillLevel || "Not specified"}</p>
      <p><strong>Areas for Improvement:</strong> ${data.areasForImprovement || "None selected"}</p>
      <p><strong>Preferred Training Type:</strong> ${data.trainingType}</p>
      
      <h2>Message</h2>
      <p>${data.message || "No message provided"}</p>
    `

    // If Resend API key is not available, log the data and return success
    // This is useful for development and testing
    if (!process.env.RESEND_API_KEY) {
      console.log("RESEND_API_KEY not found. Would have sent email with:", {
        to: RECIPIENT_EMAIL,
        subject: `Basketball Coaching EOI: ${data.playerName}`,
        html: emailContent,
      })
      return { success: true }
    }

    // Send the email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Basketball Coaching EOI <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      subject: `Basketball Coaching EOI: ${data.playerName}`,
      html: emailContent,
      reply_to: data.email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email" }
    }

    // Store the submission in a database (optional)
    // This would be implemented if you want to store submissions in a database

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
