export function FormatNumber(x) {
  let t = "";

  while(x > 1000) {
    let i = x % 1000;
    t = ","+i+t;
    x = Math.floor(x / 1000);
  }

  return x + t
}