// @flow

import React, { useState, useEffect } from 'react'
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

    const onOpenDropdown = e => {
        e.preventDefault()

        if (isOpen) {
            setIsOpen(false)

            return
        }

        setIsOpen(true)
    }

    useEffect(() => {
        document.addEventListener('click', onOpenDropdown)

        return () => {
            document.removeEventListener('click', onOpenDropdown)
        }
    })

    return (
        <div className={styles.container}>
            <SelectElement onClick={onOpenDropdown} value={getActiveValue()} />
            {isOpen && (
                <DropdownElement
                    data={data}
                    activeId={activeId}
                    onOpenDropdown={onOpenDropdown}
                />
            )}
        </div>
    )
}

export default SelectComponent
