import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {"content-type":"application/json; charset=utf-8"},
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  token: Scalars['String'];
};

export type Mainhub = {
  __typename?: 'Mainhub';
  id: Scalars['Float'];
  name: Scalars['String'];
  rampCount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: AuthenticateResponse;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  mainhubs: Array<Mainhub>;
  login: AuthenticateResponse;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MainhubsQueryVariables = Exact<{ [key: string]: never; }>;


export type MainhubsQuery = (
  { __typename?: 'Query' }
  & { mainhubs: Array<(
    { __typename?: 'Mainhub' }
    & Pick<Mainhub, 'id' | 'name'>
  )> }
);


export const MainhubsDocument = `
    query Mainhubs {
  mainhubs {
    id
    name
  }
}
    `;
export const useMainhubsQuery = <
      TData = MainhubsQuery,
      TError = unknown
    >(
      variables?: MainhubsQueryVariables, 
      options?: UseQueryOptions<MainhubsQuery, TError, TData>
    ) => 
    useQuery<MainhubsQuery, TError, TData>(
      ['Mainhubs', variables],
      fetcher<MainhubsQuery, MainhubsQueryVariables>(MainhubsDocument, variables),
      options
    );