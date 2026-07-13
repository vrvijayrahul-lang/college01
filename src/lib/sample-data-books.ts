import type { Book } from "@/types";

export const books: Book[] = [
  { id: "b1", title: "Introduction to Algorithms", author: "Cormen, Leiserson", isbn: "978-0262033848", available: 5, total: 8 },
  { id: "b2", title: "Database System Concepts", author: "Silberschatz, Korth", isbn: "978-0073523323", available: 3, total: 6 },
  { id: "b3", title: "Operating System Concepts", author: "Galvin, Silberschatz", isbn: "978-1118063330", available: 0, total: 5 },
  { id: "b4", title: "Discrete Mathematics", author: "Rosen", isbn: "978-0073383095", available: 7, total: 10 },
  { id: "b5", title: "Computer Networks", author: "Tanenbaum", isbn: "978-0132126953", available: 2, total: 4 },
  { id: "b6", title: "Artificial Intelligence", author: "Russell, Norvig", isbn: "978-0136042594", available: 4, total: 6 },
  { id: "b7", title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", available: 6, total: 9 },
  { id: "b8", title: "Design Patterns", author: "Gamma, Helm", isbn: "978-0201633612", available: 1, total: 3 },
];
