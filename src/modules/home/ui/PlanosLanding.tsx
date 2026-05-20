/**
 * PlanosLanding.tsx
 *
 * Componente de planos para as landing pages RJ e SP.
 * Salvar em: @/modules/home/ui/PlanosLanding.tsx
 *
 * USO:
 *   <PlanosLanding cidade="rj" />
 *   <PlanosLanding cidade="sp" />
 *
 * Posição recomendada: entre TestimonialsSection e a seção de Garantia.
 */

type Cidade = "rj" | "sp";

interface CidadeConfig {
  subtitulo: string;
  titulo: string;
  descricao: string;
  ctaWhatsapp: string;
  rodape: string;
}

interface PlanoItem {
  texto: string;
  ok: boolean;
}

interface Plano {
  id: string;
  nome: string;
  descricao: string;
  perfil: string;
  badge: string | null;
  destaque: boolean;
  itens: PlanoItem[];
}

const CONFIG: Record<Cidade, CidadeConfig> = {
  rj: {
    subtitulo: "Planos de Suporte",
    titulo: "Qual é o nível de TI\nque a sua empresa precisa?",
    descricao:
      "Cada empresa tem uma estrutura diferente. Identifique o perfil que melhor descreve a sua operação e entre em contato para receber uma proposta personalizada.",
    ctaWhatsapp:
      "https://wa.me/552140421350?text=Ol%C3%A1!%20Vi%20os%20planos%20no%20site%20e%20gostaria%20de%20receber%20uma%20proposta%20para%20minha%20empresa%20no%20RJ.",
    rodape:
      "Não encontrou o perfil ideal? Fale com a nossa equipe e montamos uma solução sob medida para a sua empresa.",
  },
  sp: {
    subtitulo: "Planos de Suporte",
    titulo: "A TI do seu escritório\nno nível que SP exige",
    descricao:
      "Especializados em escritórios de advocacia e contabilidade em São Paulo. Identifique o perfil da sua operação e receba uma proposta sem compromisso.",
    ctaWhatsapp:
      "https://wa.me/552140421350?text=Ol%C3%A1!%20Vi%20os%20planos%20no%20site%20e%20gostaria%20de%20receber%20uma%20proposta%20para%20minha%20empresa%20em%20SP.",
    rodape:
      "Cada escritório tem uma demanda específica. Fale com a nossa equipe e montamos a solução ideal para o seu negócio.",
  },
};

