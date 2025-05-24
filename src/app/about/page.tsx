import MissionVision from '@/components/about/MissionVision'
import TeamMember from '@/components/about/TeamMember'
import { siteConfig } from "@/config/site";

const teamMembers = [
  {
    name: 'Ganesh Surwase',
    role: 'Chairman & Founder',
    image: '/assets/team/md.jpg',
    bio: 'Established Business owner over 20 years of experience serving customers. Passionate about empowering communities through financial literacy and inclusion.',
    // linkedIn: '#',
  },
  {
    name: 'Arun Thapde',
    role: 'CEO',
    image: '/assets/team/chairman.jpg',
    bio: 'Over 10 years of experience in banking and finance. Committed to driving innovation and excellence in customer service.',
    // linkedIn: '#',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
        {/* Decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-24 py-8 sm:py-32 lg:px-8 lg:py-18">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8">
              
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-xl">
              {siteConfig.name.full} has been serving our community with trust, integrity,
              and innovation. We are committed to providing accessible financial solutions while
              maintaining the highest standards of service.
            </p>
            
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Timeline Section */}
      {/* <Timeline /> */}

      {/* Leadership Team Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Our Team</h2>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Meet the experienced professionals who guide our vision and strategy with decades of combined experience in banking and finance.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <li key={member.name}>
                <TeamMember {...member} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
