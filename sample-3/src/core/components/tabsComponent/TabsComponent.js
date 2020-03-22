// @flow

import React from 'react'
import cn from 'classnames'
import styles from './tabsComponent.module.css'

type ITabElement = {
    id: string,
    value: string,
    activeId: string,
    onClick: () => void,
}

type ITabsComponent = {
    data: {
        id: string,
        value: string,
    }[],
    activeId: string,
}

const TabElement = ({ id, value, onClick, activeId }: ITabElement) => (
    <div onClick={onClick} className={cn(styles.item, { [styles.active]: id === activeId })}>
        {value}
    </div>
)

const TabsComponent = ({ data, activeId }: ITabsComponent) => (
    <div className={styles.container}>
        {data.map(element => <TabElement key={element.id} {...element} activeId={activeId} />)}
    </div>
)

export default TabsComponent
