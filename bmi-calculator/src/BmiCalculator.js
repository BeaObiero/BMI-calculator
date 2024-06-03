import React, { useState } from 'react';

function BmiCalculator () { //functional component
  const [height, setHeight] = useState(''); //stores the user's input for height
  const [weight, setWeight] = useState(''); // stores the user's input for weight
  const [bmi, setBmi] = useState(null); //stores the calculated BMI

  //Default value for BMI if we want to store the calculated bmi
  //const[bmi, setBmi] = useState('');

  const calculateBMI = (height, weight) => {
    /* if(height<= 0 || weight <= 0) {
      return 'Invalid Input'; (input validation)
    }*/
    return (weight / (height * height)).toFixed(2);
  };  // This function takes in the height and weight parameters then once the calculation is done it is rounded off to two decimal places

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default behaviour which would reload the page
    //setError(''); clear any previous error

    /** const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

    if (isNaN(heightNum) || isNaN(weightNum)) {
      setError('Please enter valid numbers for height and weight');
      setBmi('');
      return;
    }
     */

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
              //aria-label="Height in meters"
            />
          </label>
        </div>
        <div>
          <label>
            Weight (in kilograms):
            <input
              type="number"
              step="0.1" //specifies increment step for the input
              value={weight}
              onChange={(e) => setWeight(e.target.value)} //update the 'weight' state variable when the user eneter this input
              required //ensures fields must be filled before submitting
              //aria-label="Weight in kilograms"
            />
          </label>
        </div>
        <button type="submit">Calculate BMI</button> {/* once you hit this button,the calculated BMI is dispalyed*/}
      </form>
      {bmi && !error && ( //conditionally renders a `div` showing the calculated bmi if `bmi` is not null
        <div>
          <h3>Your BMI: {bmi}</h3>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;


/**
 * ## Area for Improvements
 * 1. Input Validation:
Ensure that the input values are valid before performing the calculation.

2. Error Handling:
Add error handling for invalid inputs or edge cases (e.g., zero height).

3. User Feedback:
Provide feedback to the user if the inputs are invalid or if there was an error during calculation.

4. Accessibility:
Ensure that the form is accessible (e.g., add aria labels).

5. Code Readability:
Improve the readability of the code by using more descriptive variable names and adding comments where necessary.

6. Default Value for BMI:
Instead of null, you could use an empty string to avoid rendering issues.
 * 
 */
