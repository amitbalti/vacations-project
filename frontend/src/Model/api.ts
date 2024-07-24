// src/api.ts
interface User {
  email: string;
  password: string;
}

const users: User[] = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  // Add more user data as needed
];

export function loginUser(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
}

export function registerUser(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        reject(new Error("Email already exists"));
      } else {
        const newUser: User = { email, password };
        users.push(newUser);
        resolve(newUser);
      }
    }, 1000);
  });
}
