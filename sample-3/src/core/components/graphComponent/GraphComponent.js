// @flow

import React, { Node } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import styles from './graphComponent.module.css'

type IGraphComponent = {
    data: {
        date: string,
        value: number,
    }[],
    Controls: Node,
}

type ILineLabel = {
    x: number,
    y: number,
    stroke: string,
    value: number,
}

const LineLabel = ({ x, y, stroke, value }: ILineLabel) => (
    <text
        x={x}
        y={y}
        dy={-12}
        fill={stroke}
        className={styles.label}
        textAnchor="middle"
    >
        {value}
    </text>
)

const GraphComponent = ({ data, Controls }: IGraphComponent) => (
    <div className={styles.wrapper}>
        <LineChart
            width={490}
            height={225}
            data={data}
            className={styles.container}
            margin={{
                top: 20, right: 30, left: 20, bottom: 10,
            }}
        >
            <CartesianGrid />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Line dataKey="value" stroke="#cccccc" fill="#cccccc" label={<LineLabel />} />
        </LineChart>
        <div className={styles.controls}>{Controls}</div>
    </div>
)

export default GraphComponent
