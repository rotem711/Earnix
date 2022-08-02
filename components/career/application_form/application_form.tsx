import classNames from 'classnames'
import Head from 'next/head'
import { GlobalContext } from 'pages/_app'
import React, { useContext } from 'react'
import styles from './application_form.module.scss'

const ApplicationForm = ({ jobId }: { jobId: string }) => {
  const Globals = useContext(GlobalContext)
  // TODO: remove this once the site is live
  // we are now using the old URL since the new site isnt live yet
  const cssURL = window.location.host === 'earnix.com'
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/styles/comeet.css`
    : 'https://earnix.com/wp-content/themes/earnix/resources/assets/additional/comeet-form.css?v=1'

  return (
    <div className={classNames(styles.root, 'pt-40')}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.comeetInit = function() {
                COMEET.init({
                  "token":       "${process.env.NEXT_PUBLIC_COMEET_TOKEN}",
                  "company-uid": "${process.env.NEXT_PUBLIC_COMEET_COMPANY_ID}",
                  "company-name":"Earnix"
                  //add more parameters here
                });
            };

            (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return; } js = d.createElement(s); js.id = id;
            js.src = "//www.comeet.co/careers-api/api.js"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'comeet-jsapi'));
        `,
          }}
        />
      </Head>
      <h3 className="text-white text-center mb-20">
        {Globals.translations.JOIN_OUR_TEAM}
      </h3>
      <script
        type="comeet-applyform"
        data-position-uid={jobId}
        data-apply-as-employee="false"
        data-field-email-required="true"
        data-field-phone-required="true"
        data-field-resume="true"
        data-field-linkedin="true"
        data-require-profile="resume"
        data-field-website="false"
        data-field-website-required="false"
        data-field-coverletter="false"
        data-field-coverletter-required="false"
        data-field-portfolio="false"
        data-field-portfolio-required="false"
        data-field-personalnote="false"
        data-field-personalnote-required="false"
        data-labels-position="top"
        data-css-url={cssURL}
        data-css-cache="false"
        data-button-text=""
        data-color="#f34d2d"
        data-button-color="#f34d2d"
      />
    </div>
  )
}

export default ApplicationForm
