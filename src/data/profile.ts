// ============================================================
// PORTFOLIO JUAN PABLO MAYA — Datos personalizables
// ============================================================

export interface LinkedInSkill {
  name: string
}

export interface LinkedInCert {
  name: string
  authority: string
  url?: string
  timePeriod?: {
    startDate?: { month: number; year: number }
    endDate?: { month: number; year: number }
  }
}

export interface LinkedInData {
  firstName: string
  lastName: string
  headline: string
  location: string
  summary: string
  publicProfileUrl?: string
  skills: LinkedInSkill[]
  certifications: LinkedInCert[]
}

// 🔗 Links — reemplazar con los de Juan Pablo
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/juan-pablo-maya-7859ab266/',  // TODO
  github: 'https://github.com/Juan-maya935',                  // TODO
  instagram: 'https://www.instagram.com/jpme_15/',    // TODO
} as const

export const EMAIL = 'jpme2015.jpm@gmail.com'  // TODO

export const SECTIONS = [
  { id: 'about', label: 'Sobre mí', key: '1' },
  { id: 'stack', label: 'Stack', key: '2' },
  { id: 'experience', label: 'Experiencia', key: '3' },
  { id: 'projects', label: 'Proyectos', key: '4' },
  { id: 'education', label: 'Educación', key: '5' },
  { id: 'certs', label: 'Certificaciones', key: '6' },
  { id: 'contact', label: 'Contacto', key: '7' },
] as const

export const SECTION_META: Record<string, string> = {
  about: 'Quién es Juan Pablo y su enfoque.',
  stack: 'Skills y herramientas.',
  experience: 'Trayectoria profesional.',
  projects: 'Proyectos destacados.',
  education: 'Formación académica.',
  certs: 'Certificaciones y cursos.',
  contact: 'Contacto rápido.',
}

export const SECTION_NAMES: Record<string, string> = {
  about: 'Sobre mí',
  stack: 'Stack',
  experience: 'Experiencia',
  projects: 'Proyectos',
  education: 'Educación',
  certs: 'Certificaciones',
  contact: 'Contacto',
}

// 🔧 Skills — reemplazar con los de Juan Pablo
export const CORE_SKILLS: string[] = [
  'Power BI',
  'Python',
  'SQL',
  'Arduino',
  'Looker Studio',
  'Automatización Industrial',
  'Seguridad Industrial',
  'SST',
  'Mantenimiento Preventivo',
  'Machine Learning',
  'Análisis de Datos',
  'ETL',
  'IoT',
  'Sensores',
  'PLC',
  'SCADA',
  'Visual Basic',
  'Excel Avanzado',
  'Control Estadístico de Procesos',
]

export const SOFT_SKILLS: string[] = [
  'Toma de decisiones basada en datos.',
  'Análisis de riesgos',
  'Trabajo en equipo',
  'Resolución de problemas',
  'Atención al detalle',
  'Liderazgo en campo',
  'Comunicación técnica',
  'Pensamiento crítico',
  'Adaptabilidad y gestión del cambio.',
  'Proactividad y aprendizaje continuo.'
]

// 📝 Bio — Juan Pablo Maya
export const defaultSummary =
  'Tecnólogo mecatrónico e ingeniero de datos en formación. Especialista en seguridad industrial con experiencia en plantas de producción de alto volumen. Integra la automatización mecatrónica con el análisis de datos y la inteligencia artificial para construir soluciones orientadas a la Industria 4.0 — donde la seguridad, la eficiencia operativa y la toma de decisiones basada en datos convergen.'

