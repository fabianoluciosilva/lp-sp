import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { waHref } from "@/lib/whatsapp";

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials-section"
      className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden scroll-mt-24"
      style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10 hidden md:block pointer-events-none">
        <Image
          src="/imagem1.webp"
          alt="Ambiente corporativo moderno"
          fill
          sizes="(min-width: 768px) 100vw, 0vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quem Confia na Simples Solução TI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 20 anos e 100 empresas atendidas. Da infraestrutura de produtoras audiovisuais a clínicas de saúde de alta performance — o mesmo nível de excelência em São Paulo.
          </p>
        </div>

        {/* Faixa de credenciais RJ */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 bg-white/5 border border-white/10 rounded-2xl px-8 py-6 mb-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">+100</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Empresas atendidas</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">+20</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Anos de mercado</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5min</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">SLA de resposta</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Presença no RJ</div>
            <div className="text-sm text-gray-300 leading-relaxed">Grande Rio · Niterói<br />Baixada · Região dos Lagos</div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Depoimento Grupo PLL */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
                <span className="text-xs">📍</span>
                <span className="text-xs font-mono text-blue-300 font-medium">São Paulo · SP</span>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-100 mb-6 leading-relaxed italic">
                "Parceria estratégica essencial para nossa expansão. Infraestrutura segura, atendimento humano e respostas rápidas sempre que precisamos."
              </p>
              <div className="border-t border-white/20 pt-4 flex flex-col items-start gap-2">
                <div className="relative h-10 w-32">
                  <Image
                    src="/feedback-pll.webp"
                    alt="Logo Grupo PLL"
                    fill
                    className="object-contain object-left"
                    sizes="150px"
                  />
                </div>
                <p className="text-sm text-gray-300 font-medium">Grupo PLL</p>
              </div>
            </CardContent>
          </Card>

          {/* Depoimento Cartola Filmes */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
                <span className="text-xs">📍</span>
                <span className="text-xs font-mono text-blue-300 font-medium">São Paulo · SP</span>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-100 mb-6 leading-relaxed italic">
                "Produção audiovisual não tolera parada. A Simples Solução garantiu a infraestrutura que precisávamos para trabalhar com arquivos pesados sem interrupção. Suporte rápido e equipe que entende do negócio."
              </p>
              <div className="border-t border-white/20 pt-4 flex flex-col items-start gap-2">
                <div className="relative h-10 w-36">
                  <Image
                    src="/logo-cartolafilmes-branco.svg"
                    alt="Logo Cartola Filmes"
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
                <p className="text-sm text-gray-300 font-medium">Cartola Filmes</p>
                <p className="text-xs text-gray-500">Produtora audiovisual · SP</p>
              </div>
            </CardContent>
          </Card>

          {/* Depoimento Brain Performance Institute */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
                <span className="text-xs">📍</span>
                <span className="text-xs font-mono text-blue-300 font-medium">São Paulo · SP</span>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-100 mb-6 leading-relaxed italic">
                "Na área de saúde, segurança e disponibilidade dos sistemas são inegociáveis. A Simples Solução entendeu isso desde o primeiro dia. Dados protegidos, sistemas no ar e atendimento que realmente resolve."
              </p>
              <div className="border-t border-white/20 pt-4 flex flex-col items-start gap-2">
                <div className="relative h-10 w-36">
                  <Image
                    src="/logo-bpi-negativa.png"
                    alt="Logo Brain Performance Institute"
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
                <p className="text-sm text-gray-300 font-medium">Brain Performance Institute</p>
                <p className="text-xs text-gray-500">Instituto de saúde cerebral · SP</p>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Rodapé */}
        <p className="text-center text-sm text-gray-500 mt-12 max-w-lg mx-auto leading-relaxed">
          Sua empresa pode ser a próxima a operar com TI de alto nível em São Paulo.{" "}
          <a
            href={waHref("Olá! Vi os clientes da Simples Solução no site e quero saber como a TI da minha empresa em SP pode evoluir.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            Falar com um especialista →
          </a>
        </p>

      </div>
    </section>
  );
};
