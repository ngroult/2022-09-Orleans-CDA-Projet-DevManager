const fetchImages = async (category: string) => {
  try {
    const getImages = await fetch(`/api/images/by-category/${category}`, {
      method: 'GET',
    });
    const images = await getImages.json();
    return images;
  } catch (err) {
    console.error(err);
  }
};

export default fetchImages;
