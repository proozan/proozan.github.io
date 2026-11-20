Renting and maintaining a server just to publish a small algorithm demo often creates unnecessary cost and operational friction.

## Why Client-Side?

Modern browsers are fast enough for serious computation without a backend:

- **Zero hosting cost:** Static files run for free on GitHub Pages.
- **Instant feedback:** No network round trips while interacting with simulations.
- **Privacy by default:** User files and images never leave the browser.

## Minimal Example

A small C++ routine compiled to WebAssembly can be called directly from plain JavaScript:

```cpp
int heuristic(int ax, int ay, int bx, int by) {
  return abs(ax - bx) + abs(ay - by);
}
```

> Shipping ideas as pure static pages removes server maintenance and keeps focus on the algorithm itself.

