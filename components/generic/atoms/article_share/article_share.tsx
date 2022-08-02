import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from 'pages/_app'
import styles from './article_share.module.scss'
import SocialItem from './social_item/social_item'
import LinkedinIcon from './linkedin_icon/linkedin_icon'
import FacebookIcon from './facebook_icon/facebook_icon'
import TwitterIcon from './twitter_icon/twitter_icon'
import WhatsappIcon from './whatsapp_icon/whatsapp_icon'
import EmailIcon from './email_icon/email_icon'

const ArticleShare = () => {
  const Globals = useContext(GlobalContext)
  const [currentPageHref, setCurrentPageHref] = useState('')

  useEffect(() => {
    setCurrentPageHref(window.location.href)
  }, [])

  return (
    <div
      className={`${styles.root}`}
    >
      <div
        className={`${styles.headline} typo-h6`}
      >
        {Globals.translations.SHAREARTICLE}
        :
      </div>
      <div className={`${styles.socials}`}>
        <SocialItem child={<LinkedinIcon />} href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentPageHref}`} />
        <SocialItem child={<FacebookIcon />} href={`https://www.facebook.com/sharer/sharer.php?u=${currentPageHref}`} />
        <SocialItem child={<TwitterIcon />} href={`https://twitter.com/intent/tweet?url=${currentPageHref}`} />
        <SocialItem child={<WhatsappIcon />} href={`https://web.whatsapp.com/send?text=${currentPageHref}`} />
        <SocialItem child={<EmailIcon />} href={`mailto:?subject=subject&body=${currentPageHref}`} />
      </div>
    </div>
  )
}

export default ArticleShare
