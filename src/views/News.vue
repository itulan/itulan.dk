<template>
  <div class="news">
    <div class="flex-wrapper">
      <div>
        <h1 class="title" data-aos="fade-up">{{ $t("news.title") }}</h1>
        <div id="pointer" data-aos="fade-up" data-aos-delay="200">
          <span>{{ $t("news.followUsLabel") }}</span>
        </div>
        <div
          class="some-icon-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <Hyperlink newTab :url="$t('common.socialMedia.discord.url')">
              <img
                src="../assets/img/common/socialmedia/discord_icon.svg"
                alt="Discord logo"
                loading="lazy"
              />
            </Hyperlink>
          </div>
          <div class="some-desc">
            {{ $t("common.socialMedia.discord.description") }}
          </div>
          <div>
            <Hyperlink newTab :url="$t('common.socialMedia.facebook.url')">
              <img
                src="../assets/img/common/socialmedia/facebook_icon.svg"
                alt="Facebook logo"
                loading="lazy"
              />
            </Hyperlink>
          </div>
          <div class="some-desc">
            {{ $t("common.socialMedia.facebook.description") }}
          </div>
          <div>
            <Hyperlink newTab :url="$t('common.socialMedia.instagram.url')">
              <img
                src="../assets/img/common/socialmedia/insta_icon.svg"
                alt="Instagram logo"
                loading="lazy"
              />
            </Hyperlink>
          </div>
          <div class="some-desc">
            {{ $t("common.socialMedia.instagram.description") }}
          </div>
          <div>
            <Hyperlink newTab :url="$t('common.socialMedia.youtube.url')">
              <img
                width="40px"
                src="../assets/img/common/socialmedia/youtube_icon.png"
                alt="YouTube logo"
                loading="lazy"
              />
            </Hyperlink>
          </div>
          <div class="some-desc">
            {{ $t("common.socialMedia.youtube.description") }}
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-delay="150" id="mobile-wrapper">
        <div id="mobile">
          <div v-if="isLoading">{{ $t("news.loadingLabel") }}</div>
          <div v-else>
            <Post
              v-for="post in posts"
              :key="post.id"
              :date="post.created_time"
              :message="post.message"
              class="post"
            />
          </div>
        </div>
        <div class="stage">
          <div class="box bounce-2">
            <img
              class="arrow"
              src="../assets/img/news/arrow-down.svg"
              alt="Arrow pointing down"
              loading="lazy"
            />
          </div>
        </div>
        <span id="scroll-for-more">{{ $t("news.scrollMoreLabel") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";
import Hyperlink from "@/components/Hyperlink";
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_PAGE_ID } from "../../config/keys";
export default {
  name: "home",
  components: {
    Post,
    Hyperlink,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  async mounted() {
    this.isLoading = true;
    let posts = await axios
      .get(
        `https://graph.facebook.com/v4.0/${FACEBOOK_PAGE_ID}/posts?access_token=${FACEBOOK_ACCESS_TOKEN}`
      )
      .then((res) => {
        return res.data.data;
      });
    this.posts = posts.filter((post) => post.message !== undefined);
    this.isLoading = false;
  },
};
</script>

<style scoped>
.news {
  max-width: 800px;
}

.flex-wrapper {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  height: 80vh;
}

.flex-wrapper div {
  width: 100%;
}

#pointer span {
  display: block;
  font-style: italic;
  margin-bottom: 40px;
}

#mobile {
  width: 100%;
  height: 90%;
  overflow: auto;
  padding: 20% 15px 10px 15px;
}

#mobile::-webkit-scrollbar {
  display: none;
}

#mobile-wrapper {
  margin: 10px 15px 10px 15px;
  background-color: var(--brand-primary);
  border: 15px solid var(--brand-black);
  border-radius: 40px;
}

#scroll-for-more {
  font-size: 12px;
  display: block;
  margin-top: 15px;
}

.some-desc {
  letter-spacing: initial;
}

.some-icon-container {
  font-size: 14px;
  text-align: left;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.some-icon-container img {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.some-icon-container img:hover {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  transform: scale(1.4);
}

.stage {
  display: flex;
  margin-top: 5px;
  width: 100%;
}

.box {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto;
  transform-origin: bottom;
}

.bounce-2 {
  animation-name: bounce-2;
  animation-timing-function: ease;
}

@keyframes bounce-2 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.arrow {
  height: 25px;
}

@media only screen and (max-width: 800px) {
  .flex-wrapper {
    display: flex;
    flex-grow: initial;
    flex-basis: initial;
    height: initial;
    flex-direction: column;
  }

  .flex-wrapper div {
    width: initial;
  }

  .some-desc {
    display: none;
  }

  .some-icon-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-template-columns: initial;
    grid-template-rows: initial;
    grid-column-gap: initial;
    grid-row-gap: initial;
    margin-bottom: 2rem;
  }

  .some-icon-container img:hover {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    transform: scale(1.4);
  }

  #pointer {
    margin: 20px 0px;
  }

  #youtube-logo {
    height: 30px;
  }

  #mobile {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: initial;
  }

  #mobile-wrapper {
    background-color: initial;
    border: initial;
    border-radius: initial;
  }

  .post {
    border-top: 1px solid var(--brand-white);
    padding-top: 25px;
  }

  .stage {
    display: none;
  }
}
</style>