"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { validateContactForm } from "../actions"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = {
  name?: string[]
  email?: string[]
  subject?: string[]
  message?: string[]
}

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error"
  message: string
  errors?: FormErrors
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSubmissionState({
      status: "submitting",
      message: "Sending your message...",
    })

    try {
      // First validate the form data on the server
      const validationResult = await validateContactForm(formData)

      if (!validationResult.success) {
        setSubmissionState({
          status: "error",
          message: validationResult.message,
          errors: validationResult.errors,
        })
        return
      }

      // If validation passes, send emails using EmailJS directly from the client
      // Send notification email to you
      const notificationResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_mv8qv8v",
          template_id: "template_xdtyybw",
          user_id: "7xtgIJAfkZboUxedW",
          template_params: {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
          },
        }),
      })

      if (!notificationResponse.ok) {
        throw new Error("Failed to send notification email")
      }

      // Send auto-reply to the user
      const autoReplyResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_mv8qv8v",
          template_id: "template_33rckdu",
          user_id: "7xtgIJAfkZboUxedW",
          template_params: {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
          },
        }),
      })

      // Even if auto-reply fails, we'll still show success if notification was sent
      setSubmissionState({
        status: "success",
        message: "Your message has been sent successfully! I'll get back to you soon.",
      })

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmissionState({
        status: "error",
        message: "Failed to send your message. Please try again later.",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              submissionState.errors?.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#006699] dark:focus:ring-[#4db8ff] dark:bg-gray-800 dark:text-white`}
            placeholder="Your Name"
            required
          />
          {submissionState.errors?.name && (
            <p className="mt-1 text-sm text-red-500">{submissionState.errors.name[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              submissionState.errors?.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#006699] dark:focus:ring-[#4db8ff] dark:bg-gray-800 dark:text-white`}
            placeholder="Your Email"
            required
          />
          {submissionState.errors?.email && (
            <p className="mt-1 text-sm text-red-500">{submissionState.errors.email[0]}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${
            submissionState.errors?.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#006699] dark:focus:ring-[#4db8ff] dark:bg-gray-800 dark:text-white`}
          placeholder="Subject"
          required
        />
        {submissionState.errors?.subject && (
          <p className="mt-1 text-sm text-red-500">{submissionState.errors.subject[0]}</p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border ${
            submissionState.errors?.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-[#006699] dark:focus:ring-[#4db8ff] dark:bg-gray-800 dark:text-white`}
          placeholder="Your Message"
          required
        ></textarea>
        {submissionState.errors?.message && (
          <p className="mt-1 text-sm text-red-500">{submissionState.errors.message[0]}</p>
        )}
      </div>

      {submissionState.status !== "idle" && (
        <div
          className={`p-3 rounded-md ${
            submissionState.status === "success"
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
              : submissionState.status === "error"
                ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
          }`}
        >
          {submissionState.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={submissionState.status === "submitting"}
        className="w-full bg-[#006699] hover:bg-[#005588] dark:bg-[#4db8ff] dark:text-gray-900 dark:hover:bg-[#7dd3fc] disabled:opacity-70"
      >
        {submissionState.status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
