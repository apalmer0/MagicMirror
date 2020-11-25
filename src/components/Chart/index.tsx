import React, { FC } from 'react'

import SparklinesClone from '../SparklinesClone'
import Barchart from '../Barchart'

const WHITE = '#ffffff'

interface Value {
  precip: number
  temp: number
  time: string
}

interface Props {
  data: Value[]
}

const Chart: FC<Props> = (props) => {
  const { data } = props
  const whiteBars = { fill: WHITE }

  if (!data) return null

  return (
    <div>
      <SparklinesClone height={25} width={180} dataObjects={data}>
        <Barchart style={whiteBars} />
      </SparklinesClone>
    </div>
  )
}

export default Chart
