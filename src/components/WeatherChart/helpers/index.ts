import { Point } from '../../../types'

interface Props {
  height: number
  values: number[]
  width: number
}

export const dataToPoints = ({ height, values, width }: Props): Point[] => {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const difference = max - min

  const barWidth = width / values.length

  const result = values.map((value, i) => {
    const shareOfDifference = (value - min) / difference
    const modifiedShareOfDifference = value === min ? 0.1 : shareOfDifference

    return {
      x: i * barWidth,
      y: modifiedShareOfDifference * height,
    }
  })

  return result
}
