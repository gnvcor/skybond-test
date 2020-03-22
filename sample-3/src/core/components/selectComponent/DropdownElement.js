// @flow

import React from 'react'
import cn from 'classnames'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styles from './dropdownElement.module.css'

type IElement = {
    id: string,
    value: string,
    activeId: string,
    onItemClick: () => void,
}

type IDropdownElement = {
    data: {
        id: string,
        value: string,
        onClick: () => void,
    }[],
    activeId: string,
    onOpenDropdown: () => void,
}

const Element = compose(
    withHandlers({
        onItemClick: props => e => {
            props.onClick()
            props.onOpenDropdown(e)
        }
    }),
)(({ id, value, activeId, onItemClick }: IElement) => (
    <div onClick={onItemClick} className={cn(styles.item, { [styles.active]: id === activeId })}>
        {value}
    </div>
))

const DropdownElement = ({ data, activeId, onOpenDropdown }: IDropdownElement) => (
    <div className={styles.container}>
        {data.map(element => (
            <Element
                key={element.id}
                {...element}
                activeId={activeId}
                onOpenDropdown={onOpenDropdown}
            />
        ))}
    </div>
)

export default DropdownElement
