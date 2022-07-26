export default `
  nav(handle: "main_nav") {
    tree {
      page {
        id
        url
        title
      }
      depth
      children {
        depth
        page {
          id
          url
          title
        }
      }
    }
  }
`
