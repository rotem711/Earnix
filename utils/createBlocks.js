const fetch = require('isomorphic-fetch')
require('dotenv').config({ path: __dirname + '/../.env.local' })
const { exec } = require('child_process')

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

const query = `
  query Types {
    __type(name: "Sets_Replicator") {
      possibleTypes {
        name
      }
    }
  }
`

const main = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
  const types = res.data?.__type?.possibleTypes
  if (!types) {
    return console.log('type for Sets_Replicator not found')
  }
  const blocks = types.map((i) => i.name.replace('Set_Replicator_Block', ''))
  createBlocks(blocks)
}
main()
