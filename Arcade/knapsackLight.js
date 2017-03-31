knapsackLight = (v1, w1, v2, w2, max) => {
  if (w1 + w2 <= max) { return v1 + v2; }
  if (Math.min(w1, w2) > max) { return 0; }
  if (w1 <= max && (v1 >= v2 || w2 > max)) { return v1; }
  return v2;
}
