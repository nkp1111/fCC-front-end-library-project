import React from 'react'
import { data } from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [btn, setBtn] = React.useState(data)
  const [change, setChange] = React.useState(false)

  const [value, setValue] = React.useState('') // value show on display on click
  const [result, setResult] = React.useState('')  // result after '=' button click 

  if (change) {
    setChange(false)
    setValue(result)
  }

  const handleDisplay = (text) => {

    if (text) {
      display(text)
    }
    zeroCheck()
    decimalCheck()

    if (text === 'AC') {
      // clear button
      setValue('')
      setResult('')
    }

    // make sure two operators are not added one after other
    checkOp(text)

    if (text === '=') {

      const { opArray, numArray } = operand()
      const arr = convertToNum(numArray) // string to number
      const opearators = ['/', '*', '-', '+']

      for (let i in opearators) {
        const op = opearators[i]
        const num = checkNumOfOP(op, opArray)
        for (let i = 0; i < num; i++) {
          arithOp(op, opArray, arr)
        }
      }

      console.log(typeof arr[0])
      setResult(arr[0].toPrecision())
      setValue(value + "=" + result)
      setChange(true)
    }
  }

  const display = (text) => {
    if (value.length < 18) {
      const newValue = value + `${text}`
      setValue(newValue)
    }
  }

  const checkOp = (text) => {
    let newValue
    if (/[*/+-]/.test(text) && /[*/+-]/.test(value.charAt(value.length - 1))) {
      // not two operator one after other
      newValue = value.substring(0, value.length - 1) + text

      if (/-/.test(text) && /[*/]/.test(value.charAt(value.length - 1))) {
        // allow '-' sign after '*' and '/' sign
        newValue = value + '-'
      }
      if (/[+*/-]/.test(text) && /-/.test(value.charAt(value.length - 1))) {
        // any sign after '*-' or '/-' replaces both signs
        newValue = value.substring(0, value.length - 2) + text
      }
      setValue(newValue)
    }
  }

  const operand = () => {
    // split value to take out operations and values in different array
    let numArray = value.split(/[*/+-]/)
    // array of numbers separated by operators +, -, /, *
    let numOfnumValue = numArray.length
    let opArray = []
    let initial = 0
    for (let i = 0; i < numOfnumValue - 1; i++) {
      const newOp = value.charAt(numArray[i].length + initial)
      // position of operator 
      // by checking the length of the number

      if (newOp === '-' && numArray[i] === '') {
        const temp = numArray.splice(i + 1, 1)
        numArray[i] = "-" + temp
      }
      else {
        opArray.push(newOp)
        initial += numArray[i].length + 1
      }
    }

    numArray = numArray.filter(item => item !== '')
    // filter to remove blank item taking place of number
    opArray.slice(0, numArray.length - 1)
    return { opArray, numArray }
  }

  const checkNumOfOP = (op, opArray) => {
    // num of operator of a particular type
    const num = opArray.filter(item => item === op).length
    return num
  }

  const arithOp = (op, opArray, numArray) => {
    const pos = opArray.indexOf(op)
    let halfResult
    switch (op) {
      case '/':
        halfResult = numArray[pos] / numArray[pos + 1]
        break
      case '*':
        halfResult = numArray[pos] * numArray[pos + 1]
        break
      case '-':
        halfResult = numArray[pos] - numArray[pos + 1]
        break
      case '+':
        halfResult = numArray[pos] + numArray[pos + 1]
        break
      default:
        setValue('')
        setResult('error')
    }

    numArray.splice(pos, 2, halfResult)
    opArray.splice(pos, 1)
  }

  const convertToNum = (nums) => {
    return (
      nums.map((num) => parseFloat(num))
    )
  }

  const zeroCheck = () => {
    if (value[0] === '0') {
      setValue('')
    }
  }

  const decimalCheck = () => {
    const nums = value.split(/[/*+-]/)
    nums.forEach((val, index) => {
      if (val.includes('.')) {
        const pos = val.indexOf('.')
        if (val.substring(pos + 1,).includes('.')) {
          const pos1 = val.substring(pos + 1,).indexOf('.')
          setValue(val.substring(0, pos1 + pos + 1))
        }
      }
    })
  }

  React.useEffect(() => {
    handleDisplay()
  })

  return (
    <AppContext.Provider
      value={{
        btn,
        value,
        result,
        handleDisplay
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppProvider }
export default useGlobalContext