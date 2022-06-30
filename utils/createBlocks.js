const fetch = require('cross-fetch')
require('dotenv').config({ path: __dirname + '/../.env.local' })
const { ApolloClient, InMemoryCache, gql, HttpLink } = require('@apollo/client')
const { exec } = require('child_process')

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, fetch }),
})

const createBlocks = (blockNames) => {
  blockNames.forEach((blockName) => {
    exec(`echo "n" | yarn hygen block new ${blockName}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    })
  })
}

const TypeQuery = gql`
  query Types {
    __type(name: "Sets_Replicator") {
      possibleTypes {
        name
      }
    }
  }
`

const main = async () => {
  const res = await client.query({ query: TypeQuery })
  const types = res.data?.__type?.possibleTypes
  if (!types) {
    return console.log('type for Sets_Replicator not found')
  }
  const blocks = types.map((i) => i.name.replace('Set_Replicator_Block', ''))
  createBlocks(blocks)
}
main()
