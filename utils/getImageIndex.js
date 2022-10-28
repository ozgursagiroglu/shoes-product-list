export default function getImageIndex(index) {
  if (index === 0) {
    return 1;
  }

  if (index % 10 === 0) {
    return 10;
  }

  return index % 10;
}
