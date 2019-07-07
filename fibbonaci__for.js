const fibonacci = num => {
  // Сохраняем последовательность Фибоначчи, которую собираемся сгенерировать,
  // внутри массива и инициализируем массив первыми двумя числами последовательности
  const result = [0, 1];

  for(let i = 2; i <= num; i++) {
    // Поместим сумму двух чисел, предшествующих позиции i в массиве результатов, 
    // в конец этого массива
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  // Вернём последнее значение из массива результатов
  return result[num]
};
    console.log(fibonacci(4));
