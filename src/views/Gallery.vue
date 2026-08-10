<template>
  <div class="gallery">
    <h1 class="title" data-aos="fade-up">Gallery</h1>
    <p class="intro" data-aos="fade-up" data-aos-delay="100">
      Photos from ITU LAN events.
    </p>

    <div class="collection-grid">
      <RouterLink
        v-for="collection in collections"
        :key="collection.slug"
        class="collection-card"
        :to="collection.path"
        data-aos="fade-up"
      >
        <span class="collection-icon">
          <img
            :src="collection.cover"
            :alt="`${collection.title} gallery preview`"
            loading="lazy"
          />
        </span>
        <span class="collection-text">
          <span class="collection-title">{{ collection.title }}</span>
          <span class="collection-count">{{ collection.count }} photos</span>
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { getGalleryCollections } from "@/utils/galleryImages";

export default {
  name: "Gallery",
  computed: {
    collections() {
      return getGalleryCollections();
    },
  },
};
</script>

<style scoped>
.gallery {
  max-width: 1000px;
}

.intro {
  margin-bottom: 2rem;
  letter-spacing: initial;
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 5rem;
}

.collection-card {
  display: flex;
  align-items: center;
  min-height: 150px;
  padding: 18px;
  background-color: var(--brand-black);
  border: 2px solid var(--brand-white);
  color: var(--brand-white);
  text-align: left;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.collection-card:hover,
.collection-card:focus {
  color: var(--brand-white);
  border-color: var(--brand-secondary);
  box-shadow: 8px 8px 0 var(--brand-secondary);
  transform: translate(-4px, -4px);
}

.collection-icon {
  display: block;
  flex: 0 0 96px;
  height: 96px;
  margin-right: 18px;
  border: 2px solid var(--brand-white);
  border-radius: 50%;
  overflow: hidden;
}

.collection-icon img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.collection-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.collection-title {
  font-family: "Retro Gaming";
  font-size: 1.05rem;
  line-height: 1.2;
  text-transform: uppercase;
}

.collection-count {
  margin-top: 8px;
  color: var(--brand-gray-light);
  font-size: 0.8rem;
  text-transform: uppercase;
}

@media only screen and (max-width: 900px) {
  .collection-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .collection-grid {
    grid-template-columns: 1fr;
  }

  .collection-card {
    padding: 14px;
  }

  .collection-icon {
    flex-basis: 78px;
    height: 78px;
    margin-right: 14px;
  }

  .collection-title {
    font-size: 0.9rem;
  }
}
</style>
