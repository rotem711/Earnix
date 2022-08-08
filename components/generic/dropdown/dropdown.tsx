/* eslint-disable max-len */
import Image from 'next/image'
import React from 'react'
import styles from './dropdown.module.scss'
import DropdownInterface from './dropdown.interface'
import useDropdown from './dropdown.hook'

const Dropdown: React.FunctionComponent<DropdownInterface> = ({
  name,
  onSelect,
  options,
}) => {
  const { areOptionsVisible, handleDropdownClick, handleOptionSelection } = useDropdown({ onSelect })

  return (
    <div>
      <div
        className="flex items-center gap-x-10 cursor-pointer"
        onClick={handleDropdownClick}
        onKeyDown={handleDropdownClick}
        role="presentation"
      >
        <h6 className={styles.dropdown__name}>{name}</h6>
        <Image
          alt="Arrowhead pointing down Icon"
          className={`${styles.dropdown__icon} ${
            areOptionsVisible ? styles['dropdown__icon--rotated'] : ''
          }`}
          height="22"
          src="/assets/arrowheadPointingDown.svg"
          width="22"
        />
      </div>
      {areOptionsVisible && (
        <div
          className={`${styles.dropdown__optionsContainer} absolute bg-white`}
        >
          <p className={`${styles.dropdown__optionsTitle} typo-p pb-16`}>
            {`Select ${name}`}
          </p>
          {options.map((option) => (
            <div className={styles.dropdown__optionsGroup} key={option}>
              <p
                className="typo-p py-12 cursor-pointer pb-16"
                onClick={() => handleOptionSelection(option)}
                onKeyDown={() => handleOptionSelection(option)}
                role="presentation"
              >
                {option}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
