
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Estudi Financer GS Capital S.L.",
  "description": "GS Capital, intermediación financiera e hipotecaria independiente en Barcelona. Seguimos financiando sueños.",
  "socialLinks": {
  "facebook": "https://www.facebook.com/gscapital2/",
  "instagram": "https://www.instagram.com/_gscapital/",
  "twitter": "https://twitter.com/gscapital2",
  "linkedin": "https://es.linkedin.com/company/gscapital"
},
  "officeLocations": [{
  "name": "GS Capital Barcelona",
  "address": ["Carrer de Pelai, 11, Principal A", "Barcelona, Barcelona"],
  "phone": "+34 656 587 986",
  "email": "info@gscapital.es"
}],
  "copyright": "© 2026 GS Capital. Todos los derechos reservados."
} as FooterProps | null;
}
