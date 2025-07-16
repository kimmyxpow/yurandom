export class Yurandom {
  constructor(seed) {
    const [h1, h2] = this.hashSeed(seed);
    this.s0 = h1;
    this.s1 = h2;
  }

  hashSeed(seed) {
    let h1 = BigInt(0xdeadbeef);
    let h2 = BigInt(0x41c6ce57);
    for (let i = 0; i < seed.length; i++) {
      const ch = BigInt(seed.charCodeAt(i));
      h1 = BigInt.asUintN(64, h1 ^ ((h1 << 5n) + ch + (h1 >> 2n)));
      h2 = BigInt.asUintN(64, h2 ^ ((h2 << 7n) + ch + (h2 >> 3n)));
    }
    return [h1, h2];
  }

  next() {
    let s0 = this.s0;
    let s1 = this.s1;
    const result =
      Number(BigInt.asUintN(64, s0 + s1)) / Number(0x1_0000_0000_0000_0000n);

    s1 ^= s0;
    this.s0 = BigInt.asUintN(64, this.rotl(s0, 55n) ^ s1 ^ (s1 << 14n));
    this.s1 = BigInt.asUintN(64, this.rotl(s1, 36n));

    return result;
  }

  rotl(x, k) {
    return ((x << k) | (x >> (64n - k))) & 0xffffffffffffffffn;
  }

  random() {
    return this.next();
  }

  int(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  bool() {
    return this.next() < 0.5;
  }

  pick(arr) {
    return arr[Math.floor(this.next() * arr.length)];
  }

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  pastel() {
    const h = Math.floor(this.next() * 360);
    return `hsl(${h}, 70%, 85%)`;
  }

  range(count, min, max) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(this.int(min, max));
    }
    return result;
  }

  uuid() {
    const hex = () => this.hex(2);
    return `${hex()}${hex()}-${hex()}-${hex()}-${hex()}-${hex()}${hex()}${hex()}`;
  }

  date(start, end) {
    const t = start.getTime() + this.next() * (end.getTime() - start.getTime());
    return new Date(Math.floor(t));
  }

  weighted(items) {
    const total = items.reduce((sum, [, w]) => sum + w, 0);
    let r = this.next() * total;
    for (const [item, weight] of items) {
      if (r < weight) return item;
      r -= weight;
    }
    return items[items.length - 1][0];
  }

  string(
    length,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ) {
    let result = "";
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(this.next() * charset.length);
      result += charset[idx];
    }
    return result;
  }

  hex(bytes) {
    let str = "";
    for (let i = 0; i < bytes; i++) {
      const byte = this.int(0, 255);
      str += byte.toString(16).padStart(2, "0");
    }
    return str;
  }

  color(format = "hex") {
    const r = this.int(0, 255);
    const g = this.int(0, 255);
    const b = this.int(0, 255);
    switch (format) {
      case "hex":
        return `#${[r, g, b]
          .map((c) => c.toString(16).padStart(2, "0"))
          .join("")}`;
      case "rgb":
        return `rgb(${r}, ${g}, ${b})`;
      case "hsl": {
        const h = this.int(0, 360);
        const s = this.int(60, 90);
        const l = this.int(50, 85);
        return `hsl(${h}, ${s}%, ${l}%)`;
      }
    }
  }
}
