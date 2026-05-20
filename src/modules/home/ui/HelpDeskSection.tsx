import { Clock, MapPin, Headphones } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const bairros = [
  { nome: "Brooklin", tempo: "≤5 min" },
  { nome: "Berrini", tempo: "≤5 min" },
  { nome: "Moema", tempo: "≤5 min" },
  { nome: "Indianópolis", tempo: "≤5 min" },
  { nome: "Paulista", tempo: "≤10 min" },
  { nome: "Vila Olímpia", tempo: "≤10 min" },
];

const pilares = [
  {
    icon: Clock,
    titulo: "Resposta em Até 5 Minutos",
    descricao:
      "SLA garantido por contrato. Chamado aberto agora, técnico respondendo em minutos — não horas.",
    destaque: true,
  },
  {
    icon: MapPin,
    titulo: "Técnicos Presenciais em SP",
    descricao:
      "Equipe local no Brooklin, Berrini, Moema e Paulista. Presença física quando você precisar.",
    destaque: false,
  },
  {
    icon: Headphones,
    titulo: "Help Desk 24/7 B2B",
    descricao:
      "Suporte remoto permanente para sua equipe não parar. Analistas sêniores, sem estagiário de plantão.",
    destaque: false,
  },
];

export const HelpDeskSection = () => {
  return (
    <section
      id="helpdesk-section"
      className="py-20 bg-white scroll-mt-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-700 text-sm font-semibold">
              Suporte Técnico Imediato · São Paulo
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seu técnico responde{" "}
            <span className="text-orange-500">em 5 minutos.</span>
            <span className="block text-gray-600 text-2xl md:text-3xl mt-2 font-semibold">
              Presencial ou Remoto. Sem enrolação.
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Para quem precisa de{" "}
            <strong>suporte ágil agora</strong> — não de uma reunião de alinhamento.
            Help Desk especializado para empresas em São Paulo.
          </p>
        </div>

        {/* 3 Pilares */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pilares.map((pilar) => {
            const Icon = pilar.icon;
            return (
              <div
                key={pilar.titulo}
                className={`rounded-2xl p-8 border-2 transition-shadow hover:shadow-lg ${
                  pilar.destaque
                    ? "bg-orange-50 border-orange-300 shadow-md"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    pilar.destaque ? "bg-orange-500" : "bg-slate-700"
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pilar.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pilar.descricao}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cobertura por bairro */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
            <h3 className="text-white font-bold text-lg">
              Cobertura Presencial em São Paulo
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {bairros.map((b) => (
              <div
                key={b.nome}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-white font-semibold text-sm mb-1">
                  {b.nome}
                </div>
                <div className="text-cyan-400 text-xs font-mono font-bold">
                  {b.tempo}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            Tempo médio de resposta presencial a partir da abertura do chamado.
            Atendimento remoto imediato para toda a capital paulista.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton
            buttonText="Preciso de Suporte Agora"
            message="Olá! Preciso de suporte técnico rápido para minha empresa em SP. Podem me atender?"
          />
          <p className="text-gray-400 text-sm mt-3">
            Resposta garantida em até 5 minutos · Exclusivo para empresas
          </p>
        </div>

      </div>
    </section>
  );
};
