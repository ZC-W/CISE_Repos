import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async () => {
  try {
    const response = await apiClient.get('/articles');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const fetchArticleById = async (id: string) => {
  try {
    const response = await apiClient.get(`/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};

export const createArticle = async (articleData: any) => {
  try {
    const response = await apiClient.post('/articles', articleData);
    return response.data;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};

// Update an existing article
export const updateArticle = async (id: string, articleData: any) => {
  try {
    const response = await apiClient.put(`/articles/${id}`, articleData);
    return response.data;
  } catch (error) {
    console.error(`Error updating article with ID ${id}:`, error);
    throw error;
  }
};

// Delete an article by ID
export const deleteArticle = async (id: string) => {
  try {
    const response = await apiClient.delete(`/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting article with ID ${id}:`, error);
    throw error;
  }
};