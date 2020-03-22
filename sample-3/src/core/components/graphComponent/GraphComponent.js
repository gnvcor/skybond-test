// @flow

import React, { Node } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import styles from './graphComponent.module.css'

type IGraphData = {
    data: {
        date: string,
        value: number,
    }[]
}

type IGraphComponent = IGraphData & {
    Controls: Node,
}

type ILineLabel = IGraphData & {
    index: number,
    x: number,
    y: number,
    stroke: string,
    value: number,
}

const LineLabel = ({ data, index, x, y, stroke, value }: ILineLabel) => {
    const MAX_LENGTH_DATA = 14

    // Если количество точек на графике больше 14, label выводим только для четных элементов
    if (data.length > MAX_LENGTH_DATA && index % 2 === 0) return false

    return (
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
}

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
            <Line
                dataKey="value"
                stroke="#cccccc"
                strokeWidth={2}
                fill="#cccccc"
                label={<LineLabel data={data} />}
            />
        </LineChart>
        <div className={styles.controls}>{Controls}</div>
    </div>
)

export default GraphComponent
