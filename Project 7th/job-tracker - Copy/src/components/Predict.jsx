import React from 'react'
import FormPred from './form/FormPred'
import FormApp from './form/FromApp'

function Predict() {
  return (
    <div>
        <h1 className="text-xl font-bold mb-2 text-neutral-200">Get Income Prediction from the Model</h1>
        {/* <FormPred /> */}
        <FormApp />
    </div>
  )
}

export default Predict