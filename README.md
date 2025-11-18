# Blog Task

## What is the use of the keyof keyword in TypeScript? Provide an example.

keyof object এর সব property নামকে "string union" এ পরিণত করে। যেমন:

interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User;

UserKeys = "name" | "age"



## Provide an example of using union and intersection types in TypeScript.

Union = OR relationship একটি variable একাধিক type হতে পারে। যেমন: let value: string | number (value হবে string, অথবা number)।

Intersection = AND relationship একটি type একাধিক structure একসাথে পাবে। যেমন: type Person = A & B (object-কে A এবং B দুটোরই সব property পূরণ করতে হবে)।
