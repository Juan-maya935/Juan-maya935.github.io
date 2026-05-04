import MissionPatch from '../components/MissionPatch'
import HUDBracket from '../components/HUDBracket'
import StaggerText from '../components/StaggerText'

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-section relative min-h-screen flex items-center py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full">
        <div className="mb-16 text-center gsap-reveal">
          <HUDBracket className="inline-block mb-4" size={16}>
            <span
              className="text-xs uppercase tracking-[0.3em] text-orbital"
              style={{ fontFamily: 'var(--font-mono)', padding: '0.5rem 2rem' }}
            >
              PROYECTOS.LOG
            </span>
          </HUDBracket>
          <StaggerText
            text="Proyectos"
            className="text-shimmer mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
            }}
          />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', color: 'var(--color-text-tertiary)' }}>
            Cada proyecto, una solución. Cada solución, un impacto real.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="gsap-reveal">
            <MissionPatch missionId="PROYECTO-001" status="complete" className="h-full">
              <div className="text-4xl mb-4">🐟</div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl font-semibold text-lunar mb-2">
                Dispensador de Alimento Inteligente para Peces Ornamentales
              </h3>
              <p className="text-text-tertiary text-sm mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                Tesis FCECEP · IoT + Arduino
              </p>
              <ul className="space-y-2 text-text-secondary text-sm text-left">
                <li className="flex gap-2">
                  <span className="text-orbital">▸</span>
                  <span>Sistema IoT con Arduino para alimentación automatizada de peces ornamentales.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orbital">▸</span>
                  <span>Sensores, temporizadores y control remoto. Proyecto de grado para tecnología mecatrónica.</span>
                </li>
              </ul>
            </MissionPatch>
          </div>

          <div className="gsap-reveal">
            <MissionPatch missionId="PROYECTO-002" status="complete" className="h-full">
              <div className="text-4xl mb-4">🏆</div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl font-semibold text-lunar mb-2">
                Rally Latinoamericano de Innovación
              </h3>
              <p className="text-text-tertiary text-sm mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                1er puesto nacional · Categoría Innovación
              </p>
              <div className="mb-4 inline-block rounded-full bg-orbital/10 px-3 py-1 text-sm font-bold text-orbital">
                🥇 1er Lugar
              </div>
              <ul className="space-y-2 text-text-secondary text-sm text-left">
                <li className="flex gap-2">
                  <span className="text-sls">▸</span>
                  <span>Primer lugar nacional en categoría innovación. Solución a reto real en tiempo limitado.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sls">▸</span>
                  <span>Integración de mecatrónica y pensamiento creativo para resolver desafíos industriales.</span>
                </li>
              </ul>
            </MissionPatch>
          </div>

          <div className="md:col-span-2 gsap-reveal">
            <MissionPatch missionId="PROYECTO-003" status="active">
              <div className="text-4xl mb-4">🏭</div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-xl font-semibold text-lunar mb-2">
                Seguridad Industrial + Industria 4.0
              </h3>
              <p className="text-text-tertiary text-sm mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                En desarrollo · Integración mecatrónica + datos
              </p>
              <ul className="space-y-2 text-text-secondary text-sm text-left">
                <li className="flex gap-2">
                  <span className="text-orbital">▸</span>
                  <span>Fotogrametría y diseño 3D para modelado y visualización de entornos industriales.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orbital">▸</span>
                  <span>Análisis de datos de seguridad para mantenimiento predictivo y prevención de riesgos.</span>
                </li>
              </ul>
            </MissionPatch>
          </div>
        </div>
      </div>
    </section>
  )
}