'use strict';

const answers = document.querySelectorAll('.answer');
const buttons = document.querySelectorAll('.collapse-btn');

//////////////////////////////////////////////////////////////////////////
const defaultText = getComputedStyle(answers[0]).maxHeight;
const textStatus = [0, 0, 0];

buttons.forEach((e, i) =>
  e.addEventListener('click', function () {
    if (textStatus[i] == 0) {
      textStatus[i]++;
      answers[i].style.display = 'block';
      answers[i].style.maxHeight = answers[i].scrollHeight + 'px';
    } else {
      textStatus[i]--;
      answers[i].style.display = 'none';
      answers[i].style.maxHeight = defaultText;
    }
  })
);
