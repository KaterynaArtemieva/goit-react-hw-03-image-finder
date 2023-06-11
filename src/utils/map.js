export const map = images => {
  return images.map(({ id, largeImageURL, webformatURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
