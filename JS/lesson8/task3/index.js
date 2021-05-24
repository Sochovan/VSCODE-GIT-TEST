const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
    agent: {
        country: 'Ukraine',
        company: 'NYSE',
    },
    'operation time': 1584029990001,
};

/* выведи в консоль значение свойства 'currency' с помощью точки */
console.log(transaction.currency);

/* выведи в консоль значение свойства 'value' с помощью квадратных скобок */
console.log(transaction['value']);
const key = 'operation';
/* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */

/* выведи в консоль значение свойства 'company' используя квадратные скобки */

/* выведи в консоль значение свойства 'country' используя точку */

/* выведи в консоль значение свойства 'operation time' используя квадратные скобки */
console.log(transaction[key]);
console.log(transaction['agent']['company']);
console.log(transaction.agent.country);
console.log(transaction['operation time']);