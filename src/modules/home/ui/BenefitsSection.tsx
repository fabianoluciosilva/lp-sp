import {
  MessageSquareIcon,
  ShieldIcon,
  TrendingDownIcon,
  TargetIcon,
  Building2Icon,
  UsersIcon,
  HandshakeIcon,
  Settings2Icon,
  ServerIcon,
  LockIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o componente

const serviceGroups = [
  {
    id: "empresas",
    title: "Empresas em São Paulo",
    subtitle: "Terceirização de alto nível com SLA rígido",
    icon: Building2Icon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    benefits: [
      {
        icon: HandshakeIcon,
        title: "Terceirização Estratégica",
        description:
          "Gestão completa da TI sem custos trabalhistas. Equipe dedicada, SLA agressivo e suporte 24/7 para sua operação.",
        color: "from-blue-600 to-indigo-700",
      },
      {
        icon: ServerIcon,
        title: "Infraestrutura de Alta Performance",
        description:
          "Projetos de rede, servidores e nuvem com alta disponibilidade. Preparados para escalar com o seu negócio.",
        color: "from-indigo-500 to-blue-500",
      },
      {
        icon: Settings2Icon,
        title: "Consultoria e Inovação",
        description:
          "Alinhamos a tecnologia aos seus objetivos de negócio para garantir crescimento e previsibilidade de custos.",
        color: "from-slate-600 to-slate-800",
      },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança Cibernética",
    subtitle: "Proteção intransigente contra ameaças",
    icon: ShieldIcon,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    benefits: [
      {
        icon: LockIcon,
        title: "Blindagem de Dados",
        description:
          "Firewall avançado, antivírus corporativo e monitoramento em tempo real contra ransomware e vazamentos.",
        color: "from-emerald-600 to-green-600",
      },
      {
        icon: ShieldIcon,
        title: "Continuidade de Negócios",
        description:
          "Rotinas de backup automatizadas e plano de recuperação de desastres para garantir que você nunca perca dados.",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: MessageSquareIcon,
        title: "SLA de Resposta em 5 Minutos",
        description:
          "Em SP cada segundo conta. Atendimento técnico imediato para incidentes críticos e emergências.",
        color: "from-blue-500 to-cyan-500",
      },
    ],
  },
  {
    id: "produtividade",
    title: "Suporte Técnico Corporativo",
    subtitle: "Resolução ágil para sua equipe não parar",
    icon: TrendingDownIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    benefits: [
      {
        icon: UsersIcon,
        title: "Help Desk Especializado",
        description:
          "Sua equipe fala direto com analistas experientes, resolvendo problemas do dia a dia sem burocracia.",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: TrendingDownIcon,
        title: "Otimização de Custos (FinOps)",
        description:
          "Identificamos gargalos e desperdícios na sua TI atual, transformando tecnologia em investimento eficiente.",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: TargetIcon,
        title: "Foco no Core Business",
        description:
          "Tiramos a TI das suas costas. Foque no que importa: liderar seu mercado e fechar novos negócios.",
        color: "from-teal-500 to-cyan-500",
      },
    ],
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="benefits-section"
      className="py-20 bg-slate-50 scroll-mt-20"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Engenharia de TI por trás das <span className="text-blue-600">Empresas que Crescem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções B2B projetadas para a velocidade e exigência do mercado de São Paulo.
          </p>
        </div>

        <div className="space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                <div className={`p-3 rounded-xl ${group.bgColor}`}>
                  <group.icon className={`w-8 h-8 ${group.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {group.title}
                  </h3>
                  <p className="text-gray-500">{group.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <Card
                      key={benefit.title}
                      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white"
                    >
                      <CardContent className="p-8">
                        <div
                          className={`w-12 h-12 bg-linear-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO FIXO DO WHATSAPP NO FINAL DA SEÇÃO DE BENEFÍCIOS */}
        <div className="mt-16 text-center">
          <WhatsAppButton 
            buttonText="Agendar Diagnóstico Gratuito"
            message="Olá! Gostei das soluções que a Simples Solução oferece e quero entender como aplicar isso na minha empresa em São Paulo."
          />
        </div>

      </div>
    </section>
  );
};
