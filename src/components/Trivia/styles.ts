import { Styles } from '../../types'

const red = '#cc0000'
const green = '#00cc00'

const styles: Styles = {
  tips: {
    fontSize: '14px',
    marginBottom: '10px',
    marginTop: '30px',
  },
  container: {
    marginBottom: '40px',
  },
  header: {
    marginBottom: '10px',
  },
  category: {
    fontSize: '24px',
    marginRight: '40px',
    textDecoration: 'underline',
  },
  question: {
    fontStyle: 'italic',
    marginRight: '20px',
  },
  answerContainer: {
    marginTop: '5px',
  },
  difficulty: {
    fontSize: '12px',
  },
  status: {
    fontWeight: 'bold',
    color: '#000',
  },
  guessed: {
    color: red,
  },
  correct: {
    color: green,
    fontSize: '20px',
  },
  green: {
    color: green,
  },
  red: {
    color: red,
  },
}

export default styles
