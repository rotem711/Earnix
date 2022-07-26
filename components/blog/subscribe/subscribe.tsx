import React, { useContext, useState } from 'react'
import { GlobalContext } from 'pages/_app'

import styles from './subscribe.module.scss'

const Subscribe = () => {
  const Globals = useContext(GlobalContext)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    console.log(inputValue) // TO-DO: send value

    setLoading(false)
    setSuccess(true)
  }

  return (
    <div className={`${styles.root}`}>
      <h5>
        {Globals.translations.SUBSCRIBEBLOG}
        .
      </h5>
      <form className={`${styles.inputWrapper} typo-p`} onSubmit={handleSubmit}>
        <div>
          <input type="email" onChange={handleChange} required />
          {inputValue.length < 1 && (
            <span className={`${styles.placeholder}`}>
              Email
              <span>*</span>
            </span>
          )}
        </div>
        {!loading && (
          <button type="submit" disabled={loading}>
            {Globals.translations.SIGNUP}
          </button>
        )}
      </form>
      {success && (
        <div className={`${styles.message} typo-tag`}>
          IT WAS A SUCCESS
        </div>
      )}
      {error && (
        <div className={`${styles.message} typo-tag`}>
          THERE WAS AN ERROR
        </div>
      )}
    </div>
  )
}

export default Subscribe
