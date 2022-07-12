import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GlobalContext } from 'pages/_app'
import FooterInterface from './footer.interface'
import styles from './footer.module.scss'

const FooterBlock = ({
  data,
} : {
  data: FooterInterface
}) => {
  const {
    logo,
    links,
    legal_links,
    social_links,
  } = data

  const Globals = useContext(GlobalContext)

  const ctaLinks = () => (
    (links) && (
      <ul className="grid grid-cols-2 gap-x-20 gap-y-26 md:gap-y-22 mb-64">
        {links.map((item, index) => (
          <li className="typo-h5">
            <Link
              href={item.cta_url}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <a href={item.cta_url}>{item.cta_title}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  )

  return (
    <footer
      className={`${styles.root}`}
    >
      <div className="container grid gap-20 grid-cols-12">
        <div className={`${styles.leftBlock} col-span-12 md:col-span-6 lg:col-span-5`}>
          <div className={`${styles.logo} mb-64`}>
            <Link href="/">
              <a href="/">
                <Image
                  src={logo.permalink}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </a>
            </Link>
          </div>

          <div>
            <div className={`${styles.mobileCtaLinks}`}>
              {ctaLinks()}
            </div>

            {(social_links) && (
              <div className="mb-32 md:mb-40">
                <p className="mb-16">
                  {Globals.translations.FOLLOW}
                  :
                </p>
                <ul>
                  {social_links && social_links.map((item, index) => (
                    <li className={`${index > 0 ? 'ml-30' : ''}`}>
                      <Link
                        href={item.url}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={item.logo.permalink}
                            alt={item.logo.alt}
                            width="20"
                            height="20"
                          />
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={`${styles.legals} typo-tag-lower`}>
              <ul>
                <li className="mr-15">
                  ©Earnix&nbsp;
                  {`${new Date().getFullYear()}`}
                </li>
                {legal_links && legal_links.map((item, index) => (
                  <li>
                    <Link
                      href={item.link_url}
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                    >
                      <a href={item.link_url}>{item.text}</a>
                    </Link>
                    {(index < legal_links.length - 1) && (
                      <span className="mx-15">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.rightBlock} col-span-6 md:col-start-7`}>
          {ctaLinks()}
        </div>
      </div>
    </footer>
  )
}

export default FooterBlock
