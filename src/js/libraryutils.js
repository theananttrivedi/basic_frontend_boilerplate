/* Requires party.min.js */
function throwConfetti({ target, minRange = 30, maxRange = 40 }) {
  party.confetti(target, {
    count: party.variation.range(minRange, maxRange),
  });
}
