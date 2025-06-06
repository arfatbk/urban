import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  linkedIn?: string
}

export default function TeamMember({ name, role, image, bio, linkedIn }: TeamMemberProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-3 aspect-w-3 overflow-hidden rounded-lg">
        {/* <Image
          width={300}
          height={300}
          src={image}
          alt={name}
          className="object-cover group-hover:opacity-90 transition-opacity"
        /> */}
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{name}</h3>
      <p className="text-base leading-7 text-blue-600">{role}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{bio}</p>
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clipRule="evenodd"
            />
          </svg>
          Connect on LinkedIn
        </a>
      )}
    </div>
  )
}
