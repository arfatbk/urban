import MissionVision from '@/components/about/MissionVision'
import TeamMember from '@/components/about/TeamMember'
import Timeline from '@/components/about/Timeline'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Chairman',
    image: '/assets/team/chairman.jpg',
    bio: 'Over 30 years of experience in banking and finance. Leading Urban Bank\'s vision of financial inclusion and digital transformation.',
    linkedIn: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Managing Director',
    image: '/assets/team/md.jpg',
    bio: 'Former RBI executive with expertise in regulatory compliance and risk management. Driving innovation in banking services.',
    linkedIn: '#',
  },
  {
    name: 'Arun Patel',
    role: 'Chief Financial Officer',
    image: '/assets/team/cfo.jpg',
    bio: 'Chartered Accountant with extensive experience in financial planning and strategy. Ensuring robust financial health of the bank.',
    linkedIn: '#',
  },
  {
    name: 'Smita Desai',
    role: 'Head of Operations',
    image: '/assets/team/operations.jpg',
    bio: 'Technology leader specializing in digital banking transformation. Streamlining operations for enhanced customer experience.',
    linkedIn: '#',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/assets/about-hero.jpg"
          alt="Bank building"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Since 1995, Urban Bank has been serving our community with trust, integrity,
              and innovation. We are committed to providing accessible financial solutions while
              maintaining the highest standards of service.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Timeline Section */}
      <Timeline />

      {/* Leadership Team Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the experienced professionals who guide our vision and strategy.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
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
