module.exports = (n, ar) => {
  let count = 0;
  const diff = Array.from(new Set(ar));
  diff.forEach(sock => {
    const socks = ar.filter(s => s === sock);
    count += (socks.length - socks.length % 2) / 2;
  })
  return count
}
