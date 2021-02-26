import { GithubAuthor } from './githubAuthor';

export interface GithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: GithubAuthor;
  html_url: string;
  description: string;
  homepage: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  archived: boolean;
  disabled: boolean;
  forks: number;
}
