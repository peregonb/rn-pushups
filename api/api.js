const rangeJSON = require("../data/range");
const courseJSON = require("../data/course");

export default {
    async weekAndDifficulty(num) {
        return rangeJSON.filter(el => el.min <= num && el.max >= num).map(el => [{
            "week": el.week,
            "difficulty": el.difficulty
        }])[0][0];
    }
}