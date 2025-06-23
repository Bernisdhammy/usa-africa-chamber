"use client"

// Import React hooks for state management and lifecycle
import { useState, useEffect, useRef } from "react"
// Import Lucide React icons for UI elements
import { MapPin, Navigation, Maximize2, Minimize2 } from "lucide-react"
// Import UI components from shadcn/ui
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Main ContactMap component export
export function ContactMap() {
  // State to control map fullscreen mode
  const [isFullscreen, setIsFullscreen] = useState(false)
  // State to track component visibility for animations
  const [isVisible, setIsVisible] = useState(false)
  // State to manage loading state of the map
  const [isLoading, setIsLoading] = useState(true)
  // Ref to access the map container DOM element
  const mapRef = useRef<HTMLDivElement>(null)

  // Effect to trigger entrance animations
  useEffect(() => {
    // Delay to create smooth entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true) // Make component visible
      // Simulate map loading time
      setTimeout(() => {
        setIsLoading(false) // Remove loading state
      }, 1500)
    }, 200)

    // Cleanup timer to prevent memory leaks
    return () => clearTimeout(timer)
  }, []) // Run once on component mount

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen) // Toggle fullscreen state
  }

  // Function to handle directions button click
  const handleGetDirections = () => {
    // Open Google Maps with directions to our location
    const address = encodeURIComponent("1234 Business Avenue, Washington, DC 20001, USA")
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank")
  }

  // Component render function
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Responsive padding container */}
      {/* Background gradient for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-green-50/20 pointer-events-none" />
      {/* Main content container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Section header with animation */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Find Us Here
          </h2>
          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Washington, DC. Easy access by metro, car, or foot.
          </p>
          {/* Decorative underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Map container with conditional fullscreen styling */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${isFullscreen ? "fixed inset-4 z-50" : "relative"}`}
        >
          {/* Map card component */}
          <Card className={`overflow-hidden shadow-2xl border-0 ${isFullscreen ? "h-full" : "h-96 md:h-[500px]"}`}>
            <CardContent className="p-0 relative h-full">
              {/* Loading overlay while map loads */}
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center z-10">
                  {/* Loading spinner */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-blue-600 font-medium">Loading map...</p>
                  </div>
                </div>
              )}

              {/* Map controls overlay */}
              <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
                {/* Fullscreen toggle button */}
                <Button
                  onClick={toggleFullscreen} // Toggle fullscreen on click
                  size="sm" // Small button size
                  variant="secondary" // Secondary button style
                  className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-0"
                >
                  {/* Conditional icon based on fullscreen state */}
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>

                {/* Get directions button */}
                <Button
                  onClick={handleGetDirections} // Open directions on click
                  size="sm" // Small button size
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg border-0"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Directions
                </Button>
              </div>

              {/* Embedded Google Map iframe */}
              <iframe
                ref={mapRef} // Reference for potential future use
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0234567890123!2d-77.0368707!3d38.9071923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU0JzI2LjAiTiA3N8KwMDInMTIuNyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%" // Full width
                height="100%" // Full height
                style={{ border: 0 }} // Remove default border
                allowFullScreen // Allow fullscreen mode
                loading="lazy" // Lazy load for performance
                referrerPolicy="no-referrer-when-downgrade" // Security policy
                title="USA Africa Chamber of Commerce Location" // Accessibility title
                className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`} // Fade in when loaded
              />

              {/* Location info overlay */}
              <div className="absolute bottom-4 left-4 z-20">
                <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
                  <CardContent className="p-4">
                    {/* Location icon and address */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        {/* Office title */}
                        <h3 className="font-semibold text-gray-800 mb-1">USA Africa Chamber of Commerce</h3>
                        {/* Full address */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          1234 Business Avenue
                          <br />
                          Washington, DC 20001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional location information */}
        <div
          className={`mt-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Grid of location details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Parking information card */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Parking</h3>
                <p className="text-sm text-gray-600">
                  Free parking available in our building garage. Visitor spots on levels 2-3.
                </p>
              </CardContent>
            </Card>

            {/* Public transport card */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Metro Access</h3>
                <p className="text-sm text-gray-600">
                  5-minute walk from Metro Center Station. Red, Blue, and Orange lines.
                </p>
              </CardContent>
            </Card>

            {/* Accessibility card */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Accessibility</h3>
                <p className="text-sm text-gray-600">Fully wheelchair accessible with elevator access to all floors.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
