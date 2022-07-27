import React, { FunctionComponent, useContext, useState } from 'react'
import { GlobalContext } from 'pages/_app'
import styles from './connect_with_us.module.scss'
import ConnectWithUsInterface from './connect_with_us.interface'
import Chevron from '../../generic/icons/chevron'

export const typename = 'Set_Replicator_BlockConnectWithUs'

const ConnectWithUsBlock: FunctionComponent<{
  block: ConnectWithUsInterface
}> = ({ block }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const globals = useContext(GlobalContext)

  const selectOptions = [
    {
      label: 'optionOneLabel',
      value: 'optionOneValue',
    },
    {
      label: 'optionTwoLabel',
      value: 'optionTwoValue',
    },
    {
      label: 'optionThreeLabel',
      value: 'optionThreeValue',
    },
    {
      label: 'optionFourLabel',
      value: 'optionFourValue',
    },
  ]

  const validate = (e) => {
    if (e.target.value.length > 0) {
      e.target.classList.add('filled')
    } else {
      e.target.classList.remove('filled')
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    const form = new FormData(e.target)

    console.log(Object.fromEntries(form.entries()))

    // setLoading(true)
    // fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/!/forms/contact`, {
    //   method: 'POST',
    //   body: form,
    //   referrerPolicy: 'no-referrer',
    //   headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //   },
    // })
    //   .then((response) => {
    //     setLoading(false)
    //     if (response.status === 200) {
    //       setSuccess(true)
    //     } else {
    //       setError(true)
    //     }
    //   })
    //   .catch(() => {
    //     setLoading(false)
    //     setError(true)
    //   })
    // return

    setLoading(false)
    setSuccess(true)
  }

  return (
    <div className={`${styles.root} container default-grid`}>
      <h3 className="col-span-4 md:col-span-8 lg:col-span-12">{block.cwu_headline}</h3>
      <p className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 xxl:col-span-4 xxl:col-start-6 typo-p">
        {block.cwu_copy}
      </p>
      <div className="col-span-4 md:col-span-8 lg:col-span-12 xl:col-span-10 xl:col-start-2 xxl:col-span-8 xxl:col-start-3 typo-p">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input
            type="text"
            className="halfWidth"
            name="inputFieldOneName"
            placeholder="inputFieldOnePlaceholder"
            required
            onChange={(e) => validate(e)}
          />
          <div className={`${styles.customSelect} halfWidth`}>
            <select
              name="selectField"
              required
              onChange={(e) => validate(e)}
            >
              <option value="" selected disabled>
                {globals.translations.FORMPLACEHOLDER_SELECT}
              </option>
              {selectOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <Chevron className="" />
          </div>
          <input
            type="text"
            name="inputFieldTwoName"
            placeholder="inputFieldTwoPlaceholder"
            required
            onChange={(e) => validate(e)}
          />
          <input
            type="text"
            name="inputFieldThreeName"
            placeholder="inputFieldThreePlaceholder"
            required
            onChange={(e) => validate(e)}
          />
          <textarea
            name="message"
            required
            rows={10}
            onChange={(e) => validate(e)}
            placeholder={globals.translations.FORMPLACEHOLDER_MESSAGE}
          />
          <div className={`${styles.customCheckbox}`}>
            <div>
              <input type="checkbox" name="dsgvo" required />
              <span />
            </div>
            <label htmlFor="dsgvo">{globals.translations.FORM_OPTIN}</label>
          </div>
          {!loading && (
            <input type="submit" value={globals.translations.FORM_SUBMIT} />
          )}
        </form>
        {success && <div>SUCCESS MESSAGE</div>}
        {error && <div>ERROR MESSAGE</div>}
      </div>
    </div>
  )
}

export default ConnectWithUsBlock
