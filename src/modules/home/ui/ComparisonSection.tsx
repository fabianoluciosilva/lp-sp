import { CheckCircle2, XCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o componente

const comparisonData = [
  {
    title: "1. Tempo de Resposta",
    bad: "Sua operação para e você fica horas (ou dias) esperando um retorno, enquanto a empresa perde dinheiro.",
    good: "SLA de 5 minutos. Atendimento imediato para que a sua equipe não perca um segundo de produtividade.",
  },
  {
    title: "2. Prevenção vs. Apagar Incêndios",
    bad: "O suporte só age depois que o servidor já caiu e o prejuízo operacional já foi gerado.",
    good: "Monitoramento 24/7. Antecipamos e corrigimos falhas silenciosas antes que afetem a sua empresa.",
  },
  {
    title: "3. Quedas de Internet e Rede",
    bad: "Quando a internet da operadora falha, o escritório inteiro cruza os braços e o trabalho para completamente.",
    good: "Alta Disponibilidade (Failover). Links redundantes: se uma conexão cair, a outra assume instantaneamente.",
  },
  {
    title: "4. Organização e Transparência",
    bad: "Pedidos desorganizados pelo WhatsApp do técnico, sem métricas, sem histórico e sem gestão de licenças.",
    good: "Gestão Nível Enterprise. Portal de Help Desk, relatórios gerenciais e controle absoluto do seu parque tecnológico.",
  },
  {
    title: "5. Nível Técnico da Equipe",
    bad: "Dependência de profissionais juniores ou 'faz-tudo' que não dominam infraestruturas críticas.",
    good: "+20 anos de expertise. Equipe de engenharia sênior especialista em servidores e ambientes corporativos complexos.",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sua TI atual aguenta o ritmo de São Paulo?
          </h2>
          <p className="text-lg text-gray-600">
            Veja a diferença entre depender de um suporte reativo e ter a{" "}
            <span className="font-semibold text-blue-600">
              Simples Solução TI
            </span>{" "}
            garantindo a alta performance da sua operação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna TI Comum */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
            <div className="bg-red-50 py-6 text-center border-b border-red-100">
              <h3 className="text-xl font-bold text-red-800">
                ❌ O Suporte de TI Amador
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-8">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.bad}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Simples Solução TI */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden transform lg:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-600 py-6 text-center">
              <h3 className="text-xl font-bold text-white">
                ✅ A Simples Solução TI
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-8 bg-blue-50/30">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      {item.good}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- INÍCIO DO BOTÃO DE WHATSAPP --- */}
        <div className="mt-16 text-center">
          <WhatsAppButton 
            buttonText="Quero uma TI Profissional"
            message="Olá! Vi o comparativo no site da Simples Solução e quero parar de apagar incêndios na TI da minha empresa em SP. Podemos conversar?"
          />
        </div>
        {/* --- FIM DO BOTÃO DE WHATSAPP --- */}

      </div>
    </section>
  );
};
