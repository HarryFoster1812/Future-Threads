import json


# title
# description
# image - a url of the image being used
# source - a link to a source of the info if one exists
# optimism - value from 0-1 where 0 is worst case and 1 is best case
# dateRange - 2 dates for earliest possible year (optimism of 1), latest possible year (optimism of 0)
# relevance - value 0-1 where 1 is very important and 0 is not at all important
# isPositive - boolean for if the change is good or bad
# tags - a list of tags that this falls under

### optimism reference
# 0.0 - The world ends in the next few years
# 0.1 - The world ends in the next few hundred years
# 0.2 - The world doesnt end, but gets very dystopian
# 0.3 - stuf goes quite bad, but not quite dystopia
# 0.4 - General Downwards trend, but no world ending
# 0.5 - Quality of life stays about the same
# 0.6 - Mild upwards trend, generally moving towards higher optimism bands
# 0.7 - Strong upwards trend in quality of life
# 0.8 - All world ending threats removed, e.g. climate change, war
# 0.9 - World peace, any other large scale issues solved, diseases almost all cured
# 1.0 - World enters a Utopia, all diseases cured, pain no longer exists for any living being

### relevance reference
# 0.0 -
# 0.1 -
# 0.2 -
# 0.3 -
# 0.4 - An entire country aware of this, e.g. small discovery, or election
# 0.5 - 20% humans aware of this, e.g. somewhat large discovery, but not life changing, like photo of black hole
# 0.6 - 50% of humans aware of this, e.g. big discovery science advancement, mars colony
# 0.7 - most (80%) humans would be aware of this, large effect to the relevant community,
# 0.8 - all humans would be aware of this, some, e.g. 1 country greatly effected, e.g. large scale war between 2 countries like russia/ukraine
# 0.9 - all humans are somewhat effected, e.g. world war
# 1.0 - huge effect to all humanity, e.g. nuclear war




all_tags = [
    "AI",
    "Economy",
    "Environment",
    "Space",
    "Science",
    "Medicine",
    "Natural Disaster",
    "Social",
    "Politics",
]

