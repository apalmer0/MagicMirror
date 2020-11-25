interface Value {
  temp: number
}

interface Props {
  data: Value[]
  height: number
  margin: number
  width: number
}

const dataToPoints = (props: Props) => {
  const { data, height = 1, margin = 0, width = 1 } = props
  const tempsArray = data.map((val) => val.temp)
  const max = Math.max(...tempsArray)
  const min = Math.min(...tempsArray)
  const count = tempsArray.length

  const barWidth = (width - margin * (count + 1)) / count
  const barHeight = (height - margin * 2) / (max - min || 2)

  return tempsArray.map((d, i) => ({
    x: i * barWidth + (i + 1) * margin,
    y: (max === min ? 1 : max - d) * barHeight + margin,
  }))
}

export default {
  dataToPoints,
}
