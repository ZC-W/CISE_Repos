import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import SortableTable from "../../components/table/SortableTable";
import { fetchArticles } from "../../utils/apiService";

interface ArticlesInterface {
  id: string;
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
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
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
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
    articles = fetchedArticles.map((article: any) => ({
      id: article.id ?? article._id,
      title: article.title,
      authors: article.authors,
      source: article.source,
      pubyear: article.pubyear,
      doi: article.doi,
      claim: article.claim,
      evidence: article.evidence,
    }));
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
