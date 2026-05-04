import GlassCard from '../components/GlassCard'
import HUDBracket from '../components/HUDBracket'
import StaggerText from '../components/StaggerText'
import { CORE_SKILLS, SOFT_SKILLS } from '../data/profile'

export default function StackSection() {
  return (
    <section id="stack" className="scroll-section relative min-h-screen flex items-center py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full">
        <div className="mb-16 text-center gsap-reveal">
          <HUDBracket className="inline-block mb-4" size={16}>
            <span
              className="text-xs uppercase tracking-[0.3em] text-orbital"
              style={{ fontFamily: 'var(--font-mono)', padding: '0.5rem 2rem' }}
            >
              SISTEMA.STACK
            </span>
          </HUDBracket>
          <StaggerText
            text="Stack Técnico"
            className="text-shimmer mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              color: 'var(--color-text-tertiary)',
            }}
          >
            Herramientas y competencias — de la planta al dato.
          </p>
        </div>

        {/* Core Skills */}
        <div className="gsap-reveal mb-10">
          <GlassCard>
            <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-lg font-semibold text-orbital mb-4">
              ⚙️ Skills Técnicos
            </h3>
            <div className="flex flex-wrap gap-2">
              {CORE_SKILLS.map(s => (
                <span key={s} className="skill-orbit">
                  {s}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Soft Skills */}
        <div className="gsap-reveal">
          <GlassCard>
            <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-lg font-semibold text-sls mb-4">
              🛡️ Competencias Profesionales
            </h3>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map(s => (
                <span key={s} className="skill-orbit">
                  {s}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Industry 4.0 Integration */}
        <div className="gsap-reveal mt-10">
          <GlassCard glow>
            <div className="text-center">
              <div className="mb-4 text-4xl">🏭</div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl font-semibold text-lunar mb-3">
                Mecatrónica + Datos = Industria 4.0
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
                La integración de la mecatrónica con la ingeniería de datos e IA crea un perfil único para la Industria 4.0: 
                <span className="text-orbital">automatización inteligente</span> con <span className="text-orbital">análisis predictivo</span>, 
                <span className="text-sls"> seguridad basada en datos</span> y 
                <span className="text-circuit">mantenimiento preventivo impulsado por ML</span>. 
                Donde el mundo físico se conecta con el digital para decisiones más seguras y eficientes.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}