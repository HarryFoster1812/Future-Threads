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
     "source":[],
     "optimism":[{"lowerBound":0.6,
                 "upperBound":1}],
     "dateRange":{"earliestYear":2030,
                  "latestYear":2060},
     "relevance":0.6,
     "isPositive":True,
     "tags":["Space", "Science"],
     },
    {"title":"Humans return to the Moon",
     "description":"For the first time since 1972, humans will set foot on the Moon as part of NASA’s Artemis III mission.",
     "image":"return_to_moon.jpg",
     "source": [],
     "optimism":[{"lowerBound":0.3,
                 "upperBound":1}],
     "dateRange":{"earliestYear":2026,
                  "latestYear":2028},
     "relevance":0.55,
    "isPositive":True,
     "tags":["Space", "Science"],
     },
    {"title":"Moon Colony",
     "description":"The Moon is expected to host permanent or semi-permanent bases in the 2030s. These early colonies will serve as research stations, testing grounds for Mars missions, and even potential commercial hubs",
     "image":"moon_colony.jpg",
     "source":[],
     "optimism":[{"lowerBound":0.65,
                 "upperBound":1}],
     "dateRange":{"earliestYear":2030,
                  "latestYear":2050},
     "relevance":0.6,
     "isPositive": True,
     "tags":["Space", "Science"],
     },

    {"title":"First AGI",
     "description":"AGI refers to a type of artificial intelligence capable of performing any intellectual task that a human can do, with the ability to learn, adapt, and generalize across a wide range of activities.",
     "image":"first_AGI.png",
     "source": [],
     "optimism":[{"lowerBound":0, "upperBound":0.25},
                 {"lowerBound":0.7, "upperBound":1}],
     "dateRange":{"earliestYear":2027,
                  "latestYear":2060},
     "relevance":0.75,
     "isPositive": True,
     "tags":["Science", "AI"],
     },
    {"title":"Commercially Viable Fusion Power",
     "description":"Fusion power is the holy grail for clean and virtually limitless energy. In fusion light atomic nuclei like hydrogen combine, forming heavier nuclei and releasing immense energy.",
     "image":"fusion_energy.jpg",
     "source":["https://en.wikipedia.org/wiki/Commercial_fusion#:~:text=The%20advent%20of%20commercial%20fusion,to%20the%20grid%20before%202035."],
     "optimism":[{"lowerBound":0.6,
                 "upperBound":1}],
     "dateRange":{"earliestYear":2032,
                  "latestYear":2050},
     "relevance":0.85,
     "isPositive": True,
     "tags":["Science"],
     },
    {"title": "Cure for Cancer",
     "description": "cure_for_cancer.jpg",
     "image": "",
     "optimism": [{"lowerBound": 0,
                  "upperBound": 1}],
     "dateRange": {"earliestYear": 2025,
                   "latestYear": 2050},
     "relevance": 0.75,
     "isPositive": True,
     "tags": ["Medicine", "Science"],
     },
    {"title": "Exceed 2°C",
     "description": "Crossing the 2°C threshold above pre-industrial levels marks a dangerous point in climate change. This level of warming could lead to some irreversible impacts to the planet.",
     "image": "2_degrees.png",
     "source":["https://www.carbonbrief.org/analysis-when-might-the-world-exceed-1-5c-and-2c-of-global-warming/#:~:text=Similarly%2C%20if%20future%20emissions%20remain,between%20the%202030s%20and%202050s"],
     "optimism": [{"lowerBound": 0,
                  "upperBound": 0.7}],
     "dateRange": {"earliestYear": 2030,
                   "latestYear": 2070},
     "relevance": 0.7,
     "isPositive": False,
     "tags": ["Environment"],
     },


"""
    {"title": "",
     "description": "",
     "image": "",
     "source": [],
     "optimism": [{"lowerBound": 0,
                  "upperBound": 1}],
     "dateRange": {"earliestYear": 2025,
                   "latestYear": 2050},
     "relevance": 0.5,
     "isPositive": True,
     "tags": [],
     },
 """
]


def test_date_filter(optimism, entry):
    """
    test function to show how an entered optimism value
    would edit the year of an entry.

    :param optimism: float 0-1 of the entered optimism
    :param entry: an entry of the data, with an optimism and dateRange attribute
    :return: int year, the year of the event to occur
    """
    return 0


with open("timeline_data.json","w") as f:
    json.dump(data, f)

