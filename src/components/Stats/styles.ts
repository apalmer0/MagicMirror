import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  statData: {
    textAlign: 'right',
  },
  tableHeader: {
    fontSize: '16px',
    textDecoration: 'underline',
  },
  tableStyles: {
    fontSize: '14px',
    color: 'white',
    display: 'inline',
    marginRight: '40px',
  },
}

export default styles
