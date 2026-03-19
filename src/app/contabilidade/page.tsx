import { Metadata } from "next";
import ContabilidadeClient from "./ContabilidadeClient";
import { inter, outfit } from "./fonts";

export const metadata: Metadata = {
  title: "TI Especializada em Contabilidade RJ | Suporte Alterdata",
  description: "Suporte técnico especializado em Alterdata, Domínio Sistemas e Nasajon no Rio de Janeiro. Resolva lentidão e travamentos.",
  alternates: {
    canonical: 'https://rj.simplessolucao.com.br/contabilidade'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <ContabilidadeClient inter={inter} outfit={outfit} />;
}
