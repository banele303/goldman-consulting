import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from 'lucide-react'

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Here you would typically handle the form submission
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl border-2 border-blue-700 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h2>
        
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input 
            id="name"
            type="text" 
            placeholder="Your Name" 
            required 
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="Your Email" 
            required 
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">Phone</Label>
          <Input 
            id="phone"
            type="tel" 
            placeholder="Your Phone" 
            required 
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">Message</Label>
          <Textarea 
            id="message"
            placeholder="Your Message" 
            rows={4} 
            required 
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              Sending...
              <svg className="animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </span>
          )}
        </Button>
      </form>
    </div>
  )
}