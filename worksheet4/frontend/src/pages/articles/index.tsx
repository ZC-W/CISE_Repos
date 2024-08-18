import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import SortableTable from "../../components/table/SortableTable";
import { fetchArticles } from "../../utils/apiService";

interface ArticlesInterface {
  id: string;
  title: string;
  authors: string[];
  source: string;
  pubyear: number;
  doi: string;
  summary: string;
  linked_discussion: string;
}

type ArticlesProps = {
  articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "summary", label: "Summary" },
    { key: "linked_discussion", label: "Linked Discussion" },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      {articles.length > 0 ? (
        <SortableTable headers={headers} data={articles} />
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
  let articles: ArticlesInterface[] = [];

  try {
    // Fetch articles from the backend API
    const fetchedArticles = await fetchArticles();

    articles = fetchedArticles.map((article: any) => {
      console.log("Summary:", article.summary);
      console.log("Linked Discussion:", article.linked_discussion);

      return {
        id: article.id ?? article._id,
        title: article.title ?? "Untitled",
        authors: article.authors ?? [],
        source: article.source ?? "Unknown Source",
        pubyear: article.pubyear ?? null,
        doi: article.doi ?? "No DOI",
        summary: article.summary ?? "No summary available",
        linked_discussion: article.linked_discussion ?? "No linked discussion",
      };
    });
  } catch (error) {
    console.error("Failed to fetch articles:", error);
  }

  return {
    props: {
      articles,
    },
  };
};
export default Articles;
