import fetch from 'isomorphic-fetch'
import { useRef } from 'react'
import useSWR from 'swr'

const gql = async (
  query: string,
  variables: { [x: string]: string | number | string[] } = {},
) => {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  if (!res.ok) {
    throw new Error(JSON.stringify(await res.text()))
  }
  return res.json()
}

export default gql

const useStickyResult = (value) => {
  const val = useRef()
  if (value !== undefined) val.current = value
  return val.current
}

const fetcher = ({ query, variables }) => fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
  body: JSON.stringify({
    query,
    variables,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
}).then((r) => r.json()).then((r) => r.data)

export const useSWRQuery = (query, variables, defaultValue) => {
  const { data, error } = useSWR(query && { query, variables }, fetcher)
  const stickyData = useStickyResult(query ? data : defaultValue)

  return {
    data: stickyData,
    isLoading: query && !error && !data,
    isError: error,
  }
}
