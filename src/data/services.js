import Copy from '../images/icons/light/copy.svg'
import Web from '../images/icons/light/web.svg'
import DesignAndAi from '../images/icons/light/design_and_ai.svg'
import Film from '../images/icons/light/film.svg'

export const SERVICES = [
  {
    title: 'Copy Writing',
    description: `Storytelling ist kein Märchen. Auch CSR-Texte können mehr sein als Zahlen, Daten und Fakten. Wir bereiten sie so für Dich mit Persönlichkeit auf,
                  sodass die kleinen und großen Geschichten Deines Unternehmens aus der Perspektive von Nachhaltigkeit und sozialer Verantwortung erzählt werden.`,
    className: '',
    src: Copy,
    alt: 'Copy Writing',
    iconClasses: 'h-20 sm:h-[5.7rem] md:h-[6.5rem] lg:h-[7.5rem]',
  },
  {
    title: 'Web Journeys',
    description: `Mit höchstem Anspruch an User-Journey, Design, Technik und SEO erstellen wir sowohl thematische Landing-Pages als auch ganze Websites,
                  die sich den Themen Nachhaltigkeit und sozialer Verantwortung in Deinem Unternehmen widmen und als Hub für Deine CSR-Kommunikation dienen.`,
    className: '',
    src: Web,
    alt: 'Web Journeys',
  },
  {
    title: 'Creative AI',
    description: `csr vision steht für eine nachhaltige und hocheffektive Nutzung von künstlicher Intelligenz in Projekten, die sowohl höchsten kreativen als auch ethischen Ansprüchen gerecht wird.
                  Dabei ist unser Leitmotiv stets Augmentierung und Effizienz, niemals der Ersatz menschlicher Intelligenz oder Kreativität.`,
    className: 'xl:col-start-2 xl:col-end-2 xl:row-start-2 xl:row-end-2',
    src: DesignAndAi,
    alt: 'Creative AI',
  },
  {
    title: 'Movies & VFX',
    description: `Nichts erzählt nachhaltige Geschichten so gut wie ein Video. Bei csr vision verschreiben wir uns dabei dem hochwertigen visuellen Storytelling, nicht sterilen Werbeclips.
                  Egal, ob Erklärungsvideo, Dokumentation oder Interviews: Die Bilder unseres Videografen bereichern und bewegen.`,
    className: 'xl:col-start-3 xl:col-end-3 xl:row-start-2 xl:row-end-2',
    src: Film,
    alt: 'Movies & VFX',
  },
]