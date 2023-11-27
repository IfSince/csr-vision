import { TeamMember } from '../cards/team-member.js'
import { StaticImage } from 'gatsby-plugin-image'

const TEAM_MEMBERS = [
  {
    name: 'Lukas',
    role: 'Project Lead',
    className: 'col-start-1 col-end-1',
    image: <StaticImage className="h-full w-full" src="../../images/team-members/Lukas.png" alt="Lukas"/>,
  },
  {
    name: 'Kai',
    role: 'Co. Lead',
    className: 'lg:col-start-2 lg:col-end-2',
    image: <StaticImage className="h-full w-full" src="../../images/team-members/Kai.png" alt="Kai"/>,
  },
  {
    name: 'Leon',
    role: 'Web Specialist',
    className: 'lg:col-start-3 lg:col-end-3',
    image: <StaticImage className="h-full w-full" src="../../images/team-members/Leon.png" alt="Leon"/>,
  },
  {
    name: 'Ben',
    role: 'Videograf',
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2',
    image: <StaticImage className="h-full w-full" src="../../images/team-members/Ben.png" alt="Ben"/>,
  },
  {
    name: 'Jan',
    role: 'VFX-Engineer',
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2',
    image: <StaticImage className="h-full w-full" src="../../images/team-members/Jan.png" alt="Jan"/>,
  },
]

export const TeamMembers = () =>
  <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:w-fit sm:grid-cols-2 lg:grid-cols-3">
    {
      TEAM_MEMBERS.map(member => <TeamMember { ...member } key={ member.name }>{ member.image }</TeamMember>)
    }
  </div>