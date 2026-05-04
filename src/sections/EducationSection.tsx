import GlassCard from '../components/GlassCard'
import HUDBracket from '../components/HUDBracket'
import StaggerText from '../components/StaggerText'

export default function EducationSection() {
  return (
    <section id="education" className="scroll-section relative min-h-screen flex items-center py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full">
        <div className="mb-16 text-center gsap-reveal">
          <HUDBracket className="inline-block mb-4" size={16}>
            <span
              className="text-xs uppercase tracking-[0.3em] text-orbital"
              style={{ fontFamily: 'var(--font-mono)', padding: '0.5rem 2rem' }}
            >
              FORMACIÓN.LOG
            </span>
          </HUDBracket>
          <StaggerText
            text="Educación"
            className="text-shimmer mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
            }}
          />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'var(--color-text-tertiary)' }}>
            Formación base + especialización — el puente hacia la Industria 4.0.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="gsap-reveal">
            <div className="flight-plan">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orbital/30 bg-orbital/10 text-xl">
                  🧠
                </div>
                <div>
                  <div className="mb-1 inline-block rounded-full bg-orbital/10 px-2 py-0.5 text-xs font-mono uppercase tracking-wider text-orbital">
                    En curso
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-lg font-semibold text-lunar mb-1">
                    Ingeniería de Datos e Inteligencia Artificial
                  </h3>
                  <p className="text-text-tertiary text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    Universidad Autónoma de Occidente (UAO) · Cali, Colombia
                  </p>
                  <p className="mt-2 text-text-secondary text-sm">
                    Últimos semestres · Machine Learning, Big Data, NLP, Computer Vision, Ingeniería de Datos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-reveal">
            <div className="flight-plan">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-text-muted/30 bg-space-700 text-xl">
                  ⚙️
                </div>
                <div>
                  <div className="mb-1 inline-block rounded-full bg-space-600 px-2 py-0.5 text-xs font-mono uppercase tracking-wider text-text-tertiary">
                    Completado
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-lg font-semibold text-lunar mb-1">
                    Tecnólogo en Gestión de Sistemas Mecatrónicos
                  </h3>
                  <p className="text-text-tertiary text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                    FCECEP · Cali, Colombia
                  </p>
                  <p className="mt-2 text-text-secondary text-sm">
                    Automatización, control, electrónica, IoT, diseño mecánico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration card */}
        <div className="gsap-reveal mt-10">
          <GlassCard glow>
            <div className="text-center">
              <div className="mb-4 text-3xl">🔗</div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl font-semibold text-lunar mb-3">
                La Sinergia: Mecatrónica × Datos e IA
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-lg mx-auto">
                La <span className="text-orbital">mecatrónica</span> da la capacidad de entender y automatizar el mundo físico — 
                sensores, actuadores, PLCs, mantenimiento. La <span className="text-circuit">ingeniería de datos e IA</span> 
                permite extraer conocimiento de ese mundo y tomar decisiones inteligentes. 
                Juntas forman el núcleo de la <span className="text-sls">Industria 4.0</span>: 
                fábricas que se monitoreean solas, equipos que predicen sus propias fallas, 
                y procesos donde la seguridad se refuerza con datos en tiempo real.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}