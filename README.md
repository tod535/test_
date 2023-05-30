.map-
 JavaScript метод map() позволяет вызвать переданную функцию один раз для каждого элемента массива, формируя новый массив из результатов вызова этой функции. Обращаю Ваше внимание, что функция обратного вызова, переданная в качестве параметра метода map() не будет вызвана для удалённых, или пропущенных элементов массива.
.split-
 Метод split () в JavaScript.
Метод split () разбивает (делит) строку на две или более подстроки в зависимости от разделителя. Разделитель может быть одним символом, другой строкой или регулярным выражением.
После разделения строки на несколько подстрок метод split () помещает их в массив и возвращает его. Он не вносит никаких изменений в исходную строку.
.slice-
 JavaScript метод slice () позволяет возвратить новый массив, который содержит копии элементов, вырезанных из исходного массива. Обращаю Ваше внимание, что метод slice () не изменяет исходный массив, а возвращает новую поверхностную копию, содержащую копии элементов, вырезанных из исходного массива. Он копирует ссылки на объекты в новый массив, при этом оригинал и новый массив будут ссылаться на один и тот же объект.
.trim-
 Метод JavaScript trim () удаляет пробелы с обоих концов строки, но не из промежутка между ними. Пробелами могут являться обычные пробелы или символы табуляции. const tooMuchWhitespace=". How are you?"; const trimmed= tooMuchWhitespace. trim (); console. log (trimmed); Output How are you? Метод trim () — это простой способ выполнения распространенной задачи по удалению лишних пробелов.
.filter-
 JavaScript метод .filter () позволяет создать новый массив, элементы которого соответствуют условию заданному в пререданной функции (для которых функция возвращает true). Элементы массива, которые не соответствуют условию в переданной функции (для которых функция возвращает false) пропускаются и не включаются в новый массив отфильтрованных элементов.
.sort-
 JavaScript метод sort() позволяет отсортировать массив путём преобразования его элементов в строки и сравнения этих строк в порядке следования кодовых символов Unicode (сортирует массив по алфавиту). Обращаю Ваше внимание, что метод sort() не создает новый объект Array, а производит сортировку переданного массива.
.indexOf-
JavaScript метод indexOf () позволяет возвратить индекс искомого элемента в массиве при первом совпадении, или -1 если элемент не найден. Для того, чтобы произвести поиск необходимого элемента с конца массива, Вы можете воспользоваться методом lastIndexOf (). Обращаю Ваше внимание, что метод indexOf () использует оператор строгого сравнения (===) при сравнении искомого элемента и элементов массива.
.join- 
JavaScript метод join () позволяет преобразовать и объединить все элементы массива в одно строковое значение. По умолчанию, элементы массива будут разделены запятой, это поведение можно изменить передав в качестве параметра метода значение, которое будет использовано в качестве разделителя. Обращаю Ваше внимание, что если метод вызывается на пустом массиве (длина массива соответствует нулю), то в этом случае будет возвращена пустая строка.
.Math.max- 
JavaScript метод max() объекта Math позволяет найти и возвратить наибольшее из переданных чисел. Обращаю Ваше внимание на то, что если хотя бы один из переданных параметров не может быть преобразован в число, то результатом вызова метода будет значение NaN. Если метод max() вызывается без параметров, то в качестве возвращаемого значения возвращается значение -Infinity.
.Math.min-
 Метод JavaScript Math min() используется для возврата числа с наименьшим значением, переданного в методе. Метод Math.min() возвращает NaN, если какой-либо параметр не является числом и не может быть преобразован в единицу. Min() - это статический метод Math, поэтому он всегда используется как Math.min(), а не как метод созданного математического объекта.
.String
 Тип string. Строки в JavaScript — это неизменяемые цепочки букв. Вы можете добавлять строки одну к другой, брать нужную букву по порядку. Нумерация букв в строке начинается с нуля, поэтому вы видите в примере (-1). const show = (value)=>console.log (value); const alfavit = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'; show (alfavit); // "абвгдеёжзийклмнопрстуфхцчшщъыьэюя" show (alfavit [1-1]); // "а" show (alfavit [33-1]); //"я".
.reduce-
 Метод reduce ()в JavaScript используется для сокращения массива до одного значения и выполняет предоставленную функцию для каждого значения массива (слева направо), а возвращаемое значение функции сохраняется в аккумуляторе. reduce может использовать начальные и возвращаемые значения любого типа, что делает его очень гибким.
.push-
 добавляет один, или более элементов в конец массива
JavaScript метод push () позволяет добавить один, или более элементов в конец массива. После вызова (добавления элементов) возвращает значение соответствуюшее длине массива.
Для того, чтобы добавить один, или более элементов в начало массива вы можете воспользоваться JavaScript методом unshift ().
.Object.entries-
 Object.entries () метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for... in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries () не зависит от того как объект объявлен.
.Number —
 это примитивный тип данных, который представляет числовые значения. В отличие от других языков программирования, в JavaScript не нужно указывать тип числовой переменной: int, float и т.д. И целые числа, и числа с плавающей точкой — все в одном типе Number. const a = 3; const b = 3.13.
.length-
 В JavaScript свойство length возвращает длину или количество элементов некоторой сущности (объекта). Например, для строки свойство length вернет количество символов в строке, а для плотного массива - число элементов.
.const averageTemps = Object.entries(temps).map(item => [item[0], item[1].reduce((acc, value) => Number(value) + acc, 0) / item.length]);- найти среднее значение
.
.
