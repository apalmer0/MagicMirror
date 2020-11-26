import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  dateStyles: {
    fontSize: '50px',
    marginBottom: 0,
    marginTop: 0,
  },
  dayStyles: {
    fontSize: '30px',
    marginBottom: 0,
    marginTop: '10px',
  },
  timeStyles: {
    fontSize: '140px',
    marginBottom: 0,
    marginTop: '20px',
  },
}

export default styles
