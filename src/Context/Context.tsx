import React, { createContext } from 'react'

interface ContextInterface {
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

const AppContext = createContext<ContextInterface | null>(null);

const Context = () => {
    <AppContext.Provider 
        value = {
            
        }
    >
        
    </AppContext.Provider>
}

export default Context
