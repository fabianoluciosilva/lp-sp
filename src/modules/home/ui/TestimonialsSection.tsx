import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
            Mais de 20 anos e 100 empresas atendidas no Rio de Janeiro. Agora chegamos a São Paulo para levar o mesmo nível de excelência para a terra da garoa.
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

          {/* Depoimento Profit Contabilidade — único cliente SP */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-8">
              {/* Badge SP */}
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
                "O suporte é rápido, profissional e realmente resolve. Reduzimos falhas, ganhamos performance e hoje temos tranquilidade com nossa TI."
              </p>
              <div className="border-t border-white/20 pt-4 flex flex-col items-start gap-2">
                <div className="relative h-10 w-32">
                  <Image
                    src="/feedback-profit.webp"
                    alt="Logo da empresa Profit Contabilidade"
                    fill
                    className="object-contain object-left"
                    sizes="150px"
                  />
                </div>
                <p className="text-sm text-gray-300 font-medium">Profit Contabilidade</p>
              </div>
            </CardContent>
          </Card>

          {/* Card vaga 1 */}
          <a
            href="https://wa.me/552140421350?text=Ol%C3%A1!%20Vi%20o%20espa%C3%A7o%20reservado%20no%20site%20e%20quero%20saber%20mais%20sobre%20o%20suporte%20de%20TI%20para%20minha%20empresa%20em%20SP."
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="h-full bg-transparent backdrop-blur-md border border-dashed border-white/20 hover:border-blue-400/50 hover:bg-blue-500/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[260px]">
                {/* Ícone com pulso */}
                <div className="relative flex items-center justify-center mb-5">
                  <div className="absolute w-12 h-12 rounded-full border border-blue-400/20 animate-ping" />
                  <div className="relative w-12 h-12 rounded-full border border-dashed border-blue-400/40 flex items-center justify-center group-hover:border-blue-400/70 group-hover:bg-blue-500/10 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-base font-bold text-white/60 group-hover:text-white/80 transition-colors mb-2">
                  Sua empresa aqui
                </p>
                <p className="text-sm text-white/30 leading-relaxed max-w-[200px]">
                  Seja um dos primeiros em SP a contar com a TI que já transforma empresas no Rio de Janeiro.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400/70 group-hover:text-blue-400 mt-5 transition-colors">
                  Falar com especialista →
                </p>
              </CardContent>
            </Card>
          </a>

          {/* Card vaga 2 */}
          <a
            href="https://wa.me/552140421350?text=Ol%C3%A1!%20Vi%20o%20espa%C3%A7o%20reservado%20no%20site%20e%20quero%20saber%20mais%20sobre%20o%20suporte%20de%20TI%20para%20minha%20empresa%20em%20SP."
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="h-full bg-transparent backdrop-blur-md border border-dashed border-white/20 hover:border-blue-400/50 hover:bg-blue-500/5 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[260px]">
                {/* Ícone com pulso — delay diferente */}
                <div className="relative flex items-center justify-center mb-5">
                  <div className="absolute w-12 h-12 rounded-full border border-blue-400/20 animate-ping [animation-delay:0.8s]" />
                  <div className="relative w-12 h-12 rounded-full border border-dashed border-blue-400/40 flex items-center justify-center group-hover:border-blue-400/70 group-hover:bg-blue-500/10 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-base font-bold text-white/60 group-hover:text-white/80 transition-colors mb-2">
                  Sua empresa aqui
                </p>
                <p className="text-sm text-white/30 leading-relaxed max-w-[200px]">
                  Advocacias e contabilidades em SP que querem TI de alto nível com SLA garantido e atendimento humano.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400/70 group-hover:text-blue-400 mt-5 transition-colors">
                  Falar com especialista →
                </p>
              </CardContent>
            </Card>
          </a>

        </div>

        {/* Rodapé */}
        <p className="text-center text-sm text-gray-500 mt-12 max-w-lg mx-auto leading-relaxed">
          Estamos chegando em São Paulo com a mesma dedicação que nos tornou referência no Rio de Janeiro.{" "}
          <a
            href="https://wa.me/552140421350?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20entre%20os%20primeiros%20clientes%20da%20Simples%20Solu%C3%A7%C3%A3o%20em%20SP."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            Garanta sua vaga entre os primeiros →
          </a>
        </p>

      </div>
    </section>
  );
};
