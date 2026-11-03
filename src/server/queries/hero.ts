import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Barcelona"] as string[];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Seguimos financiando sueños",
  "subtitle": "Intermediación financiera e hipotecaria independiente en Barcelona: buscamos la mejor hipoteca y la mejor solución financiera para cada cliente, particular o empresa.",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/278/hero/background-web_TLlN7Mnb.jpg",
  "type": "image"
}],
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/278/hero/background-web_TLlN7Mnb.jpg",
  "backgroundVideo": "",
  "backgroundType": "image",
  "findPropertyButton": "Consulta gratuita",
  "contactButton": "Contáctanos"
} as HeroProps | null;
}