const PLANOS: Plano[] = [
  {
    id: "essencial",
    nome: "Essencial",
    descricao: "Para empresas com infraestrutura simples e equipe enxuta.",
    perfil: "Até 5 estações · Sem servidor dedicado · Suporte remoto e presencial",
    badge: null,
    destaque: false,
    itens: [
      { texto: "Suporte remoto e presencial", ok: true },
      { texto: "Gestão de estações de trabalho", ok: true },
      { texto: "Monitoramento básico de rede", ok: true },
      { texto: "Antivírus corporativo", ok: true },
      { texto: "Atendimento em horário comercial", ok: true },
      { texto: "Gestão de servidores", ok: false },
      { texto: "Backup gerenciado", ok: false },
      { texto: "Firewall gerenciado", ok: false },
      { texto: "Relatório mensal de TI", ok: false },
    ],
  },
  {
    id: "profissional",
    nome: "Profissional",
    descricao: "Para empresas com servidor e infraestrutura que não pode parar.",
    perfil: "5 a 20 estações · Servidor · Backup e monitoramento proativo",
    badge: "Mais Contratado",
    destaque: true,
    itens: [
      { texto: "Tudo do plano Essencial", ok: true },
      { texto: "Gestão de servidores", ok: true },
      { texto: "Backup gerenciado", ok: true },
      { texto: "Monitoramento proativo 8×5", ok: true },
      { texto: "SLA de 4 horas úteis", ok: true },
      { texto: "Relatório mensal de TI", ok: true },
      { texto: "Firewall gerenciado", ok: false },
      { texto: "Gestão de CFTV", ok: false },
      { texto: "Atendimento presencial recorrente", ok: false },
    ],
  },
  {
    id: "premium",
    nome: "Premium",
    descricao: "Gestão completa para operações críticas e infraestrutura complexa.",
    perfil: "Múltiplos servidores · CFTV · Firewall · Atendimento presencial programado",
    badge: null,
    destaque: false,
    itens: [
      { texto: "Tudo do plano Profissional", ok: true },
      { texto: "Firewall gerenciado", ok: true },
      { texto: "Gestão de CFTV", ok: true },
      { texto: "Backup gerenciado em nuvem", ok: true },
      { texto: "SLA de 2 horas úteis", ok: true },
      { texto: "Atendimento presencial programado", ok: true },
      { texto: "Relatório executivo mensal", ok: true },
      { texto: "Gerente de conta dedicado", ok: true },
      { texto: "Prioridade máxima nos chamados", ok: true },
    ],
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="8" fill="#4A90D9" fillOpacity="0.18" />
    <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#4A90D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="8" fill="#ffffff" fillOpacity="0.04" />
    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

interface PlanosLandingProps {
  cidade?: Cidade;
}

export const PlanosLanding = ({ cidade = "rj" }: PlanosLandingProps) => {
  const cfg = CONFIG[cidade] ?? CONFIG.rj;

  return (
    <section
      id="planos-section"
      className="py-24 scroll-mt-24"
      style={{ background: "#0a1628" }}
      aria-labelledby="planos-titulo"
    >
      <style>{`
        .planos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 860px) {
          .planos-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
          }
        }

        .plano-card {
          border-radius: 16px;
          padding: 32px 24px 28px;
          position: relative;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .plano-card:hover {
          border-color: rgba(74,144,217,0.4);
          transform: translateY(-4px);
        }

        .plano-card.destaque {
          background: rgba(255,255,255,0.09);
          border: 1.5px solid rgba(255,255,255,0.22);
        }

        .plano-card.destaque:hover {
          border-color: rgba(255,255,255,0.4);
        }

        .plano-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: #4A90D9;
          color: #fff;
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .plano-nome {
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .plano-desc {
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          font-weight: 400;
          line-height: 1.5;
          margin: 0 0 20px;
          min-height: 38px;
        }

        .plano-perfil-bloco {
          background: rgba(74,144,217,0.08);
          border: 1px solid rgba(74,144,217,0.18);
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 24px;
        }

        .plano-perfil-label {
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4A90D9;
          margin-bottom: 5px;
        }

        .plano-perfil-texto {
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 12.5px;
          color: rgba(255,255,255,0.7);
          font-weight: 400;
          line-height: 1.5;
        }

        .plano-itens {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .plano-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          line-height: 1.3;
        }

        .plano-item.excluido {
          color: rgba(255,255,255,0.22);
        }

        .plano-cta {
          display: block;
          width: 100%;
          padding: 13px;
          border-radius: 9px;
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 13.5px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .cta-destaque {
          background: #4A90D9;
          color: #fff;
          border: none;
        }

        .cta-destaque:hover { background: #3a7bc8; }

        .cta-outline {
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .cta-outline:hover {
          border-color: rgba(255,255,255,0.45);
          color: #fff;
        }

        .plano-subnota {
          font-family: var(--font-geist-sans, sans-serif);
          font-size: 11px;
          color: rgba(255,255,255,0.28);
          text-align: center;
          margin-top: 10px;
        }

        .divisor-planos {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 24px;
        }
      `}</style>

      {/* Cabeçalho */}
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px", padding: "0 20px" }}>
        <p style={{
          fontFamily: "var(--font-geist-sans, sans-serif)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#4A90D9",
          marginBottom: 14,
        }}>
          {cfg.subtitulo}
        </p>
        <h2
          id="planos-titulo"
          style={{
            fontFamily: "var(--font-geist-sans, sans-serif)",
            fontSize: "clamp(22px, 2.5vw, 32px)",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 18px",
            lineHeight: 1.3,
          }}
        >
          {cfg.titulo.replace(/\n/g, " ")}
        </h2>
        <p style={{
          fontFamily: "var(--font-geist-sans, sans-serif)",
          fontSize: 15,
          color: "rgba(255,255,255,0.5)",
          fontWeight: 400,
          lineHeight: 1.65,
          margin: "0 0 24px",
        }}>
          {cfg.descricao}
        </p>

        {/* Preço âncora */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(74,144,217,0.12)",
          border: "1px solid rgba(74,144,217,0.3)",
          borderRadius: 40,
          padding: "10px 22px",
        }}>
          <span style={{
            fontFamily: "var(--font-geist-sans, sans-serif)",
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 400,
          }}>
            Planos
          </span>
          <span style={{
            fontFamily: "var(--font-geist-sans, sans-serif)",
            fontSize: 18,
            fontWeight: 700,
            color: "#ffffff",
          }}>
            a partir de R$ 690/mês
          </span>
          <span style={{
            fontFamily: "var(--font-geist-sans, sans-serif)",
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
          }}>
            · Proposta em 5 min
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="planos-grid" style={{ padding: "0 20px" }}>
        {PLANOS.map((plano) => (
          <div
            key={plano.id}
            className={`plano-card ${plano.destaque ? "destaque" : ""}`}
          >
            {plano.badge && (
              <div className="plano-badge">{plano.badge}</div>
            )}

            <h3 className="plano-nome" style={{ marginTop: plano.badge ? 6 : 0 }}>
              {plano.nome}
            </h3>
            <p className="plano-desc">{plano.descricao}</p>

            <div className="plano-perfil-bloco">
              <div className="plano-perfil-label">Perfil indicado</div>
              <div className="plano-perfil-texto">{plano.perfil}</div>
            </div>

            <div className="divisor-planos" />

            <ul className="plano-itens">
              {plano.itens.map((item, i) => (
                <li key={i} className={`plano-item ${!item.ok ? "excluido" : ""}`}>
                  {item.ok ? <CheckIcon /> : <XIcon />}
                  {item.texto}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/552140421350?text=${encodeURIComponent(
                `Olá! Vi o Plano ${plano.nome} no site da Simples Solução e gostaria de receber uma proposta para minha empresa${cidade === "sp" ? " em SP" : " no RJ"}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`plano-cta ${plano.destaque ? "cta-destaque" : "cta-outline"}`}
            >
              Solicitar Orçamento
            </a>
            <p className="plano-subnota">Orçamento em 5 min · Sem cartão de crédito</p>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <p style={{
        textAlign: "center",
        fontFamily: "var(--font-geist-sans, sans-serif)",
        fontSize: 13,
        color: "rgba(255,255,255,0.35)",
        margin: "48px auto 0",
        maxWidth: 500,
        lineHeight: 1.6,
        padding: "0 20px",
      }}>
        {cfg.rodape}{" "}
        <a
          href={cfg.ctaWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4A90D9", fontWeight: 600, textDecoration: "none" }}
        >
          Fale pelo WhatsApp →
        </a>
      </p>
    </section>
  );
};
