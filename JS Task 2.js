function alphabeticalorder(a)
{
    const sortedstr = a.split('').sort().join('');
    return sortedstr;
}

const a = prompt("Enter a string: ");
if (a !== null)
{
    const sortedstr = alphabeticalorder(a);
    console.log(`Sorted string in alphabetical order: ${sortedstr}`);
}
else
{
    console.log("Invalid input or user canceled.");
}