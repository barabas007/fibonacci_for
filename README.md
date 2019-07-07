# ФИБОНАЧЧИ

Последовательность Фибоначчи — это порядок чисел, где каждое последующее число является суммой двух предыдущих.
Например, первые десять чисел последовательности выглядят так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.


## Формулировка задачи
Напишите функцию, которая возвращает n-ую запись в последовательности, 
где n — это число, которое вы передаёте в качестве аргумента функции.

Пример:

fibonacci(3)  // --> 2

## Логическое решение задачи


Задача Фибоначчи включает в себя прохождение по циклу такое количество раз, 
которое указано в аргументе функции, и возврат значения на соответствующей позиции. 
Такой способ постановки задачи указывает на использование циклов для решения. 
В качестве альтернативы вы можете попробовать рекурсию, что наверняка поразит интервьюера.

# РЕШЕНИЕ

Массив результатов уже содержит первые два числа в своём ряду, 
потому что каждая запись в ряду Фибоначчи состоит из суммы двух предыдущих чисел.
Изначально у вас нет двух чисел, которые вы можете взять для получения следующего числа, 
поэтому цикл не может сгенерировать их автоматически. 
Однако вы знаете, что первые два числа всегда 0 и 1, 
поэтому вручную инициализируете массив результатов этими двумя числами.
