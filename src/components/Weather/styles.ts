import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  header: {
    textAlign: 'center',
  },
  content: {
    bottom: '0',
    position: 'absolute',
    width: '98%',
  },
}

export default styles
