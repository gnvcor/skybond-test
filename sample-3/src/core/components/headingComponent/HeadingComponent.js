// @flow

import React, { Node } from 'react'
import styles from './headingComponent.module.css'

type IHeadingComponent = {
    title: string,
    subTitle: string,
    Meta: Node,
}

const HeadingComponent = ({ title, subTitle, Meta }: IHeadingComponent) => (
    <div className={styles.container}>
        <div className={styles.heading}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
        </div>
        <div className={styles.meta}>
            <Meta />
        </div>
    </div>
)

export default HeadingComponent
