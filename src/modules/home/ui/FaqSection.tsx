"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { waHref } from "@/lib/whatsapp";

interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqCategoria {
  label: string;
  slug: string;
  itens: FaqItem[];
}

const categorias: FaqCategoria[] = [
  {
    label: "Advocacias",
    slug: "advocacia",
    itens: [
      {
        pergunta: "Vocês têm experiência com sistemas jurídicos (SAJ, PJe, Thomson Reuters)?",
        resposta:
          "Sim. Nossa equipe tem experiência no suporte a estações que utilizam SAJ, PJe, e-SAJ e sistemas de gestão jurídica. Garantimos que as atualizações e integrações com portais do judiciário não impactem a rotina do escritório.",
      },
      {
        pergunta: "O que acontece se o sistema cair durante uma audiência ou prazo?",
        resposta:
          "Com o nosso monitoramento 24/7, antecipamos falhas antes que ocorram. Em caso de incidente, o SLA de 5 minutos garante que um técnico já está atuando enquanto sua equipe ainda está tentando entender o problema.",
      },
      {
        pergunta: "Cuidam da segurança de dados dos clientes (LGPD)?",
        resposta:
          "Sim. Implementamos políticas de backup automático, criptografia de dados sensíveis, controle de acesso por usuário e relatórios de conformidade para ajudar seu escritório a atender as exigências da LGPD.",
      },
      {
        pergunta: "Qual o valor mínimo para um escritório de advocacia?",
        resposta:
          "Os planos partem de R$ 690/mês para escritórios com até 5 estações. Para escritórios maiores ou com servidor dedicado, enviamos uma proposta personalizada em até 5 minutos após o contato.",
      },
    ],
  },
  {
    label: "Contabilidades",
    slug: "contabilidade",
    itens: [
      {
        pergunta: "Vocês dão suporte a softwares fiscais (Domínio, Alterdata, Totvs)?",
        resposta:
          "Sim. Suportamos instalação, atualização e resolução de problemas em sistemas contábeis como Domínio, Alterdata, Totvs, Questor e outros. Nossos técnicos entendem o impacto de uma falha em período de fechamento.",
      },
      {
        pergunta: "Como vocês lidam com o pico de demanda em fechamento de mês/ano?",
        resposta:
          "Nos períodos críticos (SPED, IRPF, fechamento de balanço), priorizamos chamados de contabilidades e alocamos técnico dedicado para garantir que nenhuma falha comprometa os prazos da Receita Federal.",
      },
      {
        pergunta: "Fazem backup automático dos arquivos contábeis?",
        resposta:
          "Sim. Configuramos rotinas de backup diário automático com retenção mínima de 90 dias, armazenamento em nuvem redundante e testes mensais de restauração. Você nunca perde um arquivo fiscal.",
      },
      {
        pergunta: "Posso contratar suporte por demanda ou precisa ser mensal?",
        resposta:
          "Trabalhamos com contratos mensais recorrentes, que garantem SLA e previsibilidade de custos. Para demandas pontuais (implantação, migração, projeto), também fazemos proposta por projeto. Fale conosco para entender a melhor opção.",
      },
    ],
  },
  {
    label: "PMEs em Geral",
    slug: "pme",
    itens: [
      {
        pergunta: "Há fidelidade mínima no contrato?",
        resposta:
          "Trabalhamos com contratos mensais sem multa de cancelamento após os primeiros 30 dias. Acreditamos que você fica porque recebe valor, não porque está preso a um contrato.",
      },
      {
        pergunta: "Qual a diferença entre o suporte técnico e a gestão completa de TI?",
        resposta:
          "O suporte técnico resolve problemas pontuais — chamados, manutenções, incidentes. A gestão completa inclui isso mais o planejamento estratégico da infraestrutura, segurança proativa, acompanhamento de licenças e relatórios gerenciais. A gestão é o modelo mais contratado.",
      },
      {
        pergunta: "Atende somente no escritório ou também em home office?",
        resposta:
          "Atendemos presencialmente no escritório (Brooklin, Berrini, Moema, Paulista e região) e remotamente para qualquer localização. Para colaboradores em home office, configuramos acesso seguro (VPN) e suporte remoto direto à estação.",
      },
      {
        pergunta: "Como é feita a transição de outro fornecedor de TI?",
        resposta:
          "Nossa equipe realiza um diagnóstico inicial completo sem custo, mapeia toda a infraestrutura existente e elabora um plano de transição com zero impacto na operação. A migração geralmente leva 1 a 2 semanas.",
      },
    ],
  },
];

export const FaqSection = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("advocacia");
  const [abertos, setAbertos] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setAbertos((prev) => ({ ...prev, [key]: !prev[key] }));

  const categoria = categorias.find((c) => c.slug === categoriaAtiva)!;

  return (
    <section
      id="faq-section"
      className="py-20 bg-slate-50 scroll-mt-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Respostas diretas para os segmentos que mais atendemos em São Paulo.
          </p>
        </div>

        {/* Abas de categoria */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categorias.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => {
                setCategoriaAtiva(cat.slug);
                setAbertos({});
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                categoriaAtiva === cat.slug
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Itens */}
        <div className="space-y-3">
          {categoria.itens.map((item, i) => {
            const key = `${categoriaAtiva}-${i}`;
            const aberto = !!abertos[key];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => toggle(key)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={aberto}
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-200 ${
                      aberto ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {aberto && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Rodapé */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Não encontrou sua resposta?{" "}
          <a
            href={waHref("Olá! Tenho uma dúvida sobre suporte de TI para minha empresa em SP.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Fale com um especialista agora →
          </a>
        </p>

      </div>
    </section>
  );
};
