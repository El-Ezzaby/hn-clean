// lib/hnApi.ts

export interface HNItem {
  id: number;
  title?: string;
  by?: string;
  score?: number;
  time?: number; // Unix timestamp
  url?: string;
  text?: string; // For Ask HN posts
  descendants?: number; // Comment count
  type: 'story' | 'comment' | 'job' | 'poll';
}

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

// Fetch top story IDs and get details for the first N items
export async function getTopStories(category: string = 'top', limit: number = 15): Promise<HNItem[]> {
  try {
    // Categories on HN API: topstories, newstories, askstories, showstories, jobstories
    const endpoint = category === 'top' ? 'topstories' : `${category}stories`;
    const res = await fetch(`${BASE_URL}/${endpoint}.json`);
    const storyIds: number[] = await res.json();

    // Fetch the detailed item for the first `limit` IDs in parallel
    const storyPromises = storyIds.slice(0, limit).map((id) => getItem(id));
    const stories = await Promise.all(storyPromises);

    return stories.filter(Boolean) as HNItem[];
  } catch (error) {
    console.error('Failed to fetch stories from HN API:', error);
    return [];
  }
}

// Fetch a single item (story or comment) by ID
export async function getItem(id: number): Promise<HNItem | null> {
  try {
    const res = await fetch(`${BASE_URL}/item/${id}.json`);
    return await res.json();
  } catch (error) {
    console.error(`Failed to fetch item ${id}:`, error);
    return null;
  }
}