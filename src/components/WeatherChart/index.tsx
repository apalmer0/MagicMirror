import React, { FC } from 'react'

import { dataToPoints } from './helpers'
import { WeatherChartData } from '../../types'
import Barchart from '../Barchart'

interface Props {
  data: WeatherChartData[]
}

const height = 25
const width = 180

const WeatherChart: FC<Props> = ({ data }) => {
  const labels = data.map((val) => val.time)
  const values = data.map(({ temp }) => temp)

  const points = dataToPoints({ height, values, width })
  const viewBox = `0 0 ${width} ${height + 10}`

  return (
    <svg preserveAspectRatio="none" viewBox={viewBox}>
      <Barchart data={data} height={height} labels={labels} points={points} />
    </svg>
  )
}

export default WeatherChart
