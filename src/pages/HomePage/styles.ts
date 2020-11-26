import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  halfPage: {
    display: 'inline-block',
  },
  homepageContainer: {
    height: '100%',
  },
}

export default styles
