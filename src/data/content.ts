export const content = {
  home: {
    hero: {
      title: "Daily Dose",
      subtitle: "Professionelle Dienstleistungen für Ihr Unternehmen",
      description: "Wir unterstützen Sie dabei, Ihre Geschäftsziele zu erreichen und Ihr Unternehmen erfolgreich zu entwickeln. Mit unserer Expertise und individuellen Lösungen bringen wir Sie voran.",
      primaryButton: {
        text: "Jetzt starten",
        href: "/kontakt"
      },
      secondaryButton: {
        text: "Mehr erfahren",
        href: "/dienstleistungen"
      }
    },
    sections: [
      {
        type: "text",
        title: "Warum Daily Dose?",
        content: "Wir verstehen, dass jedes Unternehmen einzigartig ist. Deshalb bieten wir maßgeschneiderte Lösungen, die speziell auf Ihre Bedürfnisse zugeschnitten sind.\n\nUnser erfahrenes Team arbeitet eng mit Ihnen zusammen, um nachhaltige Ergebnisse zu erzielen und Ihr Unternehmen zum Erfolg zu führen.",
        centered: true,
        backgroundColor: "gray" as const
      },
      {
        type: "customVideo",
        title: "Innovative Lösungen",
        content: "Mit modernsten Technologien und bewährten Methoden entwickeln wir Lösungen, die Ihr Unternehmen voranbringen.\n\nUnsere Expertise umfasst verschiedene Bereiche, von der strategischen Planung bis zur praktischen Umsetzung.",
        backgroundColor: "gray" as const
      }
    ]
  },
  dienstleistungen: {
    title: "Unsere Dienstleistungen",
    content: "Wir bieten eine umfassende Palette von Dienstleistungen, die darauf ausgelegt sind, Ihr Unternehmen zu stärken und zu erweitern.\n\nVon der strategischen Beratung bis zur praktischen Umsetzung - wir sind Ihr Partner für nachhaltigen Erfolg.",
    services: [
      {
        id: 1,
        title: "Social Media Strategy",
        description: "Entwicklung einer maßgeschneiderten Social Media Strategie, die zu Ihrem Unternehmen und Ihren Zielen passt.",
        icon: "📱",
        color: "from-blue-500 to-purple-600"
      },
      {
        id: 2,
        title: "Content Creation",
        description: "Professioneller Content für alle Social Media Kanäle - von Posts bis zu Videos, alles aus einer Hand.",
        icon: "🎨",
        color: "from-pink-500 to-orange-500"
      },
      {
        id: 3,
        title: "Community Management",
        description: "Aktive Betreuung Ihrer Social Media Kanäle, Interaktion mit Followern und Aufbau einer loyalen Community.",
        icon: "👥",
        color: "from-green-500 to-teal-500"
      },
      {
        id: 4,
        title: "Analytics & Reporting",
        description: "Detaillierte Auswertung Ihrer Social Media Performance mit regelmäßigen Reports und Optimierungsvorschlägen.",
        icon: "📊",
        color: "from-purple-500 to-pink-500"
      }
    ]
  },
  prozess: {
    title: "Unsere Herangehensweise",
    subtitle: "Von der Idee bis zur Veröffentlichung - unser durchdachter Workflow",
    steps: [
      {
        id: 1,
        title: "Videodreh direkt beim Kunden vor Ort",
        description: "Authentischer Content entsteht dort, wo Ihr Unternehmen lebt. Wir kommen zu Ihnen und produzieren hochwertigen Video-Content direkt in Ihrem Arbeitsumfeld.",
        icon: "🎬",
        color: "from-blue-500 to-cyan-500",
        details: "Professionelle Ausrüstung • Flexible Termine • Authentische Atmosphäre"
      },
      {
        id: 2,
        title: "Schnitt und Produktion",
        description: "Aus Ihrem Rohmaterial entstehen perfekt geschnittene, markengerechte Videos und Posts, die Ihre Botschaft optimal transportieren.",
        icon: "✂️",
        color: "from-purple-500 to-pink-500",
        details: "Professioneller Schnitt • Color Grading • Sound Design • Branding"
      },
      {
        id: 3,
        title: "Content-Strategie & Redaktionsplan",
        description: "Strategische Planung Ihrer Social Media Präsenz mit durchdachtem Redaktionsplan, der Ihre Zielgruppe optimal anspricht.",
        icon: "📋",
        color: "from-emerald-500 to-teal-500",
        details: "Strategische Planung • Zielgruppenanalyse • Content-Kalender • Hashtag-Strategie"
      },
      {
        id: 4,
        title: "Feedbackschleifen und Freigabeprozesse",
        description: "Transparente Kommunikation durch strukturierte Freigabeprozesse. Sie behalten die volle Kontrolle über Ihren Content.",
        icon: "🔄",
        color: "from-orange-500 to-red-500",
        details: "Klare Freigabeprozesse • Revisions-Rounds • Direktes Feedback • Schnelle Anpassungen"
      },
      {
        id: 5,
        title: "Regelmäßige Veröffentlichung",
        description: "Kontinuierliche Präsenz durch regelmäßige Posts zur optimalen Zeit, um maximale Reichweite und Engagement zu erzielen.",
        icon: "📅",
        color: "from-indigo-500 to-purple-500",
        details: "Timing-Optimierung • Cross-Platform Publishing • Performance Tracking • Community Management"
      }
    ]
  },
  referenzen: {
    title: "Unsere Referenzen",
    content: "Wir sind stolz auf die erfolgreichen Projekte, die wir für unsere Kunden realisiert haben.\n\nUnsere Arbeit spricht für sich - von kleinen Startups bis hin zu etablierten Unternehmen haben wir bereits vielen Kunden dabei geholfen, ihre Ziele zu erreichen.\n\nVertrauen Sie auf unsere Erfahrung und lassen Sie sich von unseren Erfolgsgeschichten inspirieren."
  },
  ueberUns: {
    hero: {
      title: "Lernen Sie uns kennen.",
      content: "Ich bin Amelie Klein, Gründerin von Daily Dose of Content. Mein Team und ich haben es uns zur Aufgabe gemacht Mittelständischen Unternehmen eine Sichtbarkeit auf den Sozialen Medien zu schaffen.",
      image: "/24-07 - JR Consulting GmbH - Fotos CEO - Studio-5499 2.JPG",
      imagePosition: "left" as const
    },
    sections: [
      {
        type: "text",
        title: "Unser Leitbild",
        content: "Soziale Medien sind heute unverzichtbar - sowohl im privaten als auch im geschäftlichen Bereich.\nDennoch fehlt es vielen Unternehmen im Alltag an Zeit, Know-how oder Ressourcen, um ihren Social Media Auftritt strategisch und konsequent umzusetzen. Oft bleibt das Thema auf der Strecke - oder es werden hohe Summen in Agenturen investiert, ohne das messbare Ergebnisse erzielt werden.\n\n**Genau hier setzten wir an**\n\nBei Daily Dose of Content übernehmen wir nicht nur die komplette social media Betreuung - wir schaffen echten Mehrwert. Mit klarer Strategie, professionellem Content und kreativem ideen sorgen wir dafür, dass Ihre Marke sichtbar wird, Vertrauen aufbaut und langfristig wächst.\n\n**Effizient, individuell und mit spürbaren Ergebnis.**",
        backgroundColor: "white" as const
      },
      {
        type: "imageText",
        title: "Unsere Vision",
        content: "Unternehmen sollen sich keine Gedanken mehr über Social Media machen müssen - wir übernehmen alles. Schnell, effizient und professionell sorgen wir für einen starken Auftritt, während unsere Kund:innen sich voll auf ihr Kerngeschäft konzentrieren können.",
        imagePosition: "right" as const,
        backgroundColor: "gray" as const,
        images: ["/IMG_7732 2.JPG"],
        button: {
          text: "Kontakt aufnehmen",
          href: "/kontakt"
        }
      }
    ]
  },
  kontakt: {
    title: "Kontakt",
    content: "Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren?\n\nWir freuen uns darauf, von Ihnen zu hören und gemeinsam zu besprechen, wie wir Ihnen helfen können.\n\nKontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.\n\nE-Mail: info@dailydose.de\nTelefon: +49 123 456 789"
  }
}