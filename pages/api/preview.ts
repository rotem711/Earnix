import { NextApiRequest, NextApiResponse } from 'next'

export interface StatamicPreviewData {
  uri: string
  collection: string
  previewId: string
  previewToken: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uri, collection, token: previewToken } = req.query
  const previewId = req.query['live-preview']

  res.setPreviewData({
    uri,
    collection,
    previewId,
    previewToken,
  })
  const previous = res.getHeader('Set-Cookie') as string[]
  previous.forEach((cookie, index) => {
    previous[index] = cookie.replace('SameSite=Lax', 'SameSite=None;Secure')
  })
  res.setHeader('Set-Cookie', previous)
  res.redirect(uri as string)
}