export const fallbackData: LinkedInData = {
  firstName: 'Juan Pablo',
  lastName: 'Maya Escudero',
  headline: 'Mecatrónica · Seguridad Industrial · Datos e IA',
  location: 'Cali, Colombia',
  summary: defaultSummary,
  skills: [
    { name: 'Power BI' }, { name: 'Python' }, { name: 'SQL' },
    { name: 'Arduino' }, { name: 'Looker Studio' }, { name: 'Automatización Industrial' },
    { name: 'Seguridad Industrial' }, { name: 'SST' }, { name: 'PLC' },
    { name: 'SCADA' }, { name: 'IoT' }, { name: 'Sensores' },
  ],
  certifications: [
    { name: 'Curso de Fundamentos de Ingeniería de Software', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/11997-course/diploma/detalle/', timePeriod: { startDate: { month: 2, year: 2026 } } },
    { name: 'Curso Gratis de Introducción a la Inteligencia Artificial', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/11157-course/diploma/detalle/', timePeriod: { startDate: { month: 1, year: 2026 } } },
    { name: 'Curso de Pensamiento Lógico', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/12116-course/diploma/detalle/', timePeriod: { startDate: { month: 1, year: 2026 } } },
    { name: 'Curso de Excel Intermedio', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/12288-course/diploma/detalle/', timePeriod: { startDate: { month: 10, year: 2025 } } },
    { name: 'Curso de DAX para Power BI', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/8121-course/diploma/detalle/', timePeriod: { startDate: { month: 10, year: 2025 } } },
    { name: 'Curso de Looker Studio', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/11972-course/diploma/detalle/', timePeriod: { startDate: { month: 10, year: 2025 } } },
    { name: 'Curso de Tableau: Visualización de Datos y Storytelling para Negocios', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/2197-course/diploma/detalle/', timePeriod: { startDate: { month: 10, year: 2025 } } },
    { name: 'Curso de Power BI', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/10200-course/diploma/detalle/', timePeriod: { startDate: { month: 7, year: 2025 } } },
    { name: 'Curso de Forecasting con Excel', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/10299-course/diploma/detalle/', timePeriod: { startDate: { month: 7, year: 2025 } } },
    { name: 'Curso de Excel Avanzado para Análisis de Datos', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/4822-excel-avanzado-datos/diploma/detalle/', timePeriod: { startDate: { month: 6, year: 2025 } } },
    { name: 'Curso de Inglés para Programadores', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/3092-ingles-developers/diploma/detalle/', timePeriod: { startDate: { month: 6, year: 2025 } } },
    { name: 'Guía para Empezar una Carrera en Data Science e Inteligencia Artificial', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/2807-aprender-data-ia/diploma/detalle/', timePeriod: { startDate: { month: 6, year: 2025 } } },
    { name: 'Curso de Inglés para el Uso de Inteligencia Artificial', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/6144-ingles-ia/diploma/detalle/', timePeriod: { startDate: { month: 6, year: 2025 } } },
    { name: 'Curso Básico de Circuitos Electrónicos', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/1632-fundamentos-circuitos/diploma/detalle/', timePeriod: { startDate: { month: 5, year: 2025 } } },
    { name: 'Curso de Fundamentos de Electricidad y Electrónica', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/1609-electronica/diploma/detalle/', timePeriod: { startDate: { month: 5, year: 2025 } } },
    { name: 'Curso de Métricas Esenciales de Negocio', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/7857-metricas-2min/diploma/detalle/', timePeriod: { startDate: { month: 4, year: 2025 } } },
    { name: 'Curso de Business Intelligence: Utilidad y Áreas de Oportunidad', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/2359-business-intelligence/diploma/detalle/', timePeriod: { startDate: { month: 4, year: 2025 } } },
    { name: 'Curso de Visualización de Datos y Storytelling con Latinometrics', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/9903-data-viz/diploma/detalle/', timePeriod: { startDate: { month: 3, year: 2025 } } },
    { name: 'Curso de Estadística y Probabilidad', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/7594-estadistica-probabilidad/diploma/detalle/', timePeriod: { startDate: { month: 2, year: 2025 } } },
    { name: 'Curso de Excel Intermedio para Analistas con Tableros y Fórmulas', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/4037-excel-intermedio-2022/diploma/detalle/', timePeriod: { startDate: { month: 1, year: 2025 } } },
    { name: 'Curso de Toma de Decisiones Basadas en Datos', authority: 'Platzi', url: 'https://platzi.com/p/paisa935/curso/9871-decisiones-datos/diploma/detalle/', timePeriod: { startDate: { month: 1, year: 2025 } } },
  ],
}
