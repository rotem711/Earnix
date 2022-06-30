import fetch from 'isomorphic-fetch'

const gql = async (query: string, variables: { [x: string]: string | number | string[] } = {}) => {
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
    throw new Error('E')
  }
  return res.json()
}

export default gql
