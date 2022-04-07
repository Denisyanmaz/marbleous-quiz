import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Option = ( props ) => {
  const { option, index} = props
  const [answer, setAnswer] = useState({})
  console.log("test7", option)
  useEffect(async() => {
    await axios.get(`/options/${option.id}`)
      .then(resp => {
        setAnswer(resp.data.data.attributes)
      })
      .catch(data => console.log('error', data))
  }, [])
  console.log("test9", answer)
  return (
    <div>
      <input type="radio" value={answer.is_true} id={option.id} />
      <label for= {option.id} >{answer.content}</label>
    </div>
  )
}

export default Option
