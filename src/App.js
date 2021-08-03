import React, { useState } from 'react';
import FeedbackOptions from '../src/components/FeedbackOptions/feedbackOptions'
import Statistics from '../src/components/Statistics/statistics';
import Section from './components/Section/section';

export default function App () {
  
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  let stats = [good, neutral, bad]

  const handleGood = () => {
    setGood(state => state + 1);
  }
  const handleNeutral = () => {
    setNeutral(state => state + 1);
  }
  const handleBad = () => {
    setBad(state => state + 1);
  }

  const quantity = e => {
    if(e.target.textContent==='good') {
        handleGood()
        return
    } else if(e.target.textContent==='neutral') {
        handleNeutral()
        return
    } else {
        handleBad()
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
 