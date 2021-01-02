import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import Setting from "../views/Setting.js";
import Errorpage from "../views/Errorpage.js";
const router = async () => {
  const routes = [
    {
      path: "/",
      view: Dashboard,
    },
    {
      path: "/posts",
      view: Posts,
    },
    {
      path: "/setting",
      view: Setting,
    },
    {
      path: "/error",
      view: Errorpage,
    },
  ];

  const possibleMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: route.path === location.pathname,
    };
  });
  let match = possibleMatches.find((possibleMatch) => possibleMatch.isMatch);

  if (!match) {
    match = {
      route: routes[3],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
  console.log(match.route.view());
};

window.addEventListener("popstate", router);
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
