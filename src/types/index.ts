export type Work = {
  id: number;
  name: string;
  teaser: string;
  description: string;
  thumbnail: string;
  github: string | null;
  live_url: string | null;
  date: string | null;
  status: 'In Progress' | 'Building' | 'Completed';
  Category: { id: number; name: string };
};
