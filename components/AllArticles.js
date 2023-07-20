import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";


const AllArticles = async ({ blok }) => {

    const storyblokApi = getStoryblokApi()
    let {data} = await storyblokApi.get('cdn/stories', {
        starts_with: 'blog-articles',
        version: 'draft',
        cv: Math.random(),
        is_startpage: false
    })
    let articles = data.stories.map((a) => {
        a.content.slug = a.slug
        return a
    })
  return (
    <>
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        { articles[0] && articles.map((article) => (
          <ArticleTeaser article={article.content} key={article.uuid} />
        ))}
      </div>
    </>
  );
};
export default AllArticles;
