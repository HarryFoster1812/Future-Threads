
function random_range(min,max) {
    // picks a random float in the range, inclusive
    let ran = Math.random();
    return ran*(max-min)+min;
}
function weighted_random_choice(data) {
    // takes data in the form {['item1',2], ['item2',1], ['item3',4]}
    // returns one of the keys e.g. 'item1' with its weighted probability, for item 1 being 2/7

    let total_weight = 0;
    for (let weight of Object.values(data)) {
        total_weight += weight;
    }
    let ran_val = random_range(0, total_weight);
    for (let item of Object.keys(data)) {
        ran_val -= data[item];
        if (ran_val < 0) {
            return item;
        }
    }
    console.log('weighted random function broke', ran_val, data, total_weight);
}

class GameManagerClass {
    constructor(events) {
        this.events = events;
        this.past_events = {};
        this.stats = {
            economy: 50,
            environment: 50,
            politics: 50,
            military: 50,
            qualityOfLife: 50
        }

        this.currentYear = 2025;
    }
    generateCards() {

    }
    selectCard() {

    }
    incrementYear() {
        // returns new events
        let possibleEvents = {};
        for (let events of this.events) {
            possibleEvents[]
        }



        this.currentYear+=1
    }
    getStats() {
        return this.stats
    }

    getEventProbability(event) {
        if (event["dateRange"]["earliestYear"] < this.currentYear || event["dateRange"]["latestYear"] > this.currentYear) {
            return 0
        }
        let probability = event["baseProbability"];
        for (let stat of Object.keys(event["statRanges"])) {
            let info = event["statRanges"][stat]
            if (this.stats[stat] < info["min"] || this.stats[stat] > info["max"]) {
                return 0
            }
            let progress = (this.stats[stat]-info["min"])/(info["max"]-info["min"])
            let prog_change = info["probabilitySwing"]*progress+1
            probability *= prog_change;
        }
        return probability
    }
}

module.exports = GameManagerClass;