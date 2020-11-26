import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  todoStyles: {
    position: 'absolute',
    right: '20px',
    textAlign: 'right',
    top: '50px',
  },
}

export default styles
