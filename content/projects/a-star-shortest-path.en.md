This project visualizes the **A\*** search algorithm on an interactive grid to find the shortest path between two points.

## Highlights

- Draw and erase obstacles directly with the pointer
- Reposition start and target nodes dynamically
- Step-by-step visualization of open set, closed set, and final path

## Cost Function

Each node is evaluated with:

```text
f(n) = g(n) + h(n)
```

Where `g(n)` is the exact cost from the start node and `h(n)` is the heuristic estimate to the goal.

