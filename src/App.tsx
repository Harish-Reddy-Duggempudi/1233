import React, { useState, useEffect } from 'react';
import { Timer, MapPin, Users, Globe, Code, ChevronDown, ChevronUp, Calendar, Trophy, BookOpen, Briefcase, Heart, Lightbulb, Award, Gift, UserPlus, QrCode, Camera, Share2, Send, Building, GraduationCap, Github, Linkedin, Twitter } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-27T12:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
      {[
        { value: timeLeft.days, label: 'days' },
        { value: timeLeft.hours, label: 'hours' },
        { value: timeLeft.minutes, label: 'minutes' },
        { value: timeLeft.seconds, label: 'seconds' }
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="card-gradient glass-effect rounded-xl p-4 border border-gray-700">
            <div className="text-4xl md:text-6xl font-bold gradient-text">{value}</div>
            <div className="text-gray-400 text-sm md:text-base mt-2">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQ({ question, children }: { question: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-200">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-primary" />}
      </button>
      {isOpen && <div className="pb-4 text-gray-400">{children}</div>}
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors duration-300">
      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, icon: Icon }: { name: string, role: string, icon: any }) {
  return (
    <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors duration-300">
      <Icon className="w-16 h-16 mx-auto mb-4 text-primary" />
      <h3 className="font-bold text-xl mb-1 text-white">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}

function SponsorCard({ name, type, logo }: { name: string, type: string, logo: string }) {
  return (
    <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors duration-300">
      <img src={logo} alt={name} className="h-24 mx-auto mb-4 object-contain" />
      <h3 className="font-bold text-xl mb-1 text-white">{name}</h3>
      <p className="text-primary">{type}</p>
    </div>
  );
}

function App() {
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { contactName, contactMessage });
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(37,99,235,0.05))]"></div>
        </div>
        <div className="text-center p-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-float">MRCE Hack Fest 2K25</h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Join us for an exciting 24-hour hackathon at MALLA REDDY COLLEGE OF ENGINEERING!
          </p>
          <CountdownTimer />
          <button className="mt-12 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Team</h2>
          <p className="text-center text-gray-400 mb-12">Meet the brilliant minds behind MRCE Hack Fest 2K25</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dr M.Ashok Kumar"
              role="Convener & Principal, MRCE"
              icon={GraduationCap}
            />
            <TeamMember
              name="Dr V.Vivekanandhan"
              role="Co-Convener, Dean R&D and IIIC"
              icon={GraduationCap}
            />
            <TeamMember
              name="Harish Reddy Duggempudi"
              role="Student Coordinator"
              icon={Users}
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Sponsors</h2>
          <p className="text-center text-gray-400 mb-12">Proudly supported by industry leaders</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SponsorCard
              name="Tech Innovators"
              type="Event Sponsor"
              logo="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <SponsorCard
              name="Developer Community"
              type="Community Sponsor"
              logo="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Hackathon Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2 text-white">Date</h3>
              <p className="text-gray-400">March 27-28, 2025</p>
            </div>
            <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2 text-white">Venue</h3>
              <p className="text-gray-400">MRCE Campus, Hyderabad</p>
            </div>
            <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2 text-white">Team Size</h3>
              <p className="text-gray-400">2-4 Members</p>
            </div>
            <div className="card-gradient glass-effect p-6 rounded-xl border border-gray-700">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2 text-white">Eligibility</h3>
              <p className="text-gray-400">All College Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Event Timeline</h2>
          <div className="space-y-8">
            {[
              {
                time: "March 27, 2025 - 12:00 PM",
                title: "Round 1: Ideation and Concept",
                description: "Teams brainstorm and propose innovative ideas, focusing on problem-solving and feasibility. Submit the PPT of their Selected Problem Statement on the selected Theme."
              },
              {
                time: "March 27, 2025 - 6:00 PM",
                title: "Round 2: Prototype Development",
                description: "Teams develop functional prototypes of their selected ideas, emphasizing user experience and core functionality. Show a small prototype of the Solution of that Problem Statement. It may be in Figma as UI or a small chunk of code that works as the main model."
              },
              {
                time: "March 28, 2025 - 5:00 AM",
                title: "Round 3: Workflow Model Refinement and Presentation",
                description: "Teams refine their working models and present them to a panel of judges, highlighting key features and potential impact. Show the entire Solution or a perfectly working prototype of that Problem Statement."
              }
            ].map((event, index) => (
              <div key={index} className="card-gradient glass-effect p-6 rounded-xl border border-gray-700">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4">
                    <div className="font-bold text-primary">{event.time}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-xl mb-2 text-white">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Why Participate?</h2>
          <p className="text-center text-gray-400 mb-12">Discover the benefits of joining MRCE Hack Fest 2K25</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={Lightbulb}
              title="Hands-on Experience"
              description="Engage in practical, real-world problem-solving activities"
            />
            <BenefitCard
              icon={Trophy}
              title="Exciting Prizes"
              description="Compete for cash prizes, internships, and other exciting rewards"
            />
            <BenefitCard
              icon={Users}
              title="Expert Guidance"
              description="Receive mentorship from industry leaders and professionals"
            />
            <BenefitCard
              icon={Briefcase}
              title="Recruitment Opportunities"
              description="Get noticed by top companies for potential job offers"
            />
            <BenefitCard
              icon={Code}
              title="Innovative Projects"
              description="Develop groundbreaking solutions to complex challenges"
            />
            <BenefitCard
              icon={Award}
              title="Recognition"
              description="Showcase your skills and gain recognition in the tech community"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Get in Touch</h2>
          <p className="text-center text-gray-400 mb-12">Have questions? We'd love to hear from you.</p>
          <form onSubmit={handleSubmit} className="card-gradient glass-effect p-8 rounded-xl border border-gray-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-2 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                id="message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full px-4 py-2 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 text-white"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">FAQ</h2>
          <p className="text-center text-gray-400 mb-12">Find answers to commonly asked questions</p>
          <div className="card-gradient glass-effect p-8 rounded-xl border border-gray-700">
            <div className="space-y-4">
              <FAQ question="Who can participate?">
                Any undergraduate or postgraduate student from any college across India.
              </FAQ>
              <FAQ question="What is the registration fee?">
                Participation is completely free of charge.
              </FAQ>
              <FAQ question="What are the guidelines for pre-existing code?">
                All code must be written during the hackathon. Using open-source libraries and frameworks is allowed.
              </FAQ>
              <FAQ question="Which technologies can we use?">
                You can use any technology stack including MERN, MEAN, Python, Java, or any other framework.
              </FAQ>
              <FAQ question="What kind of support will be available?">
                Mentors and technical experts will be available throughout the event to guide participants.
              </FAQ>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-light py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">MRCE Hack Fest 2K25</h3>
            <p className="text-gray-400">MALLA REDDY COLLEGE OF ENGINEERING</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
          </div>
          <p className="text-gray-500">
            © 2025 MRCE Hack Fest. All rights reserved. <br />
            Crafted with <Heart className="h-4 w-4 inline-block text-red-500" /> by MRCE Tech Team
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;