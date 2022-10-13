import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
// import News from "@/views/News.vue";
import Tournaments from "@/views/Tournaments.vue";
import Information from "@/views/Information.vue";
import Tickets from "@/views/Tickets.vue";
//import JoinUs from "@/views/JoinUs.vue";
import Partner from "@/views/Partner.vue";
import NotFound from "@/views/NotFound.vue";
// import Schedule from "@/views/Schedule.vue";
// import Servers from "@/views/Servers.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "ITU LAN",
        id: "home"
      }
    },
    {
      path: "/tickets",
      name: "buy tickets",
      component: Tickets,
      meta: {
        title: "Tickets",
        id: "tickets"
      }
    },
    // {
    //   path: "/schedule",
    //   name: "schedule",
    //   component: Schedule,
    //   meta: {
    //     title: "Schedule",
    //     id: "Schedule"
    //   }
    // },
    // {
    //   path: "/news",
    //   name: "news",
    //   component: News,
    //   meta: {
    //     title: "News",
    //     id: "news"
    //   }
    // },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments,
      meta: {
        title: "Tournaments",
        id: "tournaments"
      }
    },
    {
      path: "/information",
      name: "faq",
      component: Information,
      meta: {
        title: "Information",
        id: "information"
      }
    },
    //{
    //   path: "/join",
    //   name: "join the crew",
    //   component: JoinUs,
    //   meta: {
    //     title: "Join the Crew",
    //     id: "join"
    //   }
    // },
    {
      path: "/partner",
      name: "partner with us",
      component: Partner,
      meta: {
        title: "Partner with us",
        id: "partner"
      }
    },
    // {
    //   path: "/servers",
    //   name: "servers",
    //   component: Servers,
    //   meta: {
    //     title: "Servers",
    //     id: "server"
    //   }
    // },
    {
      path: "*",
      component: NotFound,
      meta: {
        title: "404"
      }
    }
  ]
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router;
