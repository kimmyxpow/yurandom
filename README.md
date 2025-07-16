## yurandom

A deterministic, seed-based pseudo-random generator powered by Xoroshiro128+, with zero dependencies.

### 📦 Features

- 🔁 Deterministic output — same seed always gives same result
- ⚡ Lightweight and fast — no dependencies
- 🛠️ Includes common utilities: pick, shuffle, color, uuid, date, etc.
- 🧪 Ideal for testing, generation, and reproducible randomness

### 🚀 Installation

```bash
bun add yurandom
# or
npm install yurandom
# or
pnpm add yurandom
```

### ✅ Usage

```js
import { Yurandom } from "yurandom";

const rng = new Yurandom("uwu");

rng.random(); // 0.00013223936797143612
rng.int(1, 10); // 2
rng.pick(["a", "b", "c"]); // a
rng.bool(); // false
rng.uuid(); // 29457443-6c0b-7e8f-5d81-0c0f3357962e
rng.pastel(); // hsl(164, 70%, 85%)
```

### 📘 API

| Method                  | Description                                  |
| ----------------------- | -------------------------------------------- |
| `random()`              | Float between 0 and 1                        |
| `int(min, max)`         | Integer between min and max (inclusive)      |
| `bool()`                | Boolean (`true` or `false`)                  |
| `pick(arr)`             | Pick one item from array                     |
| `shuffle(arr)`          | Shuffle array (non-mutating)                 |
| `pastel()`              | Random pastel HSL color                      |
| `range(n, min, max)`    | Array of `n` integers between min and max    |
| `uuid()`                | UUID-like deterministic string               |
| `date(start, end)`      | Random date between start and end            |
| `weighted([[x,w],...])` | Pick based on weight                         |
| `string(len, charset)`  | Random string                                |
| `hex(bytes)`            | Hex string of given byte length              |
| `color(format)`         | Random color in `"hex"`, `"rgb"`, or `"hsl"` |

### 🎯 Real World Use Cases

- **Avatar generators**: Create unique, consistent visuals (e.g., Dicebear-style avatars) from usernames or IDs.
- **Game development**: Reproduce map layouts, item drops, or enemy patterns based on a seed.
- **Testing tools**: Generate deterministic mock data for snapshot testing or simulations.
- **User personalization**: Assign consistent themes, colors, or avatars to users without storing preferences.
- **Fuzz testing**: Create predictable test variations with controlled randomness.
- **Data generation**: Populate dev/staging environments with repeatable random data.

### 🔒 Deterministic by Design

All randomness is based on your input seed and powered by [Xoroshiro128+](https://prng.di.unimi.it/xoroshiro128plus.c). This means results are 100% repeatable, even if your code runs next year, next decade, or after World War 3. As long as the seed is the same, the result will never change. Not even a meteor strike or a global reset button can stop it.

### 🧪 Run Tests

```bash
bun test
```

### 📄 License

[MIT](./LICENSE) – free for personal and commercial use.
