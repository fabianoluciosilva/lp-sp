"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const ContactFormSection = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio (substitua por API futuramente)
    setTimeout(() => {
      setLoading(false);
      router.push("/obrigado");
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A TI da sua Empresa em Mãos Especialistas
        </h2>

        <p className="text-gray-300 mb-10">
          Atendimento corporativo de alto nível com SLA agressivo e resposta rápida.  
          Exclusivo para empresas em São Paulo.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-3xl shadow-xl space-y-6 text-left"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Nome</label>
            <input
              type="text"
              required
              placeholder="Seu nome"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">E-mail Corporativo</label>
            <input
              type="email"
              required
              placeholder="seu@emaildaempresa.com.br"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Telefone / WhatsApp</label>
            <input
              type="tel"
              required
              placeholder="(11) 9XXXX-XXXX"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Como podemos acelerar o seu negócio hoje?
            </label>
            <textarea
              rows={4}
              required
              placeholder="Descreva o tamanho da sua operação e sua principal necessidade de TI"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Receber Contato de um Especialista em 5 Minutos"}
          </button>

          <p className="text-xs text-gray-400 text-center mt-2">
            Atendimento exclusivo B2B • Não prestamos suporte para pessoa física
          </p>
        </form>
      </div>
    </section>
  );
};
