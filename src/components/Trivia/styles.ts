import { CSSProperties } from 'react'

interface Styles {
  [key: string]: CSSProperties
}

const red = '#cc0000'
const green = '#00cc00'

const styles: Styles = {
  containerStyles: {
    marginBottom: '40px',
  },
  headerStyles: {
    marginBottom: '10px',
  },
  categoryStyles: {
    fontSize: '24px',
    marginRight: '40px',
    textDecoration: 'underline',
  },
  questionStyles: {
    fontStyle: 'italic',
    marginRight: '20px',
  },
  answerContainerStyles: {
    marginTop: '5px',
  },
  difficultyStyles: {
    fontSize: '12px',
  },
  statusStyles: {
    fontWeight: 'bold',
  },
  guessStyle: {
    color: red,
  },
  correctStyle: {
    color: green,
    fontSize: '20px',
  },
  greenStyle: {
    color: green,
  },
  redStyle: {
    color: red,
  },
}

export default styles
