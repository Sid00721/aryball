import { ShoppingBasketIcon as Basketball, CheckCircle, Award, Zap } from "lucide-react"
import Image from "next/image"
import EOIForm from "@/components/eoi-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white py-4 border-b fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Basketball className="h-10 w-10 text-orange-500" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent">
              Ary Bhalerao Basketball
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat rotate-12 scale-150"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block animate-bounce mb-4">
              <Basketball className="h-12 w-12 text-orange-400 mx-auto" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Elevate Your Game: Join the <span className="text-orange-400">Basketball Coaching</span> Waitlist
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-blue-100">
              Take your basketball skills to the next level with personalized coaching focused on your development
            </p>
            <a
              href="#eoi-form"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-500 text-white font-medium shadow-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Join Waitlist
            </a>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Ary Bhalerao"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
                    <span className="text-white font-bold text-sm">Coach Ary</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  About Coach
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">About Ary Bhalerao – Basketball Coach</h3>

                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    I'm Ary Bhalerao, a dedicated basketball coach with a strong track record both as a player and
                    mentor. With years of experience across school, representative, and youth league levels, I bring a
                    deep understanding of the game and a passion for developing young athletes. I specialize in skills
                    development, with a focus on fundamentals, basketball IQ, and building player confidence in a
                    supportive and structured environment.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                    <h4 className="font-semibold text-blue-800 mb-2">Player Experience</h4>
                    <p className="leading-relaxed">
                      As Vice-Captain of the GPS 1st Grade team at Sydney Boys High School (2023–2024) and Captain of
                      the 2nd Grade team (2021–2022), I've competed at the highest school level and earned selections
                      for the 1st Grade GPS Combined Selection Camp (2023, 2024). I was recognized as the 2nd Grade MVP
                      (2021–2022) and currently hold the title of 5th highest scorer in the school's 1st Grade GPS
                      history.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 shadow-sm">
                    <h4 className="font-semibold text-orange-800 mb-2">Representative Experience</h4>
                    <p className="leading-relaxed">
                      My representative playing experience spans multiple clubs including the Manly Warringah Sea Eagles
                      and Western Sydney Wolves in the NSW Youth League U23 and U21 divisions. I've also competed in the
                      NSW State Premier Division and was part of the NSW CHS State Championship-winning team in 2022.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                    <h4 className="font-semibold text-green-800 mb-2">Coaching Experience</h4>
                    <p className="leading-relaxed">
                      As a coach, I've worked with junior development programs like Aussie Hoops (2020–2022), served as
                      a coach in the North Shore Basketball League (2024–2025), and currently lead the 13s A and B teams
                      at Sydney Boys High School. I also offer private skills coaching to help players aged 10–16
                      elevate their game in both individual and group settings.
                    </p>
                  </div>

                  <p className="leading-relaxed font-medium text-blue-800">
                    I'm committed to growing the next generation of players through tailored, thoughtful, and effective
                    coaching that prioritizes growth on and off the court.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Skills Development
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Basketball IQ
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Fundamentals
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Youth Coaching
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    Private Training
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Benefits
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Why Join the Waitlist?</h3>
              <p className="text-lg mb-6 text-gray-700 max-w-3xl mx-auto">
                Spots for coaching are limited. Fill out the form below to express your interest and get priority
                notification when new sessions or programs become available.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2 text-gray-800">Priority Access</h4>
                <p className="text-gray-600">Be the first to know when new coaching spots open up</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <h4 className="font-bold mb-2 text-gray-800">Personalized Training</h4>
                <p className="text-gray-600">Get coaching tailored to your specific development needs</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2 text-gray-800">Skill Advancement</h4>
                <p className="text-gray-600">Improve your game with expert guidance and feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* EOI Form Section */}
        <section className="py-12 md:py-16 bg-white relative" id="eoi-form">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Join Now
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Express Your Interest</h3>
                <p className="text-center mb-8 text-gray-600">
                  Complete the form below to join the waitlist for basketball coaching sessions
                </p>
              </div>

              <EOIForm />
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Next Steps
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">What Happens Next?</h3>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Thanks for your interest! We'll review your submission and contact you via email or phone when a
                  suitable spot opens up or new programs matching your interest are launched.
                </p>
                <div className="mt-8 flex items-center justify-center">
                  <Basketball className="h-8 w-8 text-orange-500 mr-3 animate-bounce" />
                  <span className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent">
                    Looking forward to coaching you!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Basketball className="h-8 w-8 text-orange-400" />
          </div>
          <p className="mb-2">© {new Date().getFullYear()} Ary Bhalerao Basketball Coaching</p>
          <p className="text-sm text-blue-200">All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
