"use client";

import { useEffect } from "react";
import { waHref } from "@/lib/whatsapp";

export default function WhatsappRedirectPage() {
  // waHref injeta a tag [ADS-SP] — faltava aqui (link montado à mão).
  const whatsappUrl = waHref("Olá! Gostaria de solicitar um diagnóstico técnico para a minha empresa. Vi a garantia de atendimento rápido no site e aguardo o contato.");

  useEffect(() => {
    // Aguarda 1.5 segundos para o GTM disparar a conversão e redireciona
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1500);

    return () => clearTimeout(timer);
  }, [whatsappUrl]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        textAlign: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#333" }}>
        Aguarde, estamos direcionando para o WhatsApp...
      </h2>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        Caso não abra automaticamente,{" "}
        <a
          href={whatsappUrl}
          style={{ color: "#0070f3", textDecoration: "underline" }}
        >
          clique aqui
        </a>
        .
      </p>
    </div>
  );
}
