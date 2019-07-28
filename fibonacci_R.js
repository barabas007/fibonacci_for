const fibonacci = num => {
  // Если num равно 0 или 1, возвращаем num
  if(num < 2) {
    return num
  }
  // Рекурсия здесь
  return fibonacci(num - 1) + fibonacci(num - 2)
}
   console.log( fibonacci(4));