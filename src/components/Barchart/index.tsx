import React, { FC } from 'react'

import { shadeOfBlue } from './helpers'
import { Point, WeatherChartData } from '../../types'

interface Props {
  data: WeatherChartData[]
  height: number
  labels: string[]
  points: Point[]
}

const OLD_DATA_COLOR = '#1e1e1e'

const Barchart: FC<Props> = ({ data, height, labels, points }) => {
  const width =
    points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - 1)
      : 0

  return (
    <g transform="scale(1,-1)">
      {points.map((point, index) => {
        const { display, temp, precip } = data[index]
        const textProps = {
          fill: display ? '#fff' : OLD_DATA_COLOR,
          fontSize: 3,
          strokeWidth: 1,
          transform: 'scale(1,-1)',
        }
        const timeProps = {
          ...textProps,
          x: point.x,
          y: height + 8,
        }
        const dataProps = {
          ...textProps,
          x: point.x,
          y: height + 4 - point.y,
        }
        const precipProps = {
          ...textProps,
          y: height + 4 - point.y,
          x: point.x + 9,
        }
        const fill = display ? shadeOfBlue(precip) : OLD_DATA_COLOR

        return (
          <g key={point.x}>
            <rect
              height={point.y}
              style={{ fill }}
              width={width}
              x={point.x}
              y={-height - 5}
            />
            <text {...dataProps}>{`${temp}°`}</text>
            <text {...precipProps}>
              {display && precip >= 0 && `☔️${precip}%`}
            </text>
            <text {...timeProps}>{labels[index]}</text>
          </g>
        )
      })}
    </g>
  )
}

export default Barchart
