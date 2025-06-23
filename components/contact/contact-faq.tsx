"use client"

// Import React hooks for state management and effects
import { useState, useEffect } from "react"
// Import Lucide React icons for UI elements
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
// Import UI components from shadcn/ui
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// TypeScript interface for FAQ item structure
interface FAQItem {
  id: number // Unique identifier
  question: string // FAQ question text
  answer: string // FAQ answer text
  category: string // Category for grouping
}

// Main ContactFAQ component export
export function ContactFAQ() {
  // State to track which FAQ item is currently expanded
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  // State to control component visibility for animations
  const [isVisible, setIsVisible] = useState(false)
  // State to track which category filter is active
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Effect to trigger entrance animations
  useEffect(() => {
    // Small delay for smooth entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true) // Make component visible
    }, 100)

    // Cleanup timer to prevent memory leaks
    return () => clearTimeout(timer)
  }, []) // Run once on component mount

  // Array of FAQ data
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does the USA Africa Chamber of Commerce provide?",
      answer:
        "We provide comprehensive business development services including trade facilitation, networking opportunities, market research, business matchmaking, investment guidance, and cultural exchange programs between the USA and African markets.",
      category: "services",
    },
    {
      id: 2,
      question: "How can I become a member of the Chamber?",
      answer:
        "Membership is open to businesses, organizations, and individuals interested in USA-Africa trade. You can apply online through our membership portal, attend one of our networking events, or contact our membership team directly for personalized assistance.",
      category: "membership",
    },
    {
      id: 3,
      question: "What is the Unity First Summit?",
      answer:
        "The Unity First Summit is our flagship annual event bringing together business leaders, government officials, and entrepreneurs from the USA and Africa. It features keynote speakers, panel discussions, networking sessions, and business matchmaking opportunities.",
      category: "events",
    },
    {
      id: 4,
      question: "Do you provide market research for African markets?",
      answer:
        "Yes, we offer comprehensive market research services covering various African markets. Our research includes market analysis, regulatory information, cultural insights, and business opportunity assessments tailored to your specific industry and interests.",
      category: "services",
    },
    {
      id: 5,
      question: "How can I register for upcoming events?",
      answer:
        "Event registration is available through our website events page. You can also subscribe to our newsletter for early access to event announcements and member discounts. Some events may require advance registration due to limited capacity.",
      category: "events",
    },
    {
      id: 6,
      question: "What are the membership benefits?",
      answer:
        "Members enjoy exclusive access to networking events, discounted event tickets, market research reports, business directory listings, trade mission opportunities, mentorship programs, and direct access to our business development team.",
      category: "membership",
    },
    {
      id: 7,
      question: "Do you assist with business partnerships in Africa?",
      answer:
        "We facilitate business partnerships through our extensive network of African business leaders and organizations. Our matchmaking services help connect USA businesses with reliable African partners based on industry, location, and business objectives.",
      category: "services",
    },
    {
      id: 8,
      question: "How can I contact your team for urgent matters?",
      answer:
        "For urgent business matters, you can call our emergency hotline at +1 (555) 999-HELP, available 24/7. For general inquiries, email us at info@usaafricachamber.org or call our main office during business hours.",
      category: "contact",
    },
  ]

  // Array of category filters
  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "services", name: "Services", icon: MessageCircle },
    { id: "membership", name: "Membership", icon: Phone },
    { id: "events", name: "Events", icon: Mail },
    { id: "contact", name: "Contact", icon: HelpCircle },
  ]

  // Function to toggle FAQ item expansion
  const toggleExpanded = (id: number) => {
    // If clicking the same item, collapse it; otherwise expand the new item
    setExpandedItem(expandedItem === id ? null : id)
  }

  // Function to filter FAQs by category
  const filteredFAQs =
    activeCategory === "all"
      ? faqData // Show all FAQs if 'all' is selected
      : faqData.filter((faq) => faq.category === activeCategory) // Filter by category

  // Component render function
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Responsive padding container */}
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-green-50/30 pointer-events-none" />
      {/* Main content container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Section header with animation */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, membership, and events.
          </p>
          {/* Decorative underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Category filter buttons */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Scrollable container for category buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {/* Map through categories to create filter buttons */}
            {categories.map((category) => {
              const IconComponent = category.icon // Extract icon component
              return (
                <Button
                  key={category.id} // Unique key for React
                  onClick={() => setActiveCategory(category.id)} // Set active category
                  variant={activeCategory === category.id ? "default" : "outline"} // Conditional styling
                  size="sm" // Small button size
                  className={`transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                      : "hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* FAQ items container */}
        <div className="space-y-4">
          {/* Map through filtered FAQs to create accordion items */}
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id} // Unique key for React
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`, // Staggered animation delay
              }}
            >
              {/* FAQ card component */}
              <Card
                className={`overflow-hidden border-0 shadow-lg transition-all duration-300 ${
                  expandedItem === faq.id
                    ? "shadow-2xl bg-gradient-to-r from-purple-50 to-blue-50"
                    : "hover:shadow-xl bg-white/80 backdrop-blur-sm"
                }`}
              >
                {/* Clickable question header */}
                <button
                  onClick={() => toggleExpanded(faq.id)} // Toggle expansion on click
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    {/* Question text */}
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        expandedItem === faq.id ? "text-purple-700" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Expand/collapse icon */}
                    <div
                      className={`ml-4 flex-shrink-0 transition-all duration-300 ${
                        expandedItem === faq.id ? "text-purple-600 rotate-180" : "text-gray-400"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Expandable answer content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    expandedItem === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <CardContent className="px-6 pb-6 pt-0">
                    {/* Answer text with enhanced styling */}
                    <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>

                    {/* Category badge */}
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Still have questions section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Call-to-action card */}
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl border-0">
            <CardContent className="p-8">
              {/* CTA heading */}
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              {/* CTA description */}
              <p className="text-lg mb-6 text-purple-100">
                Our team is here to help! Contact us directly for personalized assistance.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Email contact button */}
                <Button
                  onClick={() => (window.location.href = "mailto:info@usaafricachamber.org")}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>

                {/* Phone contact button */}
                <Button
                  onClick={() => (window.location.href = "tel:+15551234567")}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
