import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface EjemplosScreenProps {
  onBack: () => void;
}

interface LawExample {
  game: "zelda" | "lol";
  text: string;
}

interface UXLaw {
  number: string;
  name: string;
  principle: string;
  description: string;
  zelda: string;
  lol: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const UX_LAWS: UXLaw[] = [
  {
    number: "01",
    name: "Ley de Fitts",
    principle: "El tiempo para alcanzar un objetivo depende de su distancia y tamaño",
    description:
      "Los elementos interactivos deben ser grandes y estar cerca del usuario para reducir el tiempo y esfuerzo de interacción.",
    zelda:
      "Los botones de acción (A, B, X, Y) están mapeados a acciones frecuentes. En TOTK, la rueda de poderes es generosa en tamaño y accesible con un solo gesto.",
    lol:
      "Las habilidades (Q,W,E,R) son atajos grandes y visibles. Los objetos del shop tienen áreas de clic amplias. El minimapa facilita los clics de movimiento rápido.",
  },
  {
    number: "02",
    name: "Ley de Hick",
    principle: "Más opciones = más tiempo de decisión",
    description:
      "Reducir el número de opciones visibles acelera la toma de decisiones. La información debe organizarse en capas progresivas para no saturar al usuario.",
    zelda:
      "BOTW/TOTK revela mecánicas gradualmente. El jugador empieza con lo básico; los poderes avanzados se desbloquean con el tiempo. El menú agrupa items para no mostrar todo a la vez.",
    lol:
      "La tienda in-game filtra objetos por categoría y recomendados según tu campeón. Las runes se presentan en árboles para evitar el abrumamiento al jugador.",
  },
  {
    number: "03",
    name: "Ley de Miller",
    principle: "La memoria de trabajo maneja 7 ± 2 elementos",
    description:
      "Agrupar la información en chunks de entre 5 y 9 elementos facilita la memorización y el procesamiento cognitivo del usuario.",
    zelda:
      "Link tiene exactamente 4 habilidades principales en cada entrega. El inventario organiza armas, arcos y escudos en grupos separados. Los mapas tienen regiones claramente delimitadas.",
    lol:
      "Cada campeón tiene exactamente 4 habilidades activas + 1 pasiva. El scoreboard organiza en dos equipos de 5. Los objetos se agrupan en categorías (tanque, daño, soporte).",
  },
  {
    number: "04",
    name: "Navaja de Occam",
    principle: "La solución más simple suele ser la mejor",
    description:
      "Eliminar elementos innecesarios. Cada elemento en la interfaz debe tener una razón de ser; lo superfluo genera ruido cognitivo y confusión.",
    zelda:
      "BOTW es famoso por su HUD mínimo, que puede ocultarse casi completamente. Sin marcadores de misión agresivos. El mundo comunica sin UI gracias al diseño de niveles.",
    lol:
      "El cliente 2.0 de LoL eliminó secciones redundantes. La pantalla de carga muestra solo información esencial. La interfaz en juego elimina decoración innecesaria.",
  },
  {
    number: "05",
    name: "Efecto de Posición Serial",
    principle: "Recordamos mejor el principio y el final de una lista",
    description:
      "Colocar los elementos más críticos al inicio o al final de una secuencia. Lo del medio tiende a olvidarse con más facilidad.",
    zelda:
      "Los tutoriales de Zelda siempre empiezan y terminan con acciones clave. El Great Plateau en BOTW es una intro memorable. Los dungeon finales son siempre los más épicos.",
    lol:
      "El lobby muestra los ban/pick más importantes primero. La pantalla de post-partida destaca el MVP al inicio y las stats al final para que ambos sean recordados.",
  },
  {
    number: "06",
    name: "Efecto Von Restorff",
    principle: "Lo que destaca visualmente se recuerda mejor",
    description:
      "Hacer que los elementos importantes sean visualmente distintos del resto. El contraste guía la atención hacia lo que más importa en la interfaz.",
    zelda:
      "Las entradas a las mazmorras son siempre landmarks únicos. El brillo azul de los Shrines contrasta con el paisaje natural. Los cofres dorados destacan visualmente sobre los comunes.",
    lol:
      "Los campeones legendarios tienen efectos visuales únicos. El Baron Nashor brilla con un aura especial. Los objetos míticos tienen un marco dorado distinto al resto.",
  },
  {
    number: "07",
    name: "Ley de Prägnanz",
    principle: "El cerebro prefiere formas simples y regulares",
    description:
      "Los usuarios interpretarán los elementos ambiguos de la forma más simple posible. Los iconos y formas deben ser limpias, reconocibles e inequívocas.",
    zelda:
      "El corazón como símbolo de vida, la espada como símbolo de ataque. El Triforce es inmediatamente reconocible. Los íconos del HUD son formas geométricas limpias sin ambigüedad.",
    lol:
      "Los iconos de habilidades usan siluetas claras. Las barras de vida, maná y escudo usan colores estándar (verde, azul, amarillo). El minimapa usa colores simples: azul aliado, rojo enemigo.",
  },
  {
    number: "08",
    name: "Principio de Jakob",
    principle: "Los usuarios prefieren interfaces que ya conocen",
    description:
      "Seguir convenciones establecidas reduce la curva de aprendizaje. Los patrones familiares permiten al usuario centrarse en el contenido, no en aprender la interfaz.",
    zelda:
      "Zelda mantiene convenciones propias entre entregas: botón A para acción, corazones para vida. Los fans de la saga entienden la UI nueva instantáneamente sin necesidad de tutorial.",
    lol:
      "El HUD in-game se ha mantenido consistente desde 2009 con mínimas variaciones. Los jugadores veteranos no necesitan re-aprender. El nuevo cliente mantiene la misma estructura que el anterior.",
  },
  {
    number: "09",
    name: "Ley de la Proximidad",
    principle: "Los elementos cercanos se perciben como relacionados",
    description:
      "Agrupar visualmente los elementos relacionados y separar los que no lo están. La proximidad es el primer lenguaje de relación en diseño visual.",
    zelda:
      "El HUD agrupa salud y stamina juntos (son recursos del jugador). El mapa y la brújula están en la misma esquina. Las armas del inventario se agrupan por tipo.",
    lol:
      "Las 4 habilidades están juntas en la parte inferior. Los objetos del inventario están debajo de las habilidades. Las estadísticas del jugador están agrupadas en la UI de perfil.",
  },
  {
    number: "10",
    name: "Efecto de Usabilidad Estética",
    principle: "Lo bello parece más usable",
    description:
      "Los diseños estéticamente atractivos se perciben como más fáciles de usar. La belleza visual genera confianza y reduce la percepción de dificultad.",
    zelda:
      "El arte visual de Hyrule genera una conexión emocional que hace que los jugadores perdonen pequeñas incomodidades. La música y los gráficos crean una experiencia percibida como fluida.",
    lol:
      "Los skins cosméticos hacen que el cliente parezca más premium y usable. El diseño del cliente con animaciones suaves y fondos dinámicos aumenta la percepción de calidad.",
  },
  {
    number: "11",
    name: "Ley de Tesler",
    principle: "Toda aplicación tiene complejidad irreducible",
    description:
      "Siempre existe un nivel mínimo de complejidad que no se puede eliminar, solo transferir: del sistema al usuario o viceversa. El buen diseño absorbe la complejidad internamente.",
    zelda:
      "TOTK oculta la complejidad del sistema Ultrahand. El jugador construye mecánicas complejas con controles simples. El sistema gestiona físicas y combinaciones internamente.",
    lol:
      "LoL tiene cálculos de daño extremadamente complejos pero el jugador solo ve números simples. El matchmaking gestiona internamente ELO, MMR y composición de equipos.",
  },
  {
    number: "12",
    name: "Ley de Doherty",
    principle: "La productividad aumenta cuando el sistema responde en <400ms",
    description:
      "Mantener la respuesta del sistema por debajo de 400ms mantiene al usuario en estado de flujo. El feedback inmediato elimina la ansiedad de '¿funcionó?'.",
    zelda:
      "Los golpes de espada tienen feedback visual y sonoro instantáneo. Al recoger un objeto, la animación y el sonido ocurren de inmediato. Las cargas se ocultan con transiciones suaves.",
    lol:
      "Las habilidades tienen animaciones de cast instantáneas con feedback visual inmediato. El sistema de auto-attacks responde al frame. La tienda confirma compras con efectos de sonido al instante.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function LawCard({ law, index }: { law: UXLaw; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.6s ease ${(index % 2) * 80}ms, transform 0.6s ease ${(index % 2) * 80}ms`,
        background: "#0a1020",
        border: "1px solid rgba(200,168,75,0.12)",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,168,75,0.3)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,168,75,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          borderBottom: "1px solid rgba(200,168,75,0.08)",
          background: "rgba(200,168,75,0.03)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: 26,
            fontWeight: 700,
            color: "rgba(200,168,75,0.35)",
            lineHeight: 1,
            minWidth: 36,
          }}
        >
          {law.number}
        </span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#f0d070",
              letterSpacing: 1,
            }}
          >
            {law.name}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(208,200,176,0.45)",
              marginTop: 3,
              fontStyle: "italic",
            }}
          >
            {law.principle}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 24px" }}>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.75,
            color: "rgba(208,200,176,0.65)",
            marginBottom: 14,
          }}
        >
          {law.description}
        </p>

        {/* Examples grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {/* Zelda */}
          <div
            style={{
              padding: "12px 14px",
              border: "1px solid rgba(74,222,128,0.2)",
              background: "rgba(74,222,128,0.03)",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#4ade80",
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              🗡️ Zelda
            </div>
            <p style={{ color: "rgba(208,200,176,0.72)", fontSize: 12, lineHeight: 1.55 }}>
              {law.zelda}
            </p>
          </div>

          {/* LoL */}
          <div
            style={{
              padding: "12px 14px",
              border: "1px solid rgba(10,200,185,0.2)",
              background: "rgba(10,200,185,0.03)",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#0ac8b9",
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              ⚔️ LoL
            </div>
            <p style={{ color: "rgba(208,200,176,0.72)", fontSize: 12, lineHeight: 1.55 }}>
              {law.lol}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RevealDiv({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EjemplosScreen({ onBack }: EjemplosScreenProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060a0f",
        color: "#d0c8b0",
        fontFamily: "'Rajdhani', 'Segoe UI', sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Rajdhani:wght@400;600;700&family=Philosopher:ital,wght@0,700;1,400&display=swap');

        * { box-sizing: border-box; }

        .law-card-hover {
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .law-card-hover:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 600px) {
          .laws-grid { grid-template-columns: 1fr !important; }
          .examples-row { grid-template-columns: 1fr !important; }
          .games-row { grid-template-columns: 1fr !important; }
          .summary-row { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
        }
      `}</style>

      {/* BG ambiance */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 50% at 15% 10%, rgba(10,200,185,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 85% 80%, rgba(74,222,128,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 50% 30% at 50% 50%, rgba(200,168,75,0.04) 0%, transparent 70%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Grid bg */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(10,200,185,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,200,185,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px 24px 80px",
          }}
        >
          <RevealDiv delay={0}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#0ac8b9",
                marginBottom: 20,
                fontWeight: 600,
              }}
            >
              — Diseño de Experiencia de Usuario —
            </div>
          </RevealDiv>

          <RevealDiv delay={100}>
            <h1
              className="hero-title"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(30px, 7vw, 76px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: 4,
                textTransform: "uppercase",
                background: "linear-gradient(160deg, #f0d070 0%, #c8a84b 50%, #a07830 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(200,168,75,0.5))",
                marginBottom: 14,
              }}
            >
              Las 12 Leyes
              <br />
              de UX & UI
            </h1>
          </RevealDiv>

          <RevealDiv delay={200}>
            <p
              style={{
                fontFamily: "'Philosopher', serif",
                fontSize: "clamp(14px, 2.5vw, 19px)",
                fontStyle: "italic",
                color: "rgba(208,200,176,0.6)",
                marginBottom: 44,
              }}
            >
              Analizadas a través de dos maestros del diseño interactivo
            </p>
          </RevealDiv>

          <RevealDiv delay={300}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "🗡️ The Legend of Zelda", color: "#4ade80", border: "rgba(74,222,128,0.35)", glow: "rgba(74,222,128,0.2)" },
                { label: "⚔️ League of Legends", color: "#0ac8b9", border: "rgba(10,200,185,0.35)", glow: "rgba(10,200,185,0.2)" },
              ].map((b) => (
                <div
                  key={b.label}
                  style={{
                    padding: "10px 24px",
                    border: `1px solid ${b.border}`,
                    color: b.color,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "default",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${b.glow}`;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {b.label}
                </div>
              ))}
            </div>
          </RevealDiv>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.3), transparent)", maxWidth: 700, margin: "0 auto" }} />

        {/* ── GAME INTROS ── */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px" }}>
          <div
            className="games-row"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
          >
            {/* Zelda */}
            <RevealDiv
              style={{
                padding: "40px 40px 40px 20px",
                borderRight: "1px solid rgba(74,222,128,0.15)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    border: "2px solid #4ade80",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    boxShadow: "0 0 20px rgba(74,222,128,0.3), inset 0 0 15px rgba(74,222,128,0.05)",
                    flexShrink: 0,
                  }}
                >
                  🗡️
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 20, color: "#4ade80", textShadow: "0 0 20px rgba(74,222,128,0.5)" }}>
                    The Legend of Zelda
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(208,200,176,0.35)", letterSpacing: 2, marginTop: 4 }}>
                    NINTENDO · DESDE 1986
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: "'Philosopher', serif", fontStyle: "italic", fontSize: 15, lineHeight: 1.85, color: "rgba(208,200,176,0.7)" }}>
                La saga de Zelda es un referente en diseño de videojuegos y experiencia de usuario.
                Su interfaz minimalista, su diseño de mundos intuitivo y su sistema de progresión
                han definido estándares que el resto de la industria sigue décadas después.
                Cada elemento visual comunica sin necesidad de texto.
              </p>
              <div
                style={{
                  marginTop: 24,
                  width: "100%",
                  aspectRatio: "16/9",
                  border: "1px solid rgba(74,222,128,0.2)",
                  background: "rgba(74,222,128,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                  color: "rgba(74,222,128,0.4)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: 36 }}>🗡️</span>
                Zelda: Tears of the Kingdom
              </div>
            </RevealDiv>

            {/* LoL */}
            <RevealDiv delay={100} style={{ padding: "40px 20px 40px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    border: "2px solid #0ac8b9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    boxShadow: "0 0 20px rgba(10,200,185,0.3), inset 0 0 15px rgba(10,200,185,0.05)",
                    flexShrink: 0,
                  }}
                >
                  ⚔️
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 20, color: "#0ac8b9", textShadow: "0 0 20px rgba(10,200,185,0.5)" }}>
                    League of Legends
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(208,200,176,0.35)", letterSpacing: 2, marginTop: 4 }}>
                    RIOT GAMES · DESDE 2009
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: "'Philosopher', serif", fontStyle: "italic", fontSize: 15, lineHeight: 1.85, color: "rgba(208,200,176,0.7)" }}>
                League of Legends ha construido uno de los ecosistemas de UI/UX más complejos
                y exitosos de la historia del gaming. Con millones de jugadores activos, su
                diseño ha evolucionado para gestionar información densa en tiempo real,
                manteniendo claridad y jerarquía visual bajo presión extrema.
              </p>
              <div
                style={{
                  marginTop: 24,
                  width: "100%",
                  aspectRatio: "16/9",
                  border: "1px solid rgba(10,200,185,0.2)",
                  background: "rgba(10,200,185,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                  color: "rgba(10,200,185,0.4)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: 36 }}>⚔️</span>
                League of Legends · In-Game HUD
              </div>
            </RevealDiv>
          </div>
        </section>

        {/* ── LAWS SECTION ── */}
        <section
          style={{
            padding: "72px 24px",
            background: "rgba(10,16,32,0.5)",
            borderTop: "1px solid rgba(200,168,75,0.1)",
            borderBottom: "1px solid rgba(200,168,75,0.1)",
          }}
        >
          <RevealDiv style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: 6, textTransform: "uppercase", color: "rgba(200,168,75,0.6)", marginBottom: 14 }}>
              Análisis Comparativo
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(22px, 4.5vw, 44px)",
                color: "#f0d070",
                textShadow: "0 0 40px rgba(200,168,75,0.35)",
              }}
            >
              Las 12 Leyes en Acción
            </h2>
            <p style={{ fontFamily: "'Philosopher', serif", fontStyle: "italic", fontSize: 15, color: "rgba(208,200,176,0.45)", marginTop: 10 }}>
              Cómo cada ley se manifiesta en dos universos de diseño distintos
            </p>
          </RevealDiv>

          <div
            className="laws-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
              gap: 20,
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >
            {UX_LAWS.map((law, i) => (
              <LawCard key={law.number} law={law} index={i} />
            ))}
          </div>
        </section>

        {/* ── SUMMARY ── */}
        <section style={{ padding: "72px 24px", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <RevealDiv>
            <h2
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(18px, 3.5vw, 32px)",
                color: "#f0d070",
                textShadow: "0 0 30px rgba(200,168,75,0.3)",
                marginBottom: 36,
              }}
            >
              ¿Por Qué Estos Dos Juegos?
            </h2>
          </RevealDiv>

          <div className="summary-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 44, textAlign: "left" }}>
            {[
              {
                title: "🗡️ Zelda — Diseño Intuitivo",
                color: "#4ade80",
                border: "rgba(74,222,128,0.25)",
                bg: "rgba(74,222,128,0.02)",
                bullet: "rgba(74,222,128,0.5)",
                items: [
                  "Interfaz minimalista que confía en el diseño del mundo",
                  "Progresión de complejidad gradual y orgánica",
                  "Iconografía universal, sin necesidad de texto",
                  "Feedback sensorial inmediato y satisfactorio",
                  "Consistencia entre entregas genera familiaridad instantánea",
                  "El mundo mismo funciona como tutorial contextual",
                ],
                delay: 0,
              },
              {
                title: "⚔️ LoL — Diseño de Alta Densidad",
                color: "#0ac8b9",
                border: "rgba(10,200,185,0.25)",
                bg: "rgba(10,200,185,0.02)",
                bullet: "rgba(10,200,185,0.5)",
                items: [
                  "Gestión de información compleja bajo presión temporal",
                  "Jerarquía visual clara en entornos caóticos",
                  "Sistemas complejos con interfaz accesible al jugador",
                  "Color como lenguaje universal (aliado/enemigo/neutral)",
                  "Escalabilidad del diseño para novatos y jugadores pro",
                  "Feedback de confirmación en cada acción crítica",
                ],
                delay: 100,
              },
            ].map((col) => (
              <RevealDiv key={col.title} delay={col.delay}>
                <div style={{ padding: 28, border: `1px solid ${col.border}`, background: col.bg }}>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 14, color: col.color, marginBottom: 16 }}>
                    {col.title}
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {col.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "rgba(208,200,176,0.7)" }}>
                        <span style={{ color: col.bullet, flexShrink: 0, marginTop: 2 }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv delay={200}>
            <p
              style={{
                fontFamily: "'Philosopher', serif",
                fontStyle: "italic",
                fontSize: 15,
                color: "rgba(208,200,176,0.45)",
                lineHeight: 1.85,
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              Ambos juegos demuestran que las leyes de UX no son obstáculos al diseño creativo,
              sino su fundamento. Los mejores diseños no se perciben como "diseñados" porque se sienten naturales.
            </p>
          </RevealDiv>
        </section>

        {/* ── FOOTER / BACK BUTTON ── */}
        <div
          style={{
            borderTop: "1px solid rgba(200,168,75,0.1)",
            padding: "40px 24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onBack}
            style={{
              padding: "12px 36px",
              border: "1px solid rgba(10,200,185,0.5)",
              background: "transparent",
              color: "#0ac8b9",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Rajdhani', sans-serif",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,200,185,0.1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(10,200,185,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            ← Volver
          </button>
        </div>

      </div>
    </div>
  );
}
