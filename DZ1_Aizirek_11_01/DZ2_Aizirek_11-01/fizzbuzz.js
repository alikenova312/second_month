var num = 1;

for (; num < 100; num++) {

    if (num % 5 === 0 && num % 3 === 0) {

        document.write(num, " = FizzBuzz <br />")

    } else if (num % 5 === 0) {
        document.write(num, " = Buzz <br />");
    } else if (num % 3 === 0) {
        document.write(num, " = Fizz <br/ >");
    } else {
        document.write(num, "<br/ >");
    }
}
