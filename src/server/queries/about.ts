import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "title": "Sobre Nosotros",
  "subtitle": "Seguimos financiando sueños",
  "content": "En GS Capital somos una empresa de intermediación financiera independiente con sede en Carrer de Pelai 11, en Barcelona. Nuestro equipo reúne profesionales con experiencia en el sector desde 1999 y trabaja cada día para ayudar a particulares y empresas a encontrar la mejor hipoteca y la solución financiera que mejor encaja con su situación.",
  "content2": "Nuestra propuesta es sencilla: trabajamos con las principales entidades bancarias del país para negociar en tu nombre y tramitar tu hipoteca con rapidez. El primer análisis es gratuito y sin compromiso, y te confirmamos la viabilidad de la operación en 48 horas. Seguimos financiando sueños, con cercanía y claridad.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/278/website/about-web_nw-LXN-n.jpg",
  "services": [{
  "title": "Hipoteca bancaria",
  "icon": "Home"
}, {
  "title": "Planificación financiera",
  "icon": "TrendingUp"
}, {
  "title": "Financiación privada",
  "icon": "Banknote"
}, {
  "title": "Asesoramiento fiscal e inversiones",
  "icon": "PiggyBank"
}],
  "maxServicesDisplayed": 6,
  "servicesSectionTitle": "Nuestros Servicios",
  "aboutSectionTitle": "Nuestra Misión",
  "buttonName": "Contacta a Nuestro Equipo",
  "showKPI": true,
  "originsTitle": "De dónde venimos",
  "originsContent": "Nuestro equipo acumula experiencia en el sector financiero desde 1999. Con los años hemos construido una relación estrecha con las principales entidades bancarias, lo que nos da una posición preferente para negociar y tramitar las hipotecas de nuestros clientes. Trabajamos bajo la Ley de Intermediación Financiera de 2009, con la transparencia y el rigor que tu operación merece.",
  "values": [{
  "title": "Rapidez",
  "description": "Tramitamos la hipoteca con la máxima rapidez.",
  "icon": "Zap"
}, {
  "title": "Honradez y claridad",
  "description": "Trabajamos con transparencia en cada paso de la operación.",
  "icon": "ShieldCheck"
}, {
  "title": "Legalidad",
  "description": "Cumplimos la Ley de Intermediación Financiera y todas las garantías para nuestros clientes.",
  "icon": "Scale"
}],
  "extendedServices": [{
  "title": "Hipoteca bancaria",
  "description": "Conseguimos la mejor hipoteca para cada perfil de cliente, hasta el 100 %. El análisis es gratuito, rápido y sin compromiso, y confirmamos la viabilidad de la operación en 48 horas.",
  "icon": "Home"
}, {
  "title": "Planificación financiera",
  "description": "Préstamos personales, reunificación de deudas para reducir la cuota, liquidez para pymes, financiación para empresas y asesoramiento a inmobiliarias. También te ayudamos a amortizar tu hipoteca antes o a ahorrar cada mes.",
  "icon": "TrendingUp"
}, {
  "title": "Financiación privada",
  "description": "Liquidez para reformas, impagos u otros proyectos mediante una hipoteca de capital privado, incluso con incidencias en RAI o ASNEF, con garantía hipotecaria.",
  "icon": "Banknote"
}, {
  "title": "Asesoramiento fiscal e inversiones",
  "description": "Planificamos tu inversión patrimonial con garantía inmobiliaria o de las principales entidades financieras.",
  "icon": "PiggyBank"
}],
  "nosotrosPageTitle": "Sobre Nosotros",
  "nosotrosPageSubtitle": "Un equipo con experiencia desde 1999 que busca la mejor solución hipotecaria y financiera para cada cliente en Barcelona.",
  "servicesPageTitle": "Nuestros Servicios",
  "servicesPageSubtitle": "Hipotecas, refinanciación, financiación privada y asesoramiento para particulares, autónomos y empresas en Barcelona y su área metropolitana.",
  "kpi1Name": "Experiencia en el sector",
  "kpi1Data": "Desde 1999",
  "kpi2Name": "Viabilidad de tu operación",
  "kpi2Data": "48 h",
  "kpi3Name": "Financiación",
  "kpi3Data": "Hasta 100 %",
  "kpi4Name": "Valoración en Google",
  "kpi4Data": "4,9/5",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/278/hero/servicios-web_9FhH2qZx.jpg",
  "servicesHeroVideo": "",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/278/hero/nosotros-web_EkbWCTnP.jpg",
  "nosotrosHeroVideo": ""
} as AboutProps | null;
}
