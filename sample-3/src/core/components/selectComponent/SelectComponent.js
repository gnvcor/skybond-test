// @flow

import React, { useState, useLayoutEffect } from 'react'
import styles from './selectComponent.module.css'
import DropdownElement from './DropdownElement'

type ISelectElement = {
    value: string,
    onClick: () => void,
}

type ISelectComponent = {
    data: {
        id: string,
        value: string,
        onClick: () => void,
    }[],
    activeId: string,
    isOpen?: boolean,
}

const SelectElement = ({ value, onClick }: ISelectElement) => (
    <div onClick={onClick} className={styles.item}>{value}</div>
)

const SelectComponent = ({ data, activeId }: ISelectComponent) => {
    const getActiveValue = () => data.filter(element => element.id === activeId)[0].value

    const [isOpen, setIsOpen] = useState(false)

    const closeDropdown = () => setIsOpen(false)

    const onToggleDropdown = e => {
        e.stopPropagation()

        if (isOpen) {
            closeDropdown()

            return
        }

        setIsOpen(true)
    }

    useLayoutEffect(() => {
        document.addEventListener('click', closeDropdown)

        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    })

    return (
        <div className={styles.container}>
            <SelectElement onClick={onToggleDropdown} value={getActiveValue()} />
            {isOpen && (
                <DropdownElement
                    data={data}
                    activeId={activeId}
                    onToggleDropdown={onToggleDropdown}
                />
            )}
        </div>
    )
}

export default SelectComponent
