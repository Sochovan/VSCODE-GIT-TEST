// input: new Date();
// output: obj {
// add,
// subtract
// }

// методы
// input: 'string', number;
// output: new Date();

// algo
// 1.принять дату.
// 2.определить ее элементы
// 3.определить элемент, по которому ее модифицировать
// 4.модифицировать дату
// 5.вернуть новую модифицированную дату

const shmoment = date => {
  const result = new Date(date);
  console.log(date);
  console.log(result);

  const resultDate = {
    newDate = string => number => ({string, number})
add = newDate(result.setDate(date.getMinutes + number)),
    console.log(result);

    // add(string, number) {
    //   switch (string) {
    //     case 'years':
    //       let year = date.getFullYear();
    //       result.setFullYear((year += number));
    //       console.log(year);
    //       return this;

    //     case 'months':
    //       let month = date.getMonth();
    //       result.setMonth((month += number));
    //       return this;
    //     case 'days':
    //       let days = date.getDate();
    //       result.setDate((days += number));
    //       return this;
    //     case 'hours':
    //       let hours = date.getHours();
    //       result.setHours((hours += number));
    //       return this;
    //     case 'minutes':
    //       let minutes = date.getMinutes();
    //       result.setMinutes((minutes += number));

    //       console.log(result);
    //       return this;
    //     case 'seconds':
    //       let seconds = date.getSeconds();
    //       result.setSeconds((seconds += number));
    //       return this;
    //     case 'milliseconds':
    //       let milli = date.getMilliseconds();
    //       result.setMilliseconds((milli += number));
    //       return this;
    //   }
    // },

    subtract(string, number) {
      switch (string) {
        case 'years':
          let year = date.getFullYear();
          result.setFullYear((year -= number));
          console.log(year);
          return this;

        case 'months':
          let month = date.getMonth();
          result.setMonth((month -= number));
          return this;
        case 'days':
          let days = date.getDate();
          result.setDate((days -= number));
          return this;
        case 'hours':
          let hours = date.getHours();
          result.setHours((hours -= number));
          return this;
        case 'minutes':
          let minutes = date.getMinutes();
          result.setMinutes((minutes -= number));

          console.log(result);
          return this;
        case 'seconds':
          let seconds = date.getSeconds();
          result.setSeconds((seconds -= number));
          return this;
        case 'milliseconds':
          let milli = date.getMilliseconds();
          result.setMilliseconds((milli -= number));
          return this;
      }
    },
    result() {
      return result;
    },
  };
  return resultDate;
};

const a = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();

console.log(a);
