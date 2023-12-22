//Написати цикли, які зможуть:

//let n = 0;
//let i, j;
//while (isNaN(n) || n < 1) { n = +prompt("enter num"); }
//console.log(n);
//let arr = [];
//let sum = 0;
//for (i = 0; i < n; i++) {
//    arr[i] = [];
//    for (j = 0; j < n; j++) {
//        arr[i][j] = Math.round(Math.random() * 9);
//        document.write(arr[i][j] + "&nbsp;&nbsp;&nbsp;")
//    }
//    document.write("<br>");
//}
//for (i = 0; i < n; i++) {
//    for (j = 0; j < n; j++) {
//        if (i < j) {
//            sum = sum + arr[i][j];
//        }
//    }
//}
//document.write(sum);

//    Вивести на сторінку в один рядок через кому числа від 10 до 20.

//let num1 = 10;
//let num2 = 20;
//for (let i = num1; i < num2; i++) {
//    if (i == num2 - 1) {
//        document.write(i);
//    } else { document.write(i + ", "); }
//}

//    Вивести квадрати чисел від 10 до 20.

//for (let i = 10; i <= 20; i++) {
//    var square = i * i;
//    document.write(square + "<br>");
//}

//    Вивести таблицю множення на 7.

//for (let i = 1; i <= 7; i++) {
//    var seven = i * 7;
//    document.write(seven + "<br>");
//}

//    Знайти суму всіх цілих чисел від 1 до 15.

//let num1 = 1;
//let num2 = 15;
//let sum = 0;
//for (i = num1; i < num2; i++) {
//    sum += i;
//}
//document.write(`${sum}`);

//    Знайти добуток усіх цілих чисел від 15 до 35.

//let num1 = 15;
//let num2 = 35;
//let sum = 1;
//for (i = num1; i < num2; i++) { sum *= i; }
//document.write(sum);

//    Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

//let startNumber = 1;
//let endNumber = 500;
//let sum = 0;
//for (let i = startNumber; i <= endNumber; i++) {
//    sum += i;
//}
//let count = endNumber - startNumber + 1;
//let mean = sum / count;
//document.write(mean);

//    Вивести суму лише парних чисел в діапазоні від 30 до 80.

//let num1 = 20;
//let num2 = 80;
//let sum = 0;
//
//for (i = num1; i < num2; i++) {
//    if (i % 2 == 1) {
//        sum += i;
//    }
//}
//document.write(sum);

//    Вивести всі числа в діапазоні від 100 до 200 кратні 3.

//for (let i = 100; i <= 200; i++) {
//    if (i % 3 === 0) {
//        document.write(i + "<br>");
//    }
//}


//    Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

//let naturalNumber = prompt('Enter a number');
//let divisors = [];
//for (let i = 1; i <= Math.sqrt(naturalNumber); i++) {
//    if (naturalNumber % i === 0) {
//        divisors.push(i);
//        if (i !== Math.sqrt(naturalNumber)) {
//            divisors.push(naturalNumber / i);
//        }
//    }
//}
//document.write(divisors);

//    Визначити кількість його парних дільників.

//let naturalNumber = prompt('Enter a number');
//let divisors = [];
//for (let i = 1; i <= Math.sqrt(naturalNumber); i++) {
//    if (naturalNumber % i === 0) {
//        divisors.push(i);
//        if (i % 2 === 0 && divisors.indexOf(i) === -1) {
//            divisors.push(i);
//        }
//        if (i !== Math.sqrt(naturalNumber) && (naturalNumber / i) % 2 === 0 && divisors.indexOf(naturalNumber / i) === -1) {
//            divisors.push(naturalNumber / i);
//        }
//    }
//}
//document.write(divisors);

//    Знайти суму його парних дільників.

//let naturalNumber = prompt('Enter a number');
//let divisors = [];
//let sum = 0;
//for (let i = 1; i <= Math.sqrt(naturalNumber); i++) {
//    if (naturalNumber % i === 0) {
//        divisors.push(i);
//        if (i % 2 === 0 && divisors.indexOf(i) === -1) {
//            divisors.push(i);
//            sum += i;
//        }
//        if (i !== Math.sqrt(naturalNumber) && (naturalNumber / i) % 2 === 0 && divisors.indexOf(naturalNumber / i) === -1) {
//            divisors.push(naturalNumber / i);
//           sum += naturalNumber / i;
//        }
//    }
//}
//document.write(`${sum}`);


//    Надрукувати повну таблицю множення від 1 до 10.

//for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <= 10; j++) {
//        let product = i * j;
//        document.write(`${i} * ${j} = ${product}` + "<br>");
//    }
//}

//    Вивести числа від 20 до 30 через пропуск, використовуючи крок 0, 5(20 20, 5 21 21, 5….).

//for (let i = 20; i <= 30; i += 0.5) {
//    document.write(i + " ");
//}

//    Один долар коштує 27 гривень.Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

//const exchangeRate = 27;
//for (let dollars = 10; dollars <= 100; dollars += 10) {
//    let hryvnia = dollars * exchangeRate;
//    document.write(`${dollars} доларів дорівнює ${hryvnia} гривень. `);
//}

//    Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

//let userNumber = prompt("Please enter a number:");
//if (!isNaN(userNumber)) {
//    for (let i = 1; i <= 100; i++) {
//        let square = i * i;
//        if (square <= userNumber) {
//            document.write(i + " ");
//        } else {
//            break;
//        }
//    }
//} else {
//    document.write("Invalid input. Please enter a number.");
//}

//    Дане ціле число.З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

//let userInput = prompt("Please enter a number:");
//if (!isNaN(userInput)) {
//    let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(userInput); i++) {
//        if (userInput % i === 0) {
//            isPrime = false;
//            break;
//        }
//    }
//    if (isPrime) {
//        document.write(`${userInput} is a prime number.`);
//    } else {
//        document.write(`${userInput} is not a prime number.`);
//    }
//} else {
//    document.write("Invalid input. Please enter a number.");
//}

//    Дане деяке число.Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function isPowerOfThree(number) {
    if (number <= 0) {
        return false;
    }
    while (number % 3 === 0) {
        number /= 3;
    }
    return number === 1;
}
let givenNumber = prompt("Please enter a number:");
if (!isNaN(givenNumber)) {
    if (isPowerOfThree(givenNumber)) {
        document.write(`${givenNumber} можна одержати шляхом зведення числа 3 у деякий ступінь.`);
    } else {
        document.write(`${givenNumber} не можна одержати шляхом зведення числа 3 у деякий ступінь.`);
    }
} else {
    document.write("Invalid input. Please enter a number.");
}