data = [
    {"title":"Mars Colony",
     "description":"The first permanent human settlement on Mars is likely to begin as a small base, gradually expanding into a self-sustaining colony.",
     "image":"mars_colony.jpg",
     "source":"",
     "dateRange":{"earliestYear":2030,
                  "latestYear":2060},
     "isPositive":True,
     "tags":["Space", "Science"],
     "requirements":[],
     "baseProbability":3,
     "statRanges":{
        "politics":{"min":20,"max":100,"probabilitySwing":0},
        "economy":{"min":50,"max":100,"probabilitySwing":1},
        },
     "statEffects":{
         "qualityOfLife":{"change":10,"range":5},
         "economy":{"change":-5,"range":-2}
        },
     "eventRequirements":["Moon Colony"],
     "cardRequirements":[],
     },
    {
    "title": "Humans return to the Moon",
    "description": "For the first time since 1972, humans will set foot on the Moon as part of NASA’s Artemis III mission.",
    "image": "return_to_moon.jpg",
    "source": "",
    "dateRange": {
      "earliestYear": 2026,
      "latestYear": 2028
    },
    "isPositive": True,
    "tags": ["Space", "Science"],
    "baseProbability": 5,
    "statRanges": {
      "politics": { "min": 60, "max": 100, "probabilitySwing": 1},
      "economy": {"min": 40, "max": 90, "probabilitySwing": 0 }
    },
    "statEffects": {
      "qualityOfLife": {
        "change": 2,
        "range": 1
      },
      "economy": {
        "change": 1,
        "range": 1
      },
    "eventRequirements":[],
    "cardRequirements":[],
    }
  },
    {
        "title": "Moon Colony",
        "description": "The Moon is expected to host permanent or semi-permanent bases in the 2030s. These early colonies will serve as research stations, testing grounds for Mars missions, and even potential commercial hubs",
        "image": "moon_colony.jpg",
        "source": "",
        "dateRange": {
            "earliestYear": 2030,
            "latestYear": 2050
        },
        "isPositive": True,
        "tags": ["Space", "Science"],
        "baseProbability": 6,
        "statRanges": {
            "politics": {
                "min": 40,
                "max": 90,
                "probabilitySwing": 1
            },
            "economy": {
                "min": 50,
                "max": 100,
                "probabilitySwing": 0
            }
        },
        "statEffects": {
            "qualityOfLife": {
                "change": 3,
                "range": 1
            },
            "economy": {
                "change": 4,
                "range": 2
            }
        },
        "eventRequirements": ["Humans return to the Moon"],
        "cardRequirements": [],
    },
    {
        "title": "AGI Created",
        "description": "AGI refers to a type of artificial intelligence capable of performing any intellectual task that a human can do, with the ability to learn, adapt, and generalize across a wide range of activities.",
        "image": "first_AGI.webp",
        "source": "",
        "dateRange": {
            "earliestYear": 2027,
            "latestYear": 2060
        },
        "isPositive": True,
        "tags": ["Science", "AI"],
        "baseProbability": 4,
        "statRanges": {
            "politics": {
                "min": 10,
                "max": 100,
                "probabilitySwing": 0,
            },
            "economy": {
                "min": 30,
                "max": 100,
                "probabilitySwing": 1
            }
        },
        "statEffects": {
            "qualityOfLife": {
                "change": 10,
                "range": 5
            },
            "economy": {
                "change": 8,
                "range": 5
            }
        },
        "eventRequirements": [],
        "cardRequirements": [],
    },
    {
        "title": "Commercially Viable Fusion Power",
        "description": "Fusion power is the holy grail for clean and virtually limitless energy. In fusion light atomic nuclei like hydrogen combine, forming heavier nuclei and releasing immense energy.",
        "image": "fusion_energy.jpg",
        "source": "https://en.wikipedia.org/wiki/Commercial_fusion#:~:text=The%20advent%20of%20commercial%20fusion,to%20the%20grid%20before%202035.",
        "dateRange": {
            "earliestYear": 2032,
            "latestYear": 2050
        },
        "isPositive": True,
        "tags": ["Science"],
        "baseProbability": 6,
        "statRanges": {
            "politics": {
                "min": 30,
                "max": 90,
                "probabilitySwing": 0
            },
            "economy": {
                "min": 60,
                "max": 100,
                "probabilitySwing": 1
            }
        },
        "statEffects": {
            "qualityOfLife": {
                "change": 6,
                "range": 3
            },
            "economy": {
                "change": 7,
                "range": 4
            }
        },
        "eventRequirements": [],
        "cardRequirements": [],
    },
        {
            "title": "Cure for Cancer",
            "description": "Cancer is a complex group of diseases with over 100 types, each with unique behaviors and genetic profiles. A universal cure is difficult, but not impossible.",
            "image": "cure_for_cancer.jpg",
            "source": "",
            "dateRange": {
                "earliestYear": 2025,
                "latestYear": 2050
            },
            "isPositive": True,
            "tags": ["Medicine", "Science"],
            "baseProbability": 4,
            "statRanges": {
                "politics": {
                    "min": 40,
                    "max": 90,
                    "probabilitySwing": 0
                },
                "economy": {
                    "min": 50,
                    "max": 90,
                    "probabilitySwing": 1
                }
            },
            "statEffects": {
                "qualityOfLife": {
                    "change": 12,
                    "range": 6
                },
                "economy": {
                    "change": 3,
                    "range": 2
                }
            },
        "eventRequirements": [],
        "cardRequirements": [],
        },
    {
        "title": "Exceed 2°C",
        "description": "Crossing the 2°C threshold above pre-industrial levels marks a dangerous point in climate change. This level of warming could lead to some irreversible impacts to the planet.",
        "image": "2_degrees.png",
        "source": "https://www.carbonbrief.org/analysis-when-might-the-world-exceed-1-5c-and-2c-of-global-warming/#:~:text=Similarly%2C%20if%20future%20emissions%20remain,between%20the%202030s%20and%202050s",
        "dateRange": {
            "earliestYear": 2030,
            "latestYear": 2070
        },
        "isPositive": False,
        "tags": ["Environment"],
        "baseProbability": 5,
        "statRanges": {
            "politics": {
                "min": 10,
                "max": 70,
                "probabilitySwing": -1
            },
            "economy": {
                "min": 20,
                "max": 80,
                "probabilitySwing": -1
            }
        },
        "statEffects": {
            "qualityOfLife": {
                "change": -9,
                "range": 4
            },
            "economy": {
                "change": -7,
                "range": 3
            }
        },
        "eventRequirements": [],
        "cardRequirements": [],
    },
# AI generated stuf
  {
    "title": "Asteroid Apophis Near-Earth Flyby",
    "description": "The 370-meter asteroid Apophis will pass extremely close to Earth — closer than some satellites — on Friday, April 13, 2029.",
    "image": "apophis_flyby.jpg",
    "source": ["https://www.nasa.gov/feature/planetary-defense-in-action-nasa-analysts-track-asteroid-apophis"],
    "dateRange": {
      "earliestYear": 2026,
      "latestYear": 2030
    },
    "isPositive": True,
    "tags": ["Space", "Natural Disaster", "Science"],
    "baseProbability": 3,
    "statRanges": {
      "military": {
        "min": 20,
        "max": 80,
        "probabilitySwing": 0
        }
    },
    "statEffects": {
      "qualityOfLife": {
        "change": 10,
        "range": 5
      },
      "economy": {
        "change": 5,
        "range": 2
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Climate Refugee Crisis",
    "description": "As climate change accelerates, certain regions may become uninhabitable due to flooding, heatwaves, or desertification, displacing millions.",
    "image": "climate_refugees.jpg",
    "source": ["https://www.unhcr.org/en-us/climate-change-and-displacement"],
    "dateRange": {
      "earliestYear": 2030,
      "latestYear": 2050
    },
    "isPositive": False,
    "tags": ["Environment", "Social", "Politics"],
    "baseProbability": 5,
    "statRanges": {
      "politics": {
        "min": 00,
        "max": 60,
        "probabilitySwing": -1
      },
      "economy": {
        "min": 0,
        "max": 50,
        "probabilitySwing": -1
      },
      "environment": {
        "min": 0,
        "max": 30,
        "probabilitySwing": -1
      },
      "qualityOfLife": {
        "min": 0,
        "max": 70,
        "probabilitySwing": -1
      }
    },
    "statEffects": {
      "qualityOfLife": {
        "change": -15,
        "range": 5
      },
      "economy": {
        "change": -10,
        "range": 3
      },
      "environment": {
        "change": 20,
        "range": 10
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "AI Replaces 50% of Jobs",
    "description": "Widespread adoption of advanced AI may automate nearly half of all current human jobs, disrupting economies and social systems worldwide.",
    "image": "ai_jobs.png",
    "source": ["https://www.weforum.org/agenda/2020/10/future-of-jobs-report-2020-pandemic-automation-recession/"],
    "dateRange": {
      "earliestYear": 2035,
      "latestYear": 2060
    },
    "isPositive": False,
    "tags": ["AI", "Economy", "Social"],
    "baseProbability": 4,
    "statRanges": {
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 1,
      },
      "qualityOfLife": {
        "min": 0,
        "max": 70,
        "probabilitySwing": -1
      }
    },
    "statEffects": {
      "economy": {
        "change": -15,
        "range": 5
      },
      "qualityOfLife": {
        "change": -10,
        "range": 3
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Use of Autonomous AI in Warfare",
    "description": "A military force deploys AI-controlled autonomous weapons capable of independently selecting and engaging targets without human oversight.",
    "image": "ai_warfare.jpg",
    "source": ["https://www.un.org/en/artificial-intelligence/weaponization"],
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2045
    },
    "isPositive": False,
    "tags": ["AI", "Politics", "Social"],
    "baseProbability": 3,
    "statRanges": {
      "politics": {
        "min": 00,
        "max": 60,
        "probabilitySwing": -1
      },
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 0.2
      },
      "military": {
        "min": 50,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "military": {
        "change": 15,
        "range": 5
      },
      "qualityOfLife": {
        "change": -10,
        "range": 4
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Limited Nuclear Conflict",
    "description": "A regional nuclear exchange involving a small number of warheads disrupts global systems and escalates geopolitical tensions, triggering widespread humanitarian crises.",
    "image": "limited_nuclear_war.jpg",
    "source": ["https://www.armscontrol.org/factsheets/nuclearscenarios"],
    "dateRange": {
      "earliestYear": 2025,
      "latestYear": 2040
    },
    "isPositive": False,
    "tags": ["Politics", "Natural Disaster", "Environment"],
    "baseProbability": 6,
    "statRanges": {
      "politics": {
        "min": 0,
        "max": 60,
        "probabilitySwing": -1
      },
      "economy": {
        "min": 50,
        "max": 100,
        "probabilitySwing": 1
      },
      "military": {
        "min": 70,
        "max": 100,
        "probabilitySwing": 1
      },
      "qualityOfLife": {
        "min": 0,
        "max": 50,
        "probabilitySwing": -1
      }
    },
    "statEffects": {
      "environment": {
        "change": -30,
        "range": 10
      },
      "military": {
        "change": 20,
        "range": 5
      },
      "qualityOfLife": {
        "change": -20,
        "range": 8
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Global Ban on Autonomous Weapons",
    "description": "The international community agrees to a legally binding treaty banning fully autonomous weapons, aiming to prevent AI-driven conflicts.",
    "image": "ai_weapon_ban.jpg",
    "source": ["https://www.hrw.org/news/2023/11/09/global-push-ban-killer-robots"],
    "dateRange": {
      "earliestYear": 2028,
      "latestYear": 2045
    },
    "isPositive": True,
    "tags": ["Politics", "AI", "Social"],
    "baseProbability": 7,
    "statRanges": {
      "politics": {
        "min": 60,
        "max": 100,
        "probabilitySwing": 1
      },
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 0
      },
    },
    "statEffects": {
      "politics": {
        "change": 10,
        "range": 5
      },
      "economy": {
        "change": 5,
        "range": 2
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
    {
        "title": "World War III Scenario Avoided",
        "description": "A near-miss escalatory incident between major powers is defused through rapid diplomacy, narrowly avoiding global war.",
        "image": "ww3_avoided.jpg",
        "source": [
            "https://www.brookings.edu/articles/the-future-of-war-scenarios-and-policy-options/"],
        "dateRange": {
            "earliestYear": 2025,
            "latestYear": 2050
        },
        "isPositive": True,
        "tags": ["Politics", "Social"],
        "baseProbability": 4,
        "statRanges": {
            "politics": {
                "min": 40,
                "max": 100,
                "probabilitySwing": 1
            },
            "economy": {
                "min": 30,
                "max": 60,
                "probabilitySwing": 0
            },
            "military": {
                "min": 40,
                "max": 100,
                "probabilitySwing": -1
            },
        },
        "statEffects": {
            "politics": {
                "change": 10,
                "range": 5
            },
            "qualityOfLife": {
                "change": 15,
                "range": 8
            }
        },
    "eventRequirements": [],
    "cardRequirements": [],
        },
        {
            "title": "Treaty to Eliminate All Nuclear Weapons",
            "description": "A landmark global agreement leads to verified dismantling of all nuclear weapons, reducing existential risk for humanity.",
            "image": "nuclear_disarmament.webp",
            "source": ["https://www.un.org/disarmament/wmd/nuclear/tpnw/"],
            "dateRange": {
                "earliestYear": 2035,
                "latestYear": 2100
            },
            "isPositive": True,
            "tags": ["Politics", "Social", "Environment"],
            "baseProbability": 5,
            "statRanges": {
                "politics": {
                    "min": 60,
                    "max": 100,
                    "probabilitySwing": 1
                },
                "economy": {
                    "min": 40,
                    "max": 70,
                    "probabilitySwing": 0
                },
            },
            "statEffects": {
                "politics": {
                    "change": 15,
                    "range": 8
                },
                "environment": {
                    "change": 20,
                    "range": 10
                }
            },
        "eventRequirements": [],
        "cardRequirements": [],
        },
        {
            "title": "Cyber War Causes Infrastructure Collapse",
            "description": "A massive cyberattack cripples major infrastructure — including power grids and internet — causing widespread chaos and economic damage.",
            "image": "cyberwar_infra.jpg",
            "source": ["https://www.cisa.gov/topics/cyber-threats"],
            "dateRange": {
                "earliestYear": 2025,
                "latestYear": 2040
            },
            "isPositive": False,
            "tags": ["Politics", "Economy", "Social"],
            "baseProbability": 6,
            "statRanges": {
                "politics": {
                    "min": 30,
                    "max": 70,
                    "probabilitySwing": -1
                },
                "economy": {
                    "min": 20,
                    "max": 100,
                    "probabilitySwing": 1
                },
                "military": {
                    "min": 50,
                    "max": 100,
                    "probabilitySwing": 0
                },
            },
            "statEffects": {
                "economy": {
                    "change": -15,
                    "range": -5
                },
                "qualityOfLife": {
                    "change": -20,
                    "range": -8
                }
            },
            "eventRequirements": [],
            "cardRequirements": [],
        },
        {
            "title": "Orbital Military Engagement",
            "description": "Two or more spacefaring nations engage in hostile actions in Earth orbit, targeting satellites or other space assets, marking the start of space warfare.",
            "image": "space_warfare.jpg",
            "source": ["https://www.cfr.org/backgrounder/militarization-space-outer-space-treaty"],
            "dateRange": {
                "earliestYear": 2030,
                "latestYear": 2050
            },
            "isPositive": False,
            "tags": ["Space", "Politics", "Science"],
            "baseProbability": 4,
            "statRanges": {
                "politics": {
                    "min": 0,
                    "max": 70,
                    "probabilitySwing": -1
                },
                "economy": {
                    "min": 50,
                    "max": 100,
                    "probabilitySwing": 1
                },
                "military": {
                    "min": 60,
                    "max": 100,
                    "probabilitySwing": 1
                },
            },
            "statEffects": {
                "military": {
                    "change": 20,
                    "range": 8
                },
                "qualityOfLife": {
                    "change": -15,
                    "range": -5
                }
            },
        "eventRequirements": [],
        "cardRequirements": [],
        },
        {
            "title": "Room-Temperature Superconductors",
            "description": "The discovery of room-temperature, ambient-pressure superconductors would revolutionize energy transmission, electronics, and magnetic systems.",
            "image": "superconductors.jpg",
            "source": ["https://www.nature.com/articles/s41586-020-2801-z"],
            "dateRange": {
                "earliestYear": 2030,
                "latestYear": 2050
            },
            "isPositive": True,
            "tags": ["Science"],
            "baseProbability": 7,
            "statRanges": {
                "economy": {
                    "min": 30,
                    "max": 100,
                    "probabilitySwing": 1
                },
                "military": {
                    "min": 10,
                    "max": 80,
                    "probabilitySwing": 0
                },
            },
            "statEffects": {
                "economy": {
                    "change": 20,
                    "range": 10
                },
                "qualityOfLife": {
                    "change": 15,
                    "range": 6
                }
            },
    "eventRequirements": [],
    "cardRequirements": [],
        },
        {
            "title": "Longevity Therapies Become Mainstream",
            "description": "Anti-aging treatments that significantly extend healthy human lifespan become widely available, including senolytics, telomere therapies, and gene editing.",
            "image": "longevity.jpg",
            "source": ["https://www.lifespan.io/news/senolytics-and-longevity/"],
            "dateRange": {
                "earliestYear": 2030,
                "latestYear": 2055
            },
            "isPositive": True,
            "tags": ["Medicine", "Science"],
            "baseProbability": 6,
            "statRanges": {
                "politics": {
                    "min": 40,
                    "max": 100,
                    "probabilitySwing": 0
                },
                "economy": {
                    "min": 50,
                    "max": 100,
                    "probabilitySwing": 1
                },
            },
            "statEffects": {
                "qualityOfLife": {
                    "change": 25,
                    "range": 10
                },
                "economy": {
                    "change": 15,
                    "range": 5
                }
            },
    "eventRequirements": [],
    "cardRequirements": [],
        },
  {
    "title": "First Human Brain Emulation",
    "description": "A complete simulation of a human brain at the neuronal level is achieved, representing a breakthrough in neuroscience and AI modeling.",
    "image": "brain_emulation.png",
    "source": ["https://en.wikipedia.org/wiki/Whole_brain_emulation"],
    "dateRange": {
      "earliestYear": 2040,
      "latestYear": 2080
    },
    "isPositive": True,
    "tags": ["Science", "AI"],
    "baseProbability": 4,
    "statRanges": {
      "politics": {
        "min": 30,
        "max": 70,
        "probabilitySwing": 0
      },
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "economy": {
        "change": 15,
        "range": 6
      },
      "qualityOfLife": {
        "change": 20,
        "range": 8
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Universal Antiviral Drug Created",
    "description": "A broad-spectrum antiviral treatment is developed that can neutralize a wide range of viruses, reducing the risk of future pandemics.",
    "image": "universal_antiviral.jpg",
    "source": ["https://www.nih.gov/news-events/news-releases/researchers-develop-broad-spectrum-antiviral-agents"],
    "dateRange": {
      "earliestYear": 2028,
      "latestYear": 2040
    },
    "isPositive": True,
    "tags": ["Medicine", "Science"],
    "baseProbability": 4,
    "statRanges": {
      "economy": {
        "min": 30,
        "max": 100,
        "probabilitySwing": 1
      },
      "qualityOfLife": {
        "min": 60,
        "max": 100,
        "probabilitySwing": 1
      }
    },
    "statEffects": {
      "economy": {
        "change": 10,
        "range": 4
      },
      "qualityOfLife": {
        "change": 15,
        "range": 5
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "CRISPR-Based Genetic Disease Elimination",
    "description": "Gene-editing technology like CRISPR is used to prevent or cure inheritable genetic disorders at the embryonic or early-childhood stage.",
    "image": "crispr_cure.jpg",
    "source": ["https://www.nature.com/articles/d41586-023-00910-7"],
    "dateRange": {
      "earliestYear": 2026,
      "latestYear": 2045
    },
    "isPositive": True,
    "tags": ["Medicine", "Science"],
    "baseProbability": 5,
    "statRanges": {
      "economy": {
        "min": 50,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "economy": {
        "change": 20,
        "range": 8
      },
      "qualityOfLife": {
        "change": 25,
        "range": 10
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Discovery of New Physics Beyond the Standard Model",
    "description": "Experimental results from particle colliders or cosmological observations reveal physics that cannot be explained by the Standard Model, changing our fundamental understanding of the universe.",
    "image": "new_physics.jpg",
    "source": ["https://home.cern/science/physics/standard-model"],
    "dateRange": {
      "earliestYear": 2035,
      "latestYear": 2075
    },
    "isPositive": True,
    "tags": ["Science"],
    "baseProbability": 3,
    "statRanges": {
      "politics": {
        "min": 30,
        "max": 80,
        "probabilitySwing": 0
      },
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 0
      },
    },
    "statEffects": {
      "qualityOfLife": {
        "change": 10,
        "range": 4
      },
      "economy": {
        "change": 6,
        "range": 3
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Artificial Photosynthesis for Energy",
    "description": "Scientists create efficient, scalable systems that mimic plants to convert sunlight, water, and CO₂ into fuel — enabling clean, sustainable energy.",
    "image": "artificial_photosynthesis.jpg",
    "source": ["https://www.energy.gov/eere/solar/artificial-photosynthesis"],
    "dateRange": {
      "earliestYear": 2030,
      "latestYear": 2050
    },
    "isPositive": True,
    "tags": ["Science", "Environment"],
    "baseProbability": 4,
    "statRanges": {
      "politics": {
        "min": 20,
        "max": 100,
        "probabilitySwing": 1
      },
      "environment": {
        "min": 60,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "economy": {
        "change": 12,
        "range": 5
      },
      "environment": {
        "change": 20,
        "range": 8
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Global Climate Migration Crisis",
    "description": "Rising sea levels, heatwaves, drought, and extreme weather force tens to hundreds of millions to relocate across and within borders, creating major geopolitical pressure.",
    "image": "climate_migration.jpg",
    "source": ["https://www.iom.int/news/climate-migration-numbers-could-soar-216-million-2050-world-bank-warns"],
    "dateRange": {
      "earliestYear": 2030,
      "latestYear": 2100
    },
    "isPositive": False,
    "tags": ["Environment", "Politics", "Social"],
    "baseProbability": 7,
    "statRanges": {
      "politics": {
        "min": 00,
        "max": 60,
        "probabilitySwing": -1
      },
      "environment": {
        "min": 0,
        "max": 30,
        "probabilitySwing": -1
      },
      "qualityOfLife": {
        "min": 0,
        "max": 50,
        "probabilitySwing": -1
      }
    },
    "statEffects": {
      "environment": {
        "change": -25,
        "range": -10
      },
      "qualityOfLife": {
        "change": -30,
        "range": -12
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Global Carbon Neutrality Achieved",
    "description": "Global carbon emissions reach net-zero, either through massive adoption of renewables, carbon capture, reforestation, and lifestyle changes.",
    "image": "carbon_neutral.jpg",
    "source": ["https://www.iea.org/reports/net-zero-by-2050"],
    "dateRange": {
      "earliestYear": 2040,
      "latestYear": 2100
    },
    "isPositive": True,
    "tags": ["Environment", "Politics"],
    "baseProbability": 8,
    "statRanges": {
      "politics": {
        "min": 50,
        "max": 100,
        "probabilitySwing": 1
      },
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 1
      },
      "environment": {
        "min": 70,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "economy": {
        "change": 12,
        "range": 5
      },
      "environment": {
        "change": 18,
        "range": 7
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Greenhouse Gas Removal at Scale",
    "description": "Direct air capture, ocean carbon sinks, and soil carbon sequestration technologies scale up to remove billions of tons of CO₂ per year.",
    "image": "carbon_removal.jpg",
    "source": ["https://www.iea.org/reports/direct-air-capture-2023"],
    "dateRange": {
      "earliestYear": 2035,
      "latestYear": 2080
    },
    "isPositive": True,
    "tags": ["Environment", "Science"],
    "baseProbability": 7,
    "statRanges": {
      "politics": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 1
      },
      "economy": {
        "min": 60,
        "max": 100,
        "probabilitySwing": 1
      },
      "environment": {
        "min": 60,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "economy": {
        "change": 10,
        "range": 4
      },
      "environment": {
        "change": 15,
        "range": 6
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Geoengineering Deployed to Cool Earth",
    "description": "Climate engineering technologies like stratospheric aerosol injection or marine cloud brightening are used to temporarily reduce global temperatures.",
    "image": "geoengineering.jpg",
    "source": ["https://www.nature.com/articles/s41558-019-0661-5"],
    "dateRange": {
      "earliestYear": 2035,
      "latestYear": 2080
    },
    "isPositive": True,
    "tags": ["Environment", "Science", "Politics"],
    "baseProbability": 6,
    "statRanges": {
      "politics": {
        "min": 30,
        "max": 80,
        "probabilitySwing": 0
      },
      "economy": {
        "min": 40,
        "max": 90,
        "probabilitySwing": 0
      },
      "environment": {
        "min": 30,
        "max": 70,
        "probabilitySwing": 0
      },
    },
    "statEffects": {
      "environment": {
        "change": 12,
        "range": 5
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Major Ocean Current Disruption",
    "description": "A shutdown or major slowing of key ocean circulation systems like the Atlantic Meridional Overturning Circulation (AMOC) leads to dramatic regional climate shifts.",
    "image": "amoc_collapse.jpg",
    "source": ["https://www.nature.com/articles/s41467-021-25226-5"],
    "dateRange": {
      "earliestYear": 2030,
      "latestYear": 2100
    },
    "isPositive": False,
    "tags": ["Environment", "Natural Disaster"],
    "baseProbability": 9,
    "statRanges": {
      "environment": {
        "min": 0,
        "max": 40,
        "probabilitySwing": -1
      },
    },
    "statEffects": {
      "economy": {
        "change": -15,
        "range": -6
      },
      "environment": {
        "change": -25,
        "range": -10
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Global Treaty on Climate Justice",
    "description": "A legally binding international framework is created to compensate countries most affected by climate change, addressing historical emissions and inequity.",
    "image": "climate_justice_treaty.png",
    "source": ["https://www.un.org/en/climatechange/adaptation-loss-and-damage"],
    "dateRange": {
      "earliestYear": 2030,
      "latestYear": 2060
    },
    "isPositive": True,
    "tags": ["Environment", "Politics", "Social"],
    "baseProbability": 5,
    "statRanges": {
      "politics": {
        "min": 70,
        "max": 100,
        "probabilitySwing": 1
      },
      "economy": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 0
      },
      "environment": {
        "min": 30,
        "max": 100,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "economy": {
        "change": 10,
        "range": 4
      },
      "environment": {
        "change": 20,
        "range": 5
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Global Coral Reef Collapse",
    "description": "Warming oceans and acidification cause over 90% of coral reefs to die off, leading to massive biodiversity loss and impacts to food chains and tourism economies.",
    "image": "coral_reef_collapse.webp",
    "source": ["https://www.ipcc.ch/report/ar6/wg2/"],
    "dateRange": {
      "earliestYear": 2025,
      "latestYear": 2055
    },
    "isPositive": False,
    "tags": ["Environment", "Natural Disaster"],
    "baseProbability": 8,
    "statRanges": {
      "environment": {
        "min": 0,
        "max": 40,
        "probabilitySwing": -1
      },
    },
    "statEffects": {
      "economy": {
        "change": -18,
        "range": -7
      },
      "environment": {
        "change": -30,
        "range": -12
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Regional Election Shifts Populist",
    "description": "A major regional election results in a populist or nationalist party gaining control, influencing local policies and international relations.",
    "image": "populist_election.jpg",
    "source": ["https://www.bbc.com/news/world"],
    "dateRange": {
      "earliestYear": 2025,
      "latestYear": 2035
    },
    "isPositive": False,
    "tags": ["Politics"],
    "baseProbability": 6,
    "statRanges": {
      "politics": {
        "min": 40,
        "max": 80,
        "probabilitySwing": -1
      },
      "qualityOfLife": {
        "min": 40,
        "max": 70,
        "probabilitySwing": 0
      }
    },
    "statEffects": {
      "politics": {
        "change": -5,
        "range": -3
      }
    }
  },
  {
    "title": "Minor Virus Outbreak",
    "description": "A novel virus emerges but is quickly contained through local quarantines and rapid medical response, with limited global spread.",
    "image": "minor_outbreak.jpg",
    "source": ["https://www.who.int/"],
    "dateRange": {
      "earliestYear": 2025,
      "latestYear": 2040
    },
    "isPositive": False,
    "tags": ["Medicine", "Social"],
    "baseProbability": 7,
    "statRanges": {
      "environment": {
        "min": 20,
        "max": 80,
        "probabilitySwing": 0
      },
      "qualityOfLife": {
        "min": 0,
        "max": 60,
        "probabilitySwing": -1
      }
    },
    "statEffects": {
      "qualityOfLife": {
        "change": -6,
        "range": -2
      },
      "economy": {
        "change": -4,
        "range": -1
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Urban Riots in Major City",
    "description": "Protests over economic or racial injustice escalate into riots in a large city, prompting military or police intervention and temporary disruption.",
    "image": "urban_riot.jpg",
    "source": ["https://www.reuters.com/"],
    "dateRange": {
      "earliestYear": 2025,
      "latestYear": 2035
    },
    "isPositive": False,
    "tags": ["Social", "Politics"],
    "baseProbability": 7,
    "statRanges": {
      "politics": {
        "min": 0,
        "max": 80,
        "probabilitySwing": -1
      },
      "economy": {
        "min": 0,
        "max": 60,
        "probabilitySwing": -1
      },
      "qualityOfLife": {
        "min": 0,
        "max": 40,
        "probabilitySwing": -1
      }
    },
    "statEffects": {
      "qualityOfLife": {
        "change": -7,
        "range": -3
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Breakthrough in Battery Recycling",
    "description": "A new method for efficiently recycling lithium-ion batteries is commercialized, reducing waste and improving supply chain sustainability.",
    "image": "battery_recycling.jpg",
    "source": ["https://www.nature.com/"],
    "dateRange": {
      "earliestYear": 2026,
      "latestYear": 2035
    },
    "isPositive": True,
    "tags": ["Science", "Environment", "Technology"],
    "baseProbability": 8,
    "statRanges": {
      "economy": {
        "min": 40,
        "max": 80,
        "probabilitySwing": 1
      },
      "environment": {
        "min": 40,
        "max": 80,
        "probabilitySwing": 1
      },
    },
    "statEffects": {
      "environment": {
        "change": 6,
        "range": 2
      },
      "economy": {
        "change": 5,
        "range": 2
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
  {
    "title": "Low-Earth Orbit Traffic Regulations Enacted",
    "description": "Global space agencies agree to enforce new satellite and debris management rules, reducing collision risks and improving orbital sustainability.",
    "image": "leo_regulations.jpg",
    "source": ["https://www.nasa.gov/"],
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2040
    },
    "isPositive": True,
    "tags": ["Technology", "Politics", "Environment"],
    "baseProbability": 6,
    "statRanges": {
      "politics": {
        "min": 40,
        "max": 100,
        "probabilitySwing": 1
      },
      "economy": {
        "min": 20,
        "max": 60,
        "probabilitySwing": 0
      },
      "military": {
        "min": 20,
        "max": 80,
        "probabilitySwing": 0
      },
    },
    "statEffects": {
      "environment": {
        "change": 4,
        "range": 1
      }
    },
    "eventRequirements": [],
    "cardRequirements": [],
  },
    {
    "title": "Complete Economic Collapse",
    "description": "Everyone runs out of money, the world falls apart, everyone dies.",
    "image": "economic_collapse.jpg",
    "source": "",
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2040
    },
    "isPositive": False,
    "gameEnds":True,
    "tags": ["Politics"],
    "baseProbability": 1000,
    "statRanges": {
      "economy": {
        "min": 0,
        "max": 1,
        "probabilitySwing": 0
      },
    },
    "statEffects": {},
    "eventRequirements": [],
    "cardRequirements": [],
  },
{
    "title": "Complete Environmental Collapse",
    "description": "Climate change creates storms so violent all man made structures are destroid, taking the humans inside with them.",
    "image": "environmental_collapse.jpg",
    "source": "",
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2040
    },
    "isPositive": False,
    "gameEnds":True,
    "tags": ["Politics"],
    "baseProbability": 1000,
    "statRanges": {
      "environment": {
        "min": 0,
        "max": 1,
        "probabilitySwing": 0
      },
    },
    "statEffects": {},
    "eventRequirements": [],
    "cardRequirements": [],
  },
{
    "title": "Complete Military Collapse",
    "description": "Humanity loses all its military and therefore its ability to defend itself, the pigeons use their limited, yet surprisingly powerful military skills to wipe out humanity.",
    "image": "military_collapse.jpg",
    "source": "",
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2040
    },
    "gameEnds":True,
    "isPositive": False,
    "tags": ["Politics"],
    "baseProbability": 1000,
    "statRanges": {
      "military": {
        "min": 0,
        "max": 1,
        "probabilitySwing": 0
      },
    },
    "statEffects": {},
    "eventRequirements": [],
    "cardRequirements": [],
  },
{
    "title": "Complete Loss of Quality of Life",
    "description": "Literally everyone is severely depressed and lacking purpose or meaning, a pandemic of suicide wipes out humanity",
    "image": "quality_of_life_collapse.jpg",
    "source": "",
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2040
    },
    "isPositive": False,
    "gameEnds":True,
    "tags": ["Politics"],
    "baseProbability": 1000,
    "statRanges": {
      "qualityOfLife": {
        "min": 0,
        "max": 1,
        "probabilitySwing": 0
      },
    },
    "statEffects": {},
    "eventRequirements": [],
    "cardRequirements": [],
  },
{
    "title": "Complete Political Collapse",
    "description": "Governments lose control of their people, everyone kills each other.",
    "image": "economic_collapse.jpg",
    "source": "",
    "dateRange": {
      "earliestYear": 2027,
      "latestYear": 2040
    },
    "isPositive": False,
    "gameEnds":True,
    "tags": ["Politics"],
    "baseProbability": 1000,
    "statRanges": {
      "politics": {
        "min": 0,
        "max": 1,
        "probabilitySwing": 0
      },
    },
    "statEffects": {},
    "eventRequirements": [],
    "cardRequirements": [],
  }

]


with open("timeline_data.json","w") as f:
    edited_data = {}
    for i in range(len(data)):
        edited_data[i] = data[i]
    json.dump(edited_data, f)

