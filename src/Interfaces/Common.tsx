export interface ContextInterface {
    totalCount: number;
    items: {
        node_id: string;
        name: string;
        full_name: string;
        owner: {
            login: string;
        };
        description: string;
        open_issues: number;
        forks: number;
    }[]
  }