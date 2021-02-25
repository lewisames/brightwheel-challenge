import { GithubAuthor } from './githubAuthor';

export interface GithubCommit {
  author: GithubAuthor | null;
  commit: {
    author: GithubCommitAuthor;
    message: string;
    html_url: string;
    node_id: string;
    sha: string;
  };
}

export interface GithubCommitAuthor {
  name: string;
  email: string;
  date: Date;
}
