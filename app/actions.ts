"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

// This function only validates the form data but doesn't send emails
export async function validateContactForm(formData: FormData) {
  // Validate form data
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    return {
      success: false,
      message: "Please check your inputs.",
      errors: result.error.flatten().fieldErrors,
    }
  }

  // If validation passes, return success
  return {
    success: true,
    message: "Validation successful",
  }
}
