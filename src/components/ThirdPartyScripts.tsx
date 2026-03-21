"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export const ThirdPartyScripts = () => {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const loadScripts = () => setCanLoad(true);

    // Carrega IMEDIATAMENTE ao interagir
    window.addEventListener("scroll", loadScripts, { once: true, passive: true });
    window.addEventListener("touchstart", loadScripts, { once: true, passive: true });
    window.addEventListener("mousemove", loadScripts, { once: true, passive: true });
    window.addEventListener("click", loadScripts, { once: true, passive: true });

    // Timer de 7 segundos para garantir que o PageSpeed termine antes dos scripts pesados
    const timer = setTimeout(loadScripts, 7000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("click", loadScripts);
    };
  }, []);

  if (!canLoad) return null;

  return (
    <>
      {/* GTM removido — tag Google Ads já instalada diretamente no layout.tsx */}

      <Script
        id="leadster-script"
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/c07192ba-4aff-477b-b040-303aefc35b33-loader.js"
      />
    </>
  );
};
