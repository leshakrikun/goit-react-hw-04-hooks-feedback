import React, { useState } from 'react';
import FeedbackOptions from '../src/components/FeedbackOptions/feedbackOptions'
import Statistics from '../src/components/Statistics/statistics';
import Section from './components/Section/section';

export default function App () {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const stats = [good, neutral, bad]

  const handleType = (type) => {
    type(state => state + 1);
  }
 
 /*  handleType(`handle`&`e.target.textContent`) */
   const quantity = e => {
    if(e.target.textContent==='good') {
        handleType(setGood)
        return
    } else if(e.target.textContent==='neutral') {
        handleType(setNeutral)
        return
    } else {
        handleType(setBad)
    }}
  
  return (
    <>
    <Section title = "Please leave feedback">
      <FeedbackOptions quantity = {quantity}/>
    </Section>
    <Section title = "Statistics">   
    <Statistics stats = {stats}/>
    </Section>
    </>
  )
}
 