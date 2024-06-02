import React, { useState } from 'react';

function BmiCalculator () {
  const [height, setHeight] = useState(''); //stores the user's input for height
  const [weight, setWeight] = useState(''); // stores the user's input for weight
  const [bmi, setBmi] = useState(null); //stores te calculated BMI

  const calculateBMI = (height, weight) => {
    return (weight / (height * height)).toFixed(2);
  };  // This function takes in the height and weight parameters then once the calculation is done it is rounded off to two decimal places

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBmi = calculateBMI(parseFloat(height), parseFloat(weight)); // the parseFloat converts 'height' and 'weight' form strings to floting point numbers and then the calculation happens
    setBmi(calculatedBmi); // updates the bmi state with the calculated bmi
  };

  return (
    <div>
      <h2>Calculate Your BMI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Height (in meters):
            <input
              type="number" // this input field specifies that it only accepts numeric values
              step="0.01"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Weight (in kilograms):
            <input
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} //update the 'weight' state variable when the user eneter this input
              required
            />
          </label>
        </div>
        <button type="submit">Calculate BMI</button> {/* once you hit this button,the calculated BMI is dispalyed*/}
      </form>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
