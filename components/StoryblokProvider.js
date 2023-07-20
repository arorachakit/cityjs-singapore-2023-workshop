/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import HeroSection from "./HeroSection";
import Article from "./Article";
import PopularArtices from "./PopularArticles";
import AllArticles from "./AllArticles";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "8w7GdKE2CV5wFlsPfQu8Zwtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    hero_section: HeroSection,
    article : Article,
    popular_articles: PopularArtices,
    all_articles: AllArticles,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
