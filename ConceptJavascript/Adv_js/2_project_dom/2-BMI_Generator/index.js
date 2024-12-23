const calculateButton = document.getElementById("button");
    const result = document.getElementById("results");

    const HeightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");

    calculateButton.addEventListener("click", function (event) 
    {
   

      // Get the values from the input fields and convert them to numbers
      const height = parseFloat(HeightInput.value);
      const weight = parseFloat(weightInput.value);

      // Check if the values are valid numbers
      if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = "Please enter valid numbers for height and weight.";
        result.style.color = "red";
        return;
      }

      // Convert height from cm to meters
      const heightInMeters = height / 100;

      // Calculate BMI
      const bmi = weight / (heightInMeters * heightInMeters);

      // Determine the category based on the BMI
      let category = "";
      if (bmi < 18.6) {
        category = "Under Weight";
        result.style.color = "orange";
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal Weight";
        result.style.color = "green";
      } else {
        category = "Over Weight";
        result.style.color = "red";
      }

      // Display the BMI and category
      result.innerHTML = `Your BMI is ${bmi.toFixed(2)}<br/>Category: ${category}`;
    });