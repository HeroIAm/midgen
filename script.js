const inputText = document.getElementById('input-text');
const outputContainer = document.getElementById('output-container');
const submitButton = document.getElementById('submit-button');
const API_KEY = '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';

submitButton.addEventListener('click', async () => {
  const text = inputText.value;

  // Make API request to OpenAI
  const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      prompt: 'Переведи текст на английский и сделай из него промпт для нейросети MidJourney. Вот пару примеров, создавай промпты на их основе "cute yellow star logo, vector, flat 2d, company logo, sing style" "letter “M” logo design, vintage, sans serif, victorian style, vintage, white background" "simple logo design of cute husky dog, vector, flat 2d, company logo, sing style". Текст: '+text+'.',
      max_tokens: 200,
      n: 1,
      stop: '.',
    }),
  });

  // Parse response from API
  const data = await response.json();

  // Output the result to the user
  outputContainer.innerText = data.choices[0].text;
});
