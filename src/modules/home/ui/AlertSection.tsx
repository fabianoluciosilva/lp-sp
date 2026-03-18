import { AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton"; // Importando o novo componente

export const AlertSection = () => {
  return (
    <section
      id="alert-section"
      className="py-20 bg-red-50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border-4 border-red-500 rounded-3xl p-12 shadow-2xl">
          <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O Ritmo de São Paulo Não Perdoa Falhas de TI
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Na capital paulista, a concorrência não dorme. Lentidão nos sistemas, quedas de servidor e ataques cibernéticos significam mais do que dor de cabeça: geram <span className="font-bold">paralisação da sua equipe, perda de clientes para o concorrente e prejuízos financeiros reais</span>.
          </p>

          <p className="text-xl font-semibold text-red-600 mb-8">
            Não deixe sua tecnologia ser o gargalo do seu crescimento. Antecipe-se aos problemas.
          </p>

          {/* BOTÃO FIXO DO WHATSAPP USANDO O COMPONENTE */}
          <WhatsAppButton 
            buttonText="Blindar Minha Operação Agora"
            message="Olá! Vi o alerta no site e quero garantir que minha empresa em SP não sofra com paradas de TI. Como a Simples Solução pode me ajudar?"
          />
          
        </div>
      </div>
    </section>
  );
};
