<template>
  <div class="gallery">
    <RouterLink class="back-link" to="/gallery">Back to gallery</RouterLink>

    <div v-if="collection">
      <h1 class="title" data-aos="fade-up">{{ collection.title }}</h1>
      <p class="intro" data-aos="fade-up" data-aos-delay="100">
        {{ collection.count }} photos from ITU LAN.
      </p>

      <div class="gallery-grid">
        <figure
          v-for="(image, index) in collection.images"
          :key="image.title"
          class="gallery-item"
          data-aos="fade-up"
          @click="openLightbox(index)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <figcaption>{{ image.title }}</figcaption>
        </figure>
      </div>
    </div>

    <div v-else>
      <h1 class="title" data-aos="fade-up">Gallery</h1>
      <h3 data-aos="fade-up" data-aos-delay="100">Collection not found</h3>
    </div>

    <div
      v-if="selectedImage"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" type="button" @click="closeLightbox">
        Close
      </button>
      <button class="lightbox-arrow previous" type="button" @click="showPrevious">
        &lt;
      </button>
      <figure class="lightbox-content">
        <img :src="selectedImage.src" :alt="selectedImage.alt" />
        <figcaption>{{ selectedImage.title }}</figcaption>
      </figure>
      <button class="lightbox-arrow next" type="button" @click="showNext">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
import { getGalleryCollection } from "@/utils/galleryImages";

export default {
  name: "GalleryCollection",
  data() {
    return {
      selectedImageIndex: null,
    };
  },
  computed: {
    collection() {
      return getGalleryCollection(this.$route.params.collection);
    },
    selectedImage() {
      if (!this.collection || this.selectedImageIndex === null) {
        return null;
      }

      return this.collection.images[this.selectedImageIndex];
    },
  },
  watch: {
    "$route.params.collection"() {
      this.closeLightbox();
    },
  },
  methods: {
    openLightbox(index) {
      this.selectedImageIndex = index;
    },
    closeLightbox() {
      this.selectedImageIndex = null;
    },
    showPrevious() {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.collection.images.length) %
        this.collection.images.length;
    },
    showNext() {
      this.selectedImageIndex =
        (this.selectedImageIndex + 1) % this.collection.images.length;
    },
  },
};
</script>

<style scoped>
.gallery {
  max-width: 1000px;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 0.8rem;
}

.intro {
  margin-bottom: 3rem;
  letter-spacing: initial;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 5rem;
}

.gallery-item {
  margin: 0;
  background-color: var(--brand-black);
  border: 2px solid var(--brand-white);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.gallery-item:hover,
.gallery-item:focus {
  border-color: var(--brand-secondary);
  box-shadow: 8px 8px 0 var(--brand-secondary);
  transform: translate(-4px, -4px);
}

.gallery-item img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.gallery-item figcaption {
  padding: 12px;
  color: var(--brand-white);
  font-family: "Retro Gaming";
  font-size: 0.8rem;
  text-transform: uppercase;
}

.lightbox {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 90px;
  background-color: rgba(0, 0, 0, 0.9);
}

.lightbox-content {
  max-width: 100%;
  max-height: 100%;
  margin: 0;
}

.lightbox-content img {
  display: block;
  max-width: 100%;
  max-height: 75vh;
  margin: 0 auto;
  border: 3px solid var(--brand-white);
  object-fit: contain;
}

.lightbox-content figcaption {
  margin-top: 16px;
  color: var(--brand-white);
  font-family: "Retro Gaming";
  text-align: center;
  text-transform: uppercase;
}

.lightbox-close,
.lightbox-arrow {
  position: absolute;
  border: 2px solid var(--brand-white);
  background-color: var(--brand-black);
  color: var(--brand-white);
  font-family: "Retro Gaming";
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;
}

.lightbox-close:hover,
.lightbox-arrow:hover {
  background-color: var(--brand-secondary);
  color: var(--brand-white);
  transform: scale(1.08);
}

.lightbox-close {
  top: 24px;
  right: 24px;
  padding: 10px 14px;
  font-size: 0.8rem;
}

.lightbox-arrow {
  top: 50%;
  width: 54px;
  height: 54px;
  font-size: 2rem;
  line-height: 1;
  transform: translateY(-50%);
}

.lightbox-arrow:hover {
  transform: translateY(-50%) scale(1.08);
}

.previous {
  left: 24px;
}

.next {
  right: 24px;
}

@media only screen and (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .lightbox {
    padding: 80px 16px 32px;
  }

  .lightbox-arrow {
    top: auto;
    bottom: 24px;
  }

  .previous {
    left: 24px;
  }

  .next {
    right: 24px;
  }
}
</style>
