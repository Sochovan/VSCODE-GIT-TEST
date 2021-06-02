export { getTitle, getDescription, getPlans, getGoal };

const getTitle = () => {
  const text = document.querySelector('.title');
  return text.textContent;
};

const getDescription = () => {
  const description = document.querySelector('.about');
  return description.innerText;
};

const getPlans = () => {
  const plan = document.querySelector('.plans');
  return plan.innerHTML;
};

const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};
