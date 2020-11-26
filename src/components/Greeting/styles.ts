import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  greetingStyles: {
    fontSize: '30px',
    position: 'absolute',
    right: '20px',
    top: '20px',
  },
}

export default styles
