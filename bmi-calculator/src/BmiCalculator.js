import React, { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (height, weight) => {
    return (weight / (height * height)).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedBmi = calculateBMI(parseFloat(height), parseFloat(weight));
    setBmi(calculatedBmi);
  };

  return (
    <div>
      <h2>Calculate Your BMI</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Height (in meters):
            <input
              type="number"
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
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
