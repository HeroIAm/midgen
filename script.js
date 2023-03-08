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
      prompt: 'Переведи текст на английский и сделай из него промпт для векторного логотипа. Вот примеры: " star logo, vector, flat 2d, company logo, sing style", "simple logo design of husky dog, vector, flat 2d, company logo, sing style". начинай сообщение с буквы Текст: '+text+'.',
      max_tokens: 200,
      n: 1,
    }),
  });

  // Parse response from API
  const data = await response.json();

  // Output the result to the user
  outputContainer.innerText = data.choices[0].text;
});
