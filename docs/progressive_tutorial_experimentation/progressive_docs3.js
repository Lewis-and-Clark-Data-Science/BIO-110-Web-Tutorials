<script type="module">
    
    import { WebR } from "https://webr.r-wasm.org/latest/webr.mjs"; 
    document.getElementById("submit-button").addEventListener("click", async function() {
    const userCode = document.querySelector('pre[data-chunk-id="user-code"]').textContent.trim(); 
    // Initialize WebR 
    const webr = new WebR(); 
    await webr.init(); 
      
      try { 
          // Execute user input code via WebR 
          const result = await webr.runR(userCode); 
          
          // Expected answer
          const correctAnswer = 42; 

          // Extract value from the result object
          const resultValue = result.values[0].value; 
          
          // Check if the result matches the expected answer
          if (resultValue == correctAnswer) { 
              alert("Correct answer"); 
          } else { 
              alert("Incorrect answer");
          } 
      } catch (error) { 
          // Handle errors in R code execution
          document.getElementById("result-output").textContent = `Error: ${error.message}`; 
      }
  }); 
</script>
