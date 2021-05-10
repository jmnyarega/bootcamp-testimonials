let current = 1;
let previous = 2;
let max = 2;
let least = 1;

const hide = (n) => {
  const doc = document.getElementById(`slide-${n + 1}`);
  doc.style.display = "none";
};

const show = (n) => {
  const doc = document.getElementById(`slide-${n + 1}`);
  doc.style.display = "flex";
};

const next = () => {
  previous++;
  current++;

  show(current % max);
  hide(previous % max);
};
