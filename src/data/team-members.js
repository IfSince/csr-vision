import { StaticImage } from 'gatsby-plugin-image'

export const TEAM_MEMBERS = [
  {
    name: 'Lukas',
    role: 'Project Lead',
    className: 'col-start-1 col-end-1',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Lukas.png" alt="Lukas"/>,
  },
  {
    name: 'Kai',
    role: 'Co. Lead',
    className: 'lg:col-start-2 lg:col-end-2',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Kai.png" alt="Kai"/>,
    description: `Kai ist die Generation X in unserem Team und verantwortlich für Copy, Kommunikation und die Entwicklung unseres Geschäfts.
                  Er konnte seine ersten Erfahrungen im Marketing bereits Ende der Neunzigerjahre als Teil der ersten Guerilla-Marketingkampagnen von Red Bull sammeln.
                  Es folgte eine klassische Karriere als Marketing- und PR-Direktor eines Mobile-Game-Entwicklers.
                  2016 entschied sich Kai, seine Elternzeit für einen kompletten beruflichen Neustart zu nutzen und wieder selbstbestimmter und kreativer zu arbeiten.
                  Nach einer Weiterbildung zum Coach und Trainer folgte 2022 das BA-Studium in CrossMedia Publishing an der SAE, in dessen Rahmen er als Co-Lead Teil von csr vision wurde.`
  },
  {
    name: 'Leon',
    role: 'Web Specialist',
    className: 'lg:col-start-3 lg:col-end-3',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Leon.png" alt="Leon"/>,
  },
  {
    name: 'Ben',
    role: 'Videographer',
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Ben.png" alt="Ben"/>,
  },
  {
    name: 'Jan',
    role: 'VFX-Engineer',
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Jan.png" alt="Jan"/>,
  },
]