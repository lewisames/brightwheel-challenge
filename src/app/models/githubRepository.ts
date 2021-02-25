import { GithubAuthor } from './githubAuthor';

export interface GithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: GithubAuthor;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  archived: boolean;
  disabled: boolean;
  forks: number;
  open_issues: number;
  watchers: number;
}
