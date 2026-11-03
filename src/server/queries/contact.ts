

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": false,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "GS Capital Barcelona",
  "address": {
  "street": "Carrer de Pelai, 11, Principal A",
  "city": "Barcelona",
  "state": "Barcelona",
  "country": "España"
},
  "phoneNumbers": {
  "main": "+34 656 587 986"
},
  "emailAddresses": {
  "info": "info@gscapital.es"
},
  "scheduleInfo": {
  "weekdays": "",
  "saturday": "",
  "sunday": ""
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=GS+CAPITAL+Carrer+de+Pelai+11+Principal+A+08001+Barcelona",
  "isDefault": true
}]
} as ContactProps | null;
}

