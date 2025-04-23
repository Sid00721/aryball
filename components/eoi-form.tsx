"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { submitForm } from "@/app/actions"

export default function EOIForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    parentName: "",
    playerName: "",
    playerAge: "",
    email: "",
    phone: "",
    skillLevel: "",
    areasForImprovement: {
      shooting: false,
      dribbling: false,
      defense: false,
      fitness: false,
      other: false,
    },
    trainingType: "individual",
    message: "",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name === "consent") {
      setFormData((prev) => ({
        ...prev,
        consent: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        areasForImprovement: {
          ...prev.areasForImprovement,
          [name]: checked,
        },
      }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      skillLevel: value,
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      trainingType: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.parentName ||
      !formData.playerName ||
      !formData.playerAge ||
      !formData.email ||
      !formData.phone ||
      !formData.consent
    ) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields and accept the consent.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Format areas for improvement as a string
      const areasForImprovement = Object.entries(formData.areasForImprovement)
        .filter(([_, checked]) => checked)
        .map(([area]) => area)
        .join(", ")

      // Submit the form data to the server action
      const result = await submitForm({
        ...formData,
        areasForImprovement: areasForImprovement,
      })

      if (result.success) {
        toast({
          title: "Expression of Interest Submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
        })

        // Reset form
        setFormData({
          parentName: "",
          playerName: "",
          playerAge: "",
          email: "",
          phone: "",
          skillLevel: "",
          areasForImprovement: {
            shooting: false,
            dribbling: false,
            defense: false,
            fitness: false,
            other: false,
          },
          trainingType: "individual",
          message: "",
          consent: false,
        })
      } else {
        throw new Error(result.error || "Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Submission failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl border shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="parentName" className="text-gray-700 font-medium">
            Parent/Guardian Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Enter parent/guardian name"
            required
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="playerName" className="text-gray-700 font-medium">
            Player Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="playerName"
            name="playerName"
            value={formData.playerName}
            onChange={handleChange}
            placeholder="Enter player name"
            required
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="playerAge" className="text-gray-700 font-medium">
            Player Age / School Grade <span className="text-red-500">*</span>
          </Label>
          <Input
            id="playerAge"
            name="playerAge"
            value={formData.playerAge}
            onChange={handleChange}
            placeholder="e.g., 12 years / Grade 7"
            required
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="skillLevel" className="text-gray-700 font-medium">
            Current Skill Level
          </Label>
          <Select value={formData.skillLevel} onValueChange={handleSelectChange}>
            <SelectTrigger
              id="skillLevel"
              className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            >
              <SelectValue placeholder="Select skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
        <Label className="text-gray-700 font-medium">Main Areas for Improvement</Label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="shooting"
              checked={formData.areasForImprovement.shooting}
              onCheckedChange={(checked) => handleCheckboxChange("shooting", checked as boolean)}
              className="text-orange-500 focus:ring-orange-200"
            />
            <Label htmlFor="shooting" className="font-normal text-gray-700">
              Shooting
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="dribbling"
              checked={formData.areasForImprovement.dribbling}
              onCheckedChange={(checked) => handleCheckboxChange("dribbling", checked as boolean)}
              className="text-orange-500 focus:ring-orange-200"
            />
            <Label htmlFor="dribbling" className="font-normal text-gray-700">
              Dribbling
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="defense"
              checked={formData.areasForImprovement.defense}
              onCheckedChange={(checked) => handleCheckboxChange("defense", checked as boolean)}
              className="text-orange-500 focus:ring-orange-200"
            />
            <Label htmlFor="defense" className="font-normal text-gray-700">
              Defense
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="fitness"
              checked={formData.areasForImprovement.fitness}
              onCheckedChange={(checked) => handleCheckboxChange("fitness", checked as boolean)}
              className="text-orange-500 focus:ring-orange-200"
            />
            <Label htmlFor="fitness" className="font-normal text-gray-700">
              Fitness
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="other"
              checked={formData.areasForImprovement.other}
              onCheckedChange={(checked) => handleCheckboxChange("other", checked as boolean)}
              className="text-orange-500 focus:ring-orange-200"
            />
            <Label htmlFor="other" className="font-normal text-gray-700">
              Other
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
        <Label className="text-gray-700 font-medium">Preferred Training Type</Label>
        <RadioGroup value={formData.trainingType} onValueChange={handleRadioChange} className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" className="text-blue-600 focus:ring-blue-200" />
            <Label htmlFor="individual" className="font-normal text-gray-700">
              Individual
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small-group" id="small-group" className="text-blue-600 focus:ring-blue-200" />
            <Label htmlFor="small-group" className="font-normal text-gray-700">
              Small Group
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-700 font-medium">
          Brief Message/Goals
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share any specific goals or information about what you hope to achieve"
          rows={4}
          className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        />
      </div>

      <div className="flex items-start space-x-2 pt-2 bg-blue-50 p-4 rounded-lg">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => handleCheckboxChange("consent", checked as boolean)}
          required
          className="text-blue-600 focus:ring-blue-200 mt-1"
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="consent" className="font-normal text-gray-700">
            I agree to be contacted regarding basketball coaching services <span className="text-red-500">*</span>
          </Label>
          <p className="text-xs text-gray-500">
            Your information will only be used to contact you about basketball coaching opportunities.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </div>
        ) : (
          "Submit Expression of Interest"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        <span className="text-red-500">*</span> Required fields
      </p>
    </form>
  )
}
