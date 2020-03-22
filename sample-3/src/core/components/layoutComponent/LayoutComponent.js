import React, { Node } from 'react'
import styles from './layoutComponent.module.css'

type ILayoutComponent = {
    children: Node,
}

const LayoutComponent = ({ children }: ILayoutComponent) => (
    <div className={styles.container}>{children}</div>
)

export default LayoutComponent
