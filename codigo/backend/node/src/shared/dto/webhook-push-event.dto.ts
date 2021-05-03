export class GithubWebhookEventDto {
  ref: string;
  before: string;
  after: string;
  repository: {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: true;
    owner: {
      name: string;
      email: string;
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: false;
    };
    html_url: string;
    description: null;
    fork: false;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: number;
    updated_at: string;
    pushed_at: number;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: true;
    has_projects: true;
    has_downloads: true;
    has_wiki: true;
    has_pages: false;
    forks_count: number;
    mirror_url: null;
    archived: false;
    disabled: false;
    open_issues_count: number;
    license: null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    stargazers: number;
    master_branch: string;
  };
  pusher: {
    name: string;
    email: string;
  };
  sender: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
  };
  created: false;
  deleted: false;
  forced: false;
  base_ref: null;
  compare: string;
  commits: {
    id: string;
    tree_id: string;
    distinct: true;
    message: string;
    timestamp: string;
    url: string;
    author: {
      name: string;
      email: string;
      username: string;
    };
    committer: {
      name: string;
      email: string;
      username: string;
    };
    added: string[];
    removed: string[];
    modified: string[];
  }[];
  head_commit: {
    id: string;
    tree_id: string;
    distinct: true;
    message: string;
    timestamp: string;
    url: string;
    author: {
      name: string;
      email: string;
      username: string;
    };
    committer: {
      name: string;
      email: string;
      username: string;
    };
    added: string[];
    removed: string[];
    modified: string[];
  };
}

export class GitlabWebhookEventDto {
  object_kind: string;
  event_name: string;
  before: string;
  after: string;
  ref: string;
  checkout_sha: string;
  message: null;
  user_id: number;
  user_name: string;
  user_username: string;
  user_email: string;
  user_avatar: string;
  project_id: number;
  project: {
    id: number;
    name: string;
    description: string;
    web_url: string;
    avatar_url: null;
    git_ssh_url: string;
    git_http_url: string;
    namespace: string;
    visibility_level: number;
    path_with_namespace: string;
    default_branch: string;
    ci_config_path: string;
    homepage: string;
    url: string;
    ssh_url: string;
    http_url: string;
  };
  commits: {
    id: string;
    message: string;
    title: string;
    timestamp: string;
    url: string;
    author: {
      name: string;
      email: string;
    };
    added: string[];
    modified: string[];
    removed: string[];
  }[];
  total_commits_count: number;
  push_options: any;
  repository: {
    name: string;
    url: string;
    description: string;
    homepage: string;
    git_http_url: string;
    git_ssh_url: string;
    visibility_level: number;
  };
}
