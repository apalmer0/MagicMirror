import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const styles: Styles = {
  todoItem: {
    fontSize: '25px',
    marginBottom: '15px',
    marginTop: '15px',
  },
  listBullet: {
    position: 'absolute',
    left: '-50px',
    display: 'inline-block',
  },
  listContent: {
    display: 'inline-block',
  },
}

export default styles
