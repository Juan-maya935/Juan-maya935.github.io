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
    { name: 'TODO: Certificación 1', authority: 'TODO: Institución', timePeriod: { startDate: { month: 1, year: 2024 } } },
  ],
}
