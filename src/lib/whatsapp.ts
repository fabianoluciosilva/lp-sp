/**
 * Fonte única dos contatos de WhatsApp desta landing (SP).
 *
 * Todos os links de WhatsApp DEVEM ser gerados por `waHref()`, que injeta o
 * prefixo de rastreamento [ADS-SP] na mensagem — sem isso o agente de IA
 * comercial do ERP (erp-ssti) não tem como distinguir um lead desta campanha
 * Ads de um contato orgânico, e a oportunidade criada no CRM cai no rótulo
 * genérico "WhatsApp Comercial" em vez de "Landing SP (Ads)". Mesma
 * convenção da landing RJ (cliente-fabiano-simplessolucao-lp/src/components/
 * landing/shared/whatsapp.ts) — ver erp-ssti/docs/context/whatsapp.md.
 */
export const WA_NUMBER = "552140421350";

const PREFIX = "[ADS-SP] ";

/**
 * Monta um link wa.me com a mensagem já prefixada por [ADS-SP]. Passe a
 * mensagem completa (com "Olá!" etc.) — a tag é só um prefixo técnico, não
 * faz parte da saudação.
 */
export function waHref(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(PREFIX + message)}`;
}
