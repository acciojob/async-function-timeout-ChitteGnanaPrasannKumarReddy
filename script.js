//your JS code here. If required.
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');


const displayMessageAfterDelay = async (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
};


submitButton.addEventListener('click', async () => {
  const text = textInput.value;
  const delay = parseInt(delayInput.value, 10);

  
  if (!text) {
    outputDiv.textContent = 'Please enter a valid text.';
    return;
  }
  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = 'Please enter a valid delay in milliseconds.';
    return;
  }

  
  outputDiv.textContent = 'Waiting...';

  
  const message = await displayMessageAfterDelay(text, delay);
  outputDiv.textContent = message;
});
