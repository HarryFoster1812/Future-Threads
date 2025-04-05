export const gameEvents = [
    {
        id: 1,
        text: "A neighboring country threatens war. How do you respond?",
        cards: [
            {
                id: 1,
                title: "Declare War",
                description: "Show strength but risk lives.",
                effects: { military: 15, politics: -10, qualityOfLife: -5 }
            },
            {
                id: 2,
                title: "Diplomatic Talks",
                description: "Negotiate peacefully.",
                effects: { politics: 10, economy: -5 }
            },
            {
                id: 3,
                title: "Invest in Defense",
                description: "Prepare without aggression.",
                effects: { military: 5, economy: -10, environment: -5 }
            }
        ]
    },
    {
        id: 2,
        text: "An environmental crisis looms. What's your priority?",
        cards: [
            {
                id: 1,
                title: "Bailout Corporations",
                description: "Save big businesses to protect jobs.",
                effects: { economy: 15, qualityOfLife: -10 }
              },
              {
                id: 2,
                title: "Stimulus Checks",
                description: "Put money directly in citizens' hands.",
                effects: { economy: 5, qualityOfLife: 10, military: -5 }
              },
              {
                id: 3,
                title: "Do Nothing",
                description: "Let the market correct itself.",
                effects: { economy: -20, politics: -15 }
              }
        ]
    },
    {
        id: 3,
        text: "The economy is collapsing. Banks need bailouts and unemployment is rising.",
        cards: [
          {
            id: 1,
            title: "Bailout Corporations",
            description: "Save big businesses to protect jobs.",
            effects: { economy: 15, qualityOfLife: -10 }
          },
          {
            id: 2,
            title: "Stimulus Checks",
            description: "Put money directly in citizens' hands.",
            effects: { economy: 5, qualityOfLife: 10, military: -5 }
          },
          {
            id: 3,
            title: "Do Nothing",
            description: "Let the market correct itself.",
            effects: { economy: -20, politics: -15 }
          }
        ]
      },
      {
        id: 4,
        text: "A massive hurricane approaches coastal cities. Evacuations are underway.",
        cards: [
          {
            id: 1,
            title: "Mobilize Military",
            description: "Deploy troops for rescue operations.",
            effects: { military: 10, qualityOfLife: 5, economy: -15 }
          },
          {
            id: 2,
            title: "International Aid",
            description: "Request help from other nations.",
            effects: { politics: 15, environment: 5, military: -5 }
          },
          {
            id: 3,
            title: "Focus on Prevention",
            description: "Invest in infrastructure for future storms.",
            effects: { environment: 20, economy: -10 }
          }
        ]
      },
      {
        id: 5,
        text: "A deadly virus is spreading rapidly through the population.",
        cards: [
          {
            id: 1,
            title: "Lockdown Cities",
            description: "Restrict movement to contain spread.",
            effects: { qualityOfLife: -15, economy: -20, environment: 10 }
          },
          {
            id: 2,
            title: "Vaccine Research",
            description: "Fund emergency medical research.",
            effects: { qualityOfLife: 10, economy: -15, politics: 5 }
          },
          {
            id: 3,
            title: "Herd Immunity",
            description: "Let the virus run its course.",
            effects: { qualityOfLife: -25, military: -10, economy: 5 }
          }
        ]
      }
];