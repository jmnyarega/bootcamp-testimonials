let current = 1;
let max = 2;
let least = 1;

const hide = (n) => {
  const doc = document.querySelector(`.slide:nth-child(${n})`);
  doc.classList.remove("display-none");
};

const show = (n) => {
  const doc = document.querySelector(`.slide:nth-child(${n})`);
  doc.classList.add("display-block");
};

const next = () => {
  current = (current % max) + 1;
  previous = (current + 1) % max;
  show(current);
  hide(previous);
  current++;
};

const prev = () => {
  current = (current % max) + 1;
  previous = (current + 1) % max;
  show(current);
  hide(previous);
  console.log(current, previous);
  current++;
};
