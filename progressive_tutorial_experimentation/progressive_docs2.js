  const correctAnswer = "42"; // Change this to the expected answer
 
  let currentPartIndex = 0;
  const codeInput = document.querySelectorAll(".code-input");
  const submitButton = document.querySelectorAll(".submit-button");
  const continueButton = document.querySelectorAll("button[id^='continue-button']")
  const parts = document.querySelectorAll(".tutorial-part");


   function showPartsUpTo(index) {
        parts.forEach((part, idx) => {
            if (idx <= index) {
                part.style.display = "block";
            }
            if (idx > index){
            part.style.display = "none";
}
        });
//        scrollToElement(parts[index]);
        currentPartIndex = index;
    }


  // Add an event listener to the continue button
  continueButton.forEach((button, index) => {
        button.addEventListener("click", function() {
          const input = codeInput[index];
    // Check if the user's input matches the correct answer
    if (input.value.trim() === correctAnswer) {
      // Show the next section if the answer is correct
      button.style.display = "none";
      currentPartIndex++
      showPartsUpTo(currentPartIndex);
    } else {
      // Optionally, provide feedback if the answer is incorrect
      alert("Incorrect answer. Please try again.");
    }
  });
  });
  
