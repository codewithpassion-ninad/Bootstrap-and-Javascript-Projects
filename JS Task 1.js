function reversenum(number)
{
    let numString = number.toString();

    let reversedString = numString.split('').reverse().join('');

    let reversedNumber = parseInt(reversedString);

    return reversedNumber;
}

const userInput = prompt("Enter a number to reverse:");
const num = parseInt(userInput);

if (!isNaN(num))
{
    const reversedUserNumber = reversenum(num);
    console.log(`Reversed ${num} to ${reversedUserNumber}`);
}
else
{
    console.log("Invalid input. Please enter a valid number.");
}