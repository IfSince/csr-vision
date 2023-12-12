import { StaticImage } from 'gatsby-plugin-image'
import InvestorRelations from '../images/icons/dark/investor_relations.svg'
import EmployeeRetention from '../images/icons/dark/employee_retention.svg'

export const TEAM_MEMBERS = [
  {
    name: 'Lukas Ruszkowski',
    role: 'Lead',
    className: 'col-start-1 col-end-1',
    skills: [
      { icon: InvestorRelations, alt: 'Investor Relations' },
      { icon: EmployeeRetention, alt: 'Employee Retention' },
    ],
    image: <StaticImage className="h-full w-full" src="../images/team-members/Lukas.png" alt="Lukas"/>,
    description: `Im Jahr 2016 schloss Lukas die Bezirksschule im Schweizer Kanton Aargau ab. Es folgte eine Ausbildung zum Mediamatiker und 2020 schließlich die Berufsmaturität.
                  Nach einem Jahr Zivildienst an einer heilpädagogischen Schule begann er 2022 sein Bachelorstudium im Fachbereich Crossmedia an der SAE.
                  Künstlerisches findet Lukas als KK Naked sein Ventil in der elektronischen Musik.
                  Inspiriert und ausgetobt kann er sich so in anderen kreativen Bereichen voll auf die Wünsche der Kunden von csr.vision einzulassen.
                  Lukas Leitbild ist »Tiefenspezialisierung in allen Bereichen«, sodass er auch als Projekt-Lead mehr als nur oberflächliches Wissen in alle projektrelevanten Bereiche einbringt.`
  },
  {
    name: 'Kai Peter Hitzer',
    role: 'Co. Lead',
    className: 'lg:col-start-2 lg:col-end-2',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Kai.png" alt="Kai"/>,
    skills: [
      { icon: InvestorRelations, alt: 'Investor Relations' },
      { icon: EmployeeRetention, alt: 'Employee Retention' },
    ],
    description: `Kai ist die Generation X in unserem Team und verantwortlich für Copy, Kommunikation und die Entwicklung unseres Geschäfts.
                  Er konnte seine ersten Erfahrungen im Marketing bereits Ende der Neunzigerjahre als Teil der ersten Guerilla-Marketingkampagnen von Red Bull sammeln.
                  Es folgte eine klassische Karriere als Marketing- und PR-Direktor eines Mobile-Game-Entwicklers.
                  2016 entschied sich Kai, seine Elternzeit für einen kompletten beruflichen Neustart zu nutzen und wieder selbstbestimmter und kreativer zu arbeiten.
                  Nach einer Weiterbildung zum Coach und Trainer folgte 2022 das BA-Studium in CrossMedia Publishing an der SAE, in dessen Rahmen er als Co-Lead Teil von csr.vision wurde.`,
  },
  {
    name: 'Leon Laade',
    role: 'Web Specialist',
    className: 'lg:col-start-3 lg:col-end-3',
    skills: [
      { icon: InvestorRelations, alt: 'Investor Relations' },
      { icon: EmployeeRetention, alt: 'Employee Retention' },
    ],
    image: <StaticImage className="h-full w-full" src="../images/team-members/Leon.png" alt="Leon"/>,
    description: `Leon absolvierte im Anschluss an seine Schulzeit 2018 zunächst eine zweieinhalbjährige Ausbildung bei der Berenberg Bank in Hamburg,
                  wo er seitdem als Software Engineer tätig war. Seine Leidenschaft für Web und Design führte ihn schließlich zum SAE Institut, wo er 2022 sein Bachelorstudium im Web Development begann.
                  Leons Anspruch ist, sich stets zu hinterfragen und aus jedem Projekt etwas mitzunehmen. So können einzigartige User Journeys entstehen und hoch
                  individuelle Produkte erarbeitet werden, die sowohl technisch als auch von Design her State-of-the-Art sind und dem Anspruch und Bedarf der Kunden von csr.vision entsprechen.`
  },
  {
    name: 'Benedikt Tschirch',
    role: 'Media Designer - Image/Sound',
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2',
    image: <StaticImage className="h-full w-full" src="../images/team-members/Ben.png" alt="Ben"/>,
    skills: [
      { icon: InvestorRelations, alt: 'Investor Relations' },
      { icon: EmployeeRetention, alt: 'Employee Retention' },
    ],
    description: `Ben ist der Filmer im Team. Sein Spezialgebiet sind Doku Formate, aber auch Werbefilme für Firmen und Vorstellungsfilme für Museen und Galerien.
                  Seine ersten Erfahrungen im Filmsektor sammelte er bereits vor knapp zehn Jahren, als er als 14-jähriger Kameraassistent bei einer NDR-Produktion in Brasilien Stative durch den Regenwald trug.
                  Nach der Schule folgte eine selbstständige Tätigkeit als Kameraassistent. Motiviert durch Geldsorgen während der Coronazeit, erweiterte er sein Portfolio um Drone Operations.
                  2022 folgte dann schließlich der Studiengang Film Production an der SAE, in dessen Rahmen er Teil von csr.vision wurde.`
  },
  {
    name: 'Jan',
    role: 'VFX-Engineer',
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-2',
    skills: [
      { icon: InvestorRelations, alt: 'Investor Relations' },
      { icon: EmployeeRetention, alt: 'Employee Retention' },
    ],
    image: <StaticImage className="h-full w-full" src="../images/team-members/Jan.png" alt="Jan"/>,
  },
]