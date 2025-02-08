// const text = document.createElement('p');
// text.innerText = 'Array: \n For Loop:';
// text.style.color = 'white';
// text.style.position = 'fixed';
// text.style.top = '100px';
// text.style.right = '20px';
// text.style.backgroundColor = 'black';
// text.style.padding = '10px';
// text.style.zIndex = '1000'; // Ensure it stays on top

// document.querySelector('body').appendChild(text);

// document.addEventListener('DOMContentLoaded', () => {
//   const value = document.querySelector(
//     '.unit-progress text-right col-xs-12 p'
//   ).innerText;
//   console.log(value);
// });

const helpPanel = document.createElement('div');
helpPanel.classList.add('csx-help-panel');

// Help button
const helpButton = document.createElement('div');
helpButton.innerText = 'CSX Help Tools';
helpButton.classList.add('csx-help-button');

// Help panel
const helpContent = document.createElement('div');
helpContent.classList.add('csx-help-content');
helpContent.innerHTML = `
    <h3>CSX Help Tools</h3>
    <p id="help-text">Loading...</p>
`;

// Close button
const closeButton = document.createElement('span');
closeButton.innerHTML = 'X';
closeButton.classList.add('csx-close-button');
closeButton.addEventListener('click', () => {
  helpPanel.classList.remove('open');
});

// Help button click
helpButton.addEventListener('click', () => {
  helpPanel.classList.toggle('open');
});

helpPanel.appendChild(helpButton);
helpPanel.appendChild(closeButton);
helpPanel.appendChild(helpContent);
document.body.appendChild(helpPanel);

// Get the progress
function updateHelpText() {
  const progressElement = document.querySelector('.unit-progress p');
  if (progressElement) {
    document.getElementById(
      'help-text'
    ).innerText = `Current progress: ${progressElement.innerText}`;
  } else {
    document.getElementById('help-text').innerText =
      'Unable to load progress\nPlease try again';
  }
}

setTimeout(updateHelpText, 2000);
