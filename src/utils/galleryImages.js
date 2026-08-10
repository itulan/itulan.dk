const galleryFiles = require.context(
  "../assets/img",
  true,
  /^\.\/gallery_[^/]+\/.*\.(jpg|jpeg|png|webp)$/i
);

function titleFromSlug(slug) {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function titleFromFilename(filename) {
  return titleFromSlug(filename.replace(/\.[^.]+$/, "").replace(/_\d+$/, ""));
}

const collections = galleryFiles.keys().reduce((result, path) => {
  const match = path.match(/^\.\/gallery_([^/]+)\/([^/]+)$/);

  if (!match) {
    return result;
  }

  const slug = match[1].toLowerCase();
  const filename = match[2];

  if (!result[slug]) {
    result[slug] = {
      slug,
      title: titleFromSlug(slug),
      path: `/gallery/${slug}`,
      images: [],
    };
  }

  result[slug].images.push({
    title: titleFromFilename(filename),
    alt: `${titleFromFilename(filename)} at ITU LAN`,
    src: galleryFiles(path),
  });

  return result;
}, {});

Object.values(collections).forEach((collection) => {
  collection.images.sort((a, b) => a.title.localeCompare(b.title));
  collection.cover = collection.images[0] && collection.images[0].src;
  collection.count = collection.images.length;
});

export function getGalleryCollections() {
  return Object.values(collections).sort((a, b) => a.title.localeCompare(b.title));
}

export function getGalleryCollection(slug) {
  return collections[slug];
}
