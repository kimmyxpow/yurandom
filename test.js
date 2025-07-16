import { Yurandom } from ".";

const rng = new Yurandom("something-seed");

console.log(rng.random()); // 0.999523181700827
console.log(rng.int(1, 10)); //  1
console.log(rng.pick(["a", "b", "c"])); // a
console.log(rng.bool()); // true
console.log(rng.uuid()); // 1d7eeab5-e5b2-97f7-5c00-95de1421033e
console.log(rng.pastel()); // hsl(191, 70%, 85%)

const uwuRng = new Yurandom("uwu");

console.log(uwuRng.random()); // 0.00013223936797143612
console.log(uwuRng.int(1, 10)); // 2
console.log(uwuRng.pick(["a", "b", "c"])); //  a
console.log(uwuRng.bool()); // false
console.log(uwuRng.uuid()); // 29457443-6c0b-7e8f-5d81-0c0f3357962e
console.log(uwuRng.pastel()); // hsl(164, 70%, 85%)

const nyaRng = new Yurandom("nya");

console.log(nyaRng.random()); // 0.0001322393681264452
console.log(nyaRng.int(1, 10)); //  2
console.log(nyaRng.pick(["a", "b", "c"])); // b
console.log(nyaRng.bool()); // true
console.log(nyaRng.uuid()); // e39b7b79-f137-0e54-6485-6cf58982fc2c
console.log(nyaRng.pastel()); // hsl(95, 70%, 85%)
