import URL from 'node:url';

// це властивість об'єкта URL, яка повертає частину URL, що йде після символу #

const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);

// Prints #bar

myURL.hash = 'baz';
console.log(myURL.href);

// Prints https://example.org/foo#baz

// \\\\\\\\\\\\\\\\\\\\\\\



// це властивість об'єкта URL, яка повертає хостну частину URL, включаючи порт, якщо він вказаний.

const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);
// Prints example.org:81

myURL.host = 'example.com:82';
console.log(myURL.href);
// Prints https://example.com:82/foo



// \\\\\\\\\\\\\\\\\\\\\

// це властивість об'єкта URL, яка повертає тільки доменне ім'я хоста без порту.

const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname);
// Prints example.org

// Setting the hostname does not change the port
myURL.hostname = 'example.com';
console.log(myURL.href);
// Prints https://example.com:81/foo

// Use myURL.host to change the hostname and port
myURL.host = 'example.org:82';
console.log(myURL.href);
// Prints https://example.org:82/foo


// \\\\\\\\\\\\\\\\\\\\\\\


// це властивість об'єкта URL, яка повертає повний рядок URL. Вона включає протокол, хост, шлях, параметри запиту та фрагменти.

const myURL = new URL('https://example.org/foo');
console.log(myURL.href);
// Prints https://example.org/foo

myURL.href = 'https://example.com/bar';
console.log(myURL.href);
// Prints https://example.com/bar


// \\\\\\\\\\\\\\\\


// це властивість об'єкта URL, яка повертає базовий URL без шляху, параметрів запиту та фрагментів. Вона включає протокол, хост і порт (якщо він вказаний).


const myURL = new URL('https://example.org/foo/bar?baz');
console.log(myURL.origin);
// Prints https://example.org


const idnURL = new URL('https://測試');
console.log(idnURL.origin);
// Prints https://xn--g6w251d

console.log(idnURL.hostname);
// Prints xn--g6w251d


// \\\\\\\\\\\\\\\\\\\\\\


// це властивість об'єкта URL, яка повертає пароль, якщо він вказаний у URL. Пароль зазвичай використовується в форматі username:password у частині URL.


const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
// Prints xyz

myURL.password = '123';
console.log(myURL.href);
// Prints https://abc:123@example.com/



// \\\\\\\\\\\\\\\\\

// це властивість об'єкта URL, яка повертає шлях до ресурсу в URL, без параметрів запиту та фрагментів.

const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
// Prints /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
// Prints https://example.org/abcdef?123



// \\\\\\\\\\\\\\\\\\\\\\\\\


// це властивість об'єкта URL, яка повертає порт, вказаний у URL. Якщо порт не заданий, вона поверне пустий рядок.

const myURL = new URL('https://example.org:8888');
console.log(myURL.port);
// Prints 8888

// Default ports are automatically transformed to the empty string
// (HTTPS protocol's default port is 443)
myURL.port = '443';
console.log(myURL.port);
// Prints the empty string
console.log(myURL.href);
// Prints https://example.org/

myURL.port = 1234;
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);
// Prints https://example.org:1234/

// Completely invalid port strings are ignored
myURL.port = 'abcd';
console.log(myURL.port);
// Prints 1234

// Leading numbers are treated as a port number
myURL.port = '5678abcd';
console.log(myURL.port);
// Prints 5678

// Non-integers are truncated
myURL.port = 1234.5678;
console.log(myURL.port);
// Prints 1234

// Out-of-range numbers which are not represented in scientific notation
// will be ignored.
myURL.port = 1e10; // 10000000000, will be range-checked as described below
console.log(myURL.port);
// Prints 1234



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// це властивість об'єкта URL, яка повертає протокол, вказаний у URL, включаючи дві крапки в кінці.

const myURL = new URL('https://example.org');
console.log(myURL.protocol);
// Prints https:

myURL.protocol = 'ftp';
console.log(myURL.href);
// Prints ftp://example.org/


// \\\\\\\\\\\\\\\\\\\\\\\\\\

// це властивість об'єкта URL, яка повертає рядок параметрів запиту, що йдуть після символу ?. Включає всі параметри, починаючи з ?.


const myURL = new URL('https://example.org/abc?123');
console.log(myURL.search);
// Prints ?123

myURL.search = 'abc=xyz';
console.log(myURL.href);
// Prints https://example.org/abc?abc=xyz



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// це клас, який дозволяє працювати з параметрами запиту в URL. Він дозволяє легко отримувати, додавати, змінювати та видаляти параметри запиту.


const myURL = new URL('https://example.org/abc?foo=~bar');

console.log(myURL.search);  // prints ?foo=~bar

// Modify the URL via searchParams...
myURL.searchParams.sort();

console.log(myURL.search);  // prints ?foo=%7Ebar



// \\\\\\\\\\\\\\\\\\\\\\\\\\

// це властивість об'єкта URL, яка повертає ім'я користувача, якщо воно вказане в URL у форматі username:password@host.


const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username);
// Prints abc

myURL.username = '123';
console.log(myURL.href);
// Prints https://123:xyz@example.com/



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// це метод, який повертає повний рядок URL, представляючи об'єкт URL. Це те ж саме, що й доступ до властивості href.


const { URL } = require('url');
const myURL = new URL('https://example.com/path?query=1');

console.log(myURL.toString());

// Виведе: https://example.com/path?query=1



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// це метод, який повертає об'єкт URL у форматі, що підходить для JSON. 

const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org'),
  ];
  console.log(JSON.stringify(myURLs));
  // Prints ["https://www.example.com/","https://test.example.org/"]



//   \\\\\\\\\\\\\\\\\\\\\\\\\\


// це метод, доступний в веб-браузерах, який створює тимчасовий URL для об'єкта Blob або File. Цей URL можна використовувати для доступу до даних блоба, наприклад, для відображення зображень або для завантаження файлів.

const {
    Blob,
    resolveObjectURL,
  } = require('node:buffer');
  
  const blob = new Blob(['hello']);
  const id = URL.createObjectURL(blob);
  
  // later...
  
  const otherBlob = resolveObjectURL(id);
  console.log(otherBlob.size);


//   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// це метод, доступний в веб-браузерах, який дозволяє звільнити ресурси, пов'язані з тимчасовим URL, створеним за допомогою URL.createObjectURL(blob).
// Цей метод запобігає витоку пам'яті, видаляючи тимчасовий URL, коли він більше не потрібен.


const blob1 = new Blob(['Hello, world!'], { type: 'text/plain' });
const url = URL.createObjectURL(blob1);

URL.revokeObjectURL(url);



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// в Node.js використовується для перевірки, чи може рядок input бути розпізнаний як валідний URL.


const isValid = URL.canParse('/foo', 'https://example.org/'); // true

const isNotValid = URL.canParse('/foo'); // false


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// в Node.js використовується для роботи з параметрами запиту в URL



const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'));
// Prints 123

myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href);
// Prints https://example.org/?abc=123&abc=xyz

myURL.searchParams.delete('abc');
myURL.searchParams.set('a', 'b');
console.log(myURL.href);
// Prints https://example.org/?a=b

const newSearchParams = new URLSearchParams(myURL.searchParams);
// The above is equivalent to
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append('a', 'c');
console.log(myURL.href);
// Prints https://example.org/?a=b
console.log(newSearchParams.toString());
// Prints a=b&a=c

// newSearchParams.toString() is implicitly called

myURL.search = newSearchParams;
console.log(myURL.href);

// Prints https://example.org/?a=b&a=c


newSearchParams.delete('a');
console.log(myURL.href);
// Prints https://example.org/?a=b&a=c


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// в Node.js — це конструктор, який дозволяє створити об'єкт для роботи з параметрами запиту з рядка.

let params;

params = new URLSearchParams('user=abc&query=xyz');
console.log(params.get('user'));
// Prints 'abc'
console.log(params.toString());
// Prints 'user=abc&query=xyz'

params = new URLSearchParams('?user=abc&query=xyz');
console.log(params.toString());
// Prints 'user=abc&query=xyz'



// \\\\\\\\\\\\\\\\\\\\\\\\\\


// це конструктор в JavaScript, який дозволяє працювати з параметрами запиту URL. Він зручний для створення та маніпуляції з рядками параметрів URL.

const params1 = new URLSearchParams({
    user: 'abc',
    query: ['first', 'second'],
  });
  console.log(params1.getAll('query'));
  // Prints [ 'first,second' ]
  console.log(params1.toString());
  // Prints 'user=abc&query=first%2Csecond'



//   \\\\\\\\\\\\\\\\\\\\\\\\\\\

// це конструктор, який створює об'єкт URLSearchParams, який дозволяє працювати з параметрами запиту URL.
// iterable: Це може бути масив або інший об'єкт, що ітерується, який містить пари ключ-значення.
// Призначення: Дозволяє легко створювати, читати, редагувати та видаляти параметри запиту з URL.


let params2;

// Using an array
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second'],
]);
console.log(params2.toString());
// Prints 'user=abc&query=first&query=second'

// Using a Map object
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params2 = new URLSearchParams(map);
console.log(params2.toString());
// Prints 'user=abc&query=xyz'

// Using a generator function
function* getQueryPairs() {
  yield ['user', 'abc'];
  yield ['query', 'first'];
  yield ['query', 'second'];
}
params = new URLSearchParams(getQueryPairs());
console.log(params2.toString());
// Prints 'user=abc&query=first&query=second'

// Each key-value pair must have exactly two elements
new URLSearchParams([
  ['user', 'abc', 'error'],
]);
// Throws TypeError [ERR_INVALID_TUPLE]:
//        Each query pair must be an iterable [name, value] tuple





// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams.append(name, value) — це метод об'єкта URLSearchParams, який додає нову пару ключ-значення до існуючих параметрів запиту.
// name: Ім'я параметра, яке потрібно додати.
// value: Значення, яке буде прив'язане до цього параметра.
// Призначення: Додає параметри без перезапису існуючих.

const params3 = new URLSearchParams();
params.append('key1', 'value1');
params.append('key1', 'value2');
console.log(params3.toString()); 

// "key1=value1&key1=value2"


// \\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams.delete(name) — це метод об'єкта URLSearchParams, який видаляє усі пари ключ-значення з вказаним іменем параметра.
// name: Ім'я параметра, який потрібно видалити.
// Призначення: Позбавляє від усіх значень, прив'язаних до зазначеного ключа.


const params4 = new URLSearchParams('key1=value1&key1=value2');
params.delete('key1');
console.log(params4.toString()); // ""


// \\\\\\\\\\\\\\\\\\\\\\\\\\


// urlSearchParams.entries() — це метод об'єкта URLSearchParams, який повертає ітератор для усіх пар ключ-значення.
// Повертає: Ітератор, який можна використовувати для перебору всіх параметрів запиту у формі масивів [ключ, значення].
// Призначення: Зручно для отримання та обробки усіх параметрів запиту.

const params5 = new URLSearchParams('key1=value1&key2=value2');
for (const [key, value] of params5.entries()) {
    console.log(`${key}: ${value}`);
}
// Виведе:
// key1: value1
// key2: value2


// \\\\\\\\\\\\\\\\\\\\\\\\\\
// urlSearchParams.forEach(fn[, thisArg]) — це метод об'єкта URLSearchParams, який виконує задану функцію для кожної пари ключ-значення.
// fn: Функція, яка буде викликана для кожної пари. Вона приймає три аргументи: value, key, params.
// thisArg (необов'язковий): Значення, яке буде використовуватися як this під час виконання fn.
// Призначення: Зручно обробляти всі параметри запиту.

const myURL = new URL('https://example.org/?a=b&c=d');
myURL.searchParams.forEach((value, name, searchParams) => {
  console.log(name, value, myURL.searchParams === searchParams);
});
// Prints:
//   a b true
//   c d true



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// urlSearchParams.get(name) — це метод об'єкта URLSearchParams, який отримує значення параметра за його іменем.

// name: Ім'я параметра, значення якого потрібно отримати.
// Повертає: Перше знайдене значення для вказаного параметра, або null, якщо параметра не існує.
// Призначення: Зручно для отримання значення конкретного параметра запиту.


const params6 = new URLSearchParams('key1=value1&key2=value2');
console.log(params6.get('key1')); // "value1"
console.log(params6.get('key3')); // null


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// name: Ім'я параметра, значення якого потрібно отримати.
// Повертає: Масив усіх значень для вказаного параметра, або пустий масив, якщо параметра не існує.
// urlSearchParams.getAll(name) — це метод об'єкта URLSearchParams, який повертає всі значення параметра за його іменем.



const params7 = new URLSearchParams('key1=value1&key1=value2');
console.log(params7.getAll('key1')); // ["value1", "value2"]
console.log(params7.getAll('key3')); // []


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams.has(name) — це метод об'єкта URLSearchParams, який перевіряє, чи існує параметр з указаним іменем.
// name: Ім'я параметра, який потрібно перевірити.
// Повертає: true, якщо параметр існує, і false, якщо ні.
// Призначення: Зручно для перевірки наявності певного параметра в URL.


const params8 = new URLSearchParams('key1=value1&key2=value2');
console.log(params8.has('key1')); // true
console.log(params8.has('key3')); // false


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams.keys() — це метод об'єкта URLSearchParams, який повертає ітератор для всіх імен параметрів.
// Повертає: Ітератор, який можна використовувати для перебору ключів (імен параметрів) запиту.
// Призначення: Зручно для отримання всіх імен параметрів без значень.


const params9 = new URLSearchParams('foo=bar&foo=baz');
for (const name of params9.keys()) {
  console.log(name);
}
// Prints:
//   foo
//   foo


// \\\\\\\\\\\\\\\\\\\\\\\\\\\

// // urlSearchParams.set(name, value) — це метод об'єкта URLSearchParams, який встановлює значення параметра за його ім'ям.
// name: Ім'я параметра, яке потрібно встановити.
// value: Значення, яке буде присвоєно параметру.
// Призначення: Якщо параметр вже існує, його значення буде замінено; якщо не існує — параметр буде додано.

const params11 = new URLSearchParams();
params.append('foo', 'bar');
params.append('foo', 'baz');
params.append('abc', 'def');
console.log(params11.toString());
// Prints foo=bar&foo=baz&abc=def

params.set('foo', 'def');
params.set('xyz', 'opq');
console.log(params11.toString());
// Prints foo=def&abc=def&xyz=opq


// \\\\\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams.size — це властивість об'єкта URLSearchParams, яка повертає кількість унікальних параметрів запиту.
// Повертає: Число, що представляє кількість різних параметрів.
// Призначення: Зручно для дізнання, скільки параметрів містить об'єкт.

const params12 = new URLSearchParams('key1=value1&key2=value2');
console.log(params12.size); // 2



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams.sort() — це метод об'єкта URLSearchParams, який сортує параметри запиту за алфавітом за їхніми іменами.
// Призначення: Сортує пари ключ-значення у запиті для кращої організації.
// Вплив: Змінює порядок параметрів у об'єкті, але не впливає на самі значення.


const params13 = new URLSearchParams('query[]=abc&type=search&query[]=123');
params.sort();
console.log(params13.toString());
// Prints query%5B%5D=abc&query%5B%5D=123&type=search


// \\\\\\\\\\\\\\\\\\\\\\\\


// urlSearchParams.toString() — це метод об'єкта URLSearchParams, який перетворює параметри запиту на рядок формату URL.
// Повертає: Рядок, що містить параметри запиту у форматі key1=value1&key2=value2.
// Призначення: Зручно для формування частини URL з параметрами запиту.


const params14 = new URLSearchParams('key1=value1&key2=value2');
console.log(params14.toString()); // "key1=value1&key2=value2"



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\


// urlSearchParams.values() — це метод об'єкта URLSearchParams, який повертає ітератор для всіх значень параметрів запиту.

// Повертає: Ітератор, який можна використовувати для перебору значень (але не ключів) запиту.
// Призначення: Зручно для отримання всіх значень параметрів без їх імен.

const params15 = new URLSearchParams('key1=value1&key2=value2');
for (const value of params15.values()) {
    console.log(value);
}
// Виведе:
// value1
// value2



// \\\\\\\\\\\\\\\\\\\\\\\\

const params16 = new URLSearchParams('foo=bar&xyz=baz');
for (const [name, value] of params16) {
  console.log(name, value);
}
// Prints:
//   foo bar
//   xyz baz



// \\\\\\\\\\\\\\\\\\\\\\\\\\

// urlSearchParams[Symbol.iterator]() — це метод, який дозволяє використовувати об'єкт URLSearchParams в циклах, таких як for...of, для перебору пар ключ-значення.
// Повертає: Ітератор, що генерує пари [ключ, значення] для всіх параметрів запиту.
// Призначення: Зручно для перебору всіх параметрів у зручному форматі.

const params17 = new URLSearchParams('key1=value1&key2=value2');
for (const [key, value] of params17) {
    console.log(`${key}: ${value}`);
}
// Виведе:
// key1: value1
// key2: value2


// \\\\\\\\\\\\

// url.domainToASCII(domain) — це метод з модуля url у Node.js, який перетворює доменне ім’я з форматів, що використовують не ASCII символи (наприклад, юнікод), у ASCII формат.

// domain: Вхідний рядок з доменним ім'ям, яке потрібно конвертувати.
// Повертає: Домен у ASCII-форматі.
// Призначення: Використовується для забезпечення сумісності з системами, які підтримують лише ASCII.

const url = require('node:url');

console.log(url.domainToASCII('español.com'));
// Prints xn--espaol-zwa.com
console.log(url.domainToASCII('中文.com'));
// Prints xn--fiq228c.com
console.log(url.domainToASCII('xn--iñvalid.com'));
// Prints an empty string



// \\\\\\\\\\\\\\\\\\\\\\\\\

// url.domainToUnicode(domain) — це метод з модуля url у Node.js, який перетворює доменне ім'я з ASCII формату назад у формат, що підтримує не ASCII символи (наприклад, юнікод).
// domain: Вхідний рядок з доменним ім'ям у ASCII форматі, яке потрібно конвертувати.
// Повертає: Домен у юнікоді.
// Призначення: Зручно для відображення доменів з нестандартними символами у їхньому оригінальному вигляді.

console.log(url.domainToUnicode('xn--espaol-zwa.com'));
// Prints español.com
console.log(url.domainToUnicode('xn--fiq228c.com'));
// Prints 中文.com
console.log(url.domainToUnicode('xn--iñvalid.com'));
// Prints an empty string


// \\\\\\\\\\\\\\\\\\\\\\\\\

// url.fileURLToPath(url[, options]) — це метод у Node.js, який перетворює URL, що представляє файл, у відповідний шлях до файлу на файловій системі.
// url: URL у форматі file://, який потрібно конвертувати.
// options (необов'язковий): Об'єкт з параметрами, які можуть змінити поведінку.
// Повертає: Шлях до файлу у форматі рядка

const { fileURLToPath } = require('node:url');
new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// url.format(URL[, options]) — це метод у Node.js, який створює URL-рядок з об'єкта URL.
// URL: Об'єкт URL, який потрібно перетворити в рядок.
// options (необов'язковий): Об'єкт з параметрами для налаштування формату (наприклад, вказати, чи потрібно включати певні частини URL).
// Повертає: Строку, що представляє сформований URL.


const myURL = new URL('https://a:b@測試?abc#foo');

console.log(myURL.href);
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));
// Prints 'https://測試/?abc'


// \\\\\\\\\\\\\\\\\\\\\\\

// url.pathToFileURL(path[, options]) — це метод у Node.js, який перетворює локальний шлях до файлу в URL-формат file://.
// path: Шлях до файлу, який потрібно конвертувати.
// options (необов'язковий): Об'єкт з параметрами для налаштування.
// Повертає: URL у форматі file://, що представляє вказаний файл.

const { pathToFileURL } = require('node:url');
new URL(__filename);                  // Incorrect: throws (POSIX)
new URL(__filename);                  // Incorrect: C:\... (Windows)
pathToFileURL(__filename);            // Correct:   file:///... (POSIX)
pathToFileURL(__filename);            // Correct:   file:///C:/... (Windows)

new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)

new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)




// \\\\\\\\\\\\\\\\\\\\\\\\
// url.urlToHttpOptions(url) — це метод у Node.js, який перетворює URL у об'єкт з параметрами, що можуть бути використані для HTTP-запитів.
// url: URL-рядок, який потрібно конвертувати.
// Повертає: Об'єкт з властивостями, такими як protocol, hostname, port, path, які використовуються для налаштування HTTP-запитів.

const { urlToHttpOptions } = require('node:url');
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(urlToHttpOptions(myURL));
/*
{
  protocol: 'https:',
  hostname: 'xn--g6w251d',
  hash: '#foo',
  search: '?abc',
  pathname: '/',
  path: '/?abc',
  href: 'https://a:b@xn--g6w251d/?abc#foo',
  auth: 'a:b'
}
*/



// \\\\\\\\\\\\\\\\\\\\\\\\\


// urlObject.auth — це властивість об'єкта URL в Node.js, яка містить інформацію про автентифікацію (логін і пароль), якщо вони вказані у URL.
// Якщо URL містить інформацію про автентифікацію у вигляді username:password, то ця властивість міститиме цю інформацію.
// Властивість може бути пустою, якщо автентифікаційні дані відсутні у URL.
// Ця інформація зазвичай використовується для доступу до захищених ресурсів через HTTP або FTP.

const { URL } = require('url');
const myUrl = new URL('https://username:password@example.com');
console.log(myUrl.auth); // "username:password"


// \\\\\\\\\\\\\\\\\\\\\\\\

// urlObject.hash — це властивість об'єкта URL в Node.js, яка містить фрагмент (хеш) URL, якщо він присутній.
// Фрагмент — це частина URL, що починається з символа # і слідує за ним.
// Зазвичай використовується для навігації на певну частину документа (наприклад, в HTML).


const { URL } = require('url');
const myUrl1 = new URL('https://example.com/page#section1');
console.log(myUrl1.hash); // "#section1"



// \\\\\\\\\\\\\\\\\

// urlObject.host — це властивість об'єкта URL в Node.js, яка містить повне доменне ім'я разом з портом, якщо він заданий.
// Включає домен і порт у форматі hostname:port.
// Якщо порт не вказано, буде просто домен.

const { URL } = require('url');
const myUrl2 = new URL('https://example.com:8080/path');
console.log(myUrl2.host); // "example.com:8080"


// \\\\\\\\\\\\\\\\\\\\\\\

// urlObject.hostname — це властивість об'єкта URL в Node.js, яка містить лише доменну частину URL без порту.
// Включає тільки ім'я хоста (домен) без порту.
// Використовується для отримання чистого доменного імені.


const { URL } = require('url');
const myUrl3 = new URL('https://example.com:8080/path');
console.log(myUrl3.hostname); // "example.com"


// \\\\\\\\\\\\\\\\\\\\\\\

// urlObject.href — це властивість об'єкта URL в Node.js, яка містить повний рядок URL.
// Повертає URL у його оригінальному вигляді, включаючи протокол, хост, шлях, запити та фрагменти.
// Використовується для отримання повного представлення URL.

const { URL } = require('url');
const myUrl4 = new URL('https://example.com/path?query=123#fragment');
console.log(myUrl4.href); // "https://example.com/path?query=123#fragment"



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// urlObject.pathname — це властивість об'єкта URL в Node.js, яка містить шлях до ресурсу в URL.
// Включає тільки частину URL після хоста і перед рядком запитів.
// Використовується для визначення конкретного ресурсу на сервері.

const { URL } = require('url');
const myUrl5 = new URL('https://example.com/path/to/resource?query=123');
console.log(myUrl5.pathname); // "/path/to/resource"


// \\\\\\\\\\\\\\\\\\\\\

// urlObject.pathname — це властивість об'єкта URL в Node.js, яка містить шлях до ресурсу в URL.
// Включає тільки частину URL після домену та перед рядком запитів.
// Використовується для вказівки конкретного ресурсу на сервері.

const { URL } = require('url');
const myUrl6 = new URL('https://example.com/path/to/resource?query=123');
console.log(myUrl6.pathname); // "/path/to/resource"


// \\\\\\\\\\\\\\\\\\\\\\\\\

// urlObject.port — це властивість об'єкта URL в Node.js, яка містить номер порту, якщо він зазначений у URL.

// Якщо порт не вказаний, ця властивість буде порожньою рядковою значенням.
// Використовується для отримання інформації про порт, на якому працює сервер.


const { URL } = require('url');
const myUrl7 = new URL('https://example.com:8080/path');
console.log(myUrl7.port); // "8080"



// \\\\\\\\\\\\\\\\\\\\\\

// urlObject.protocol — це властивість об'єкта URL в Node.js, яка містить протокол, що використовується в URL.
// Повертає рядок, що представляє протокол (наприклад, http:, https:, ftp:).
// Використовується для визначення типу з'єднання.


const { URL } = require('url');
const myUrl8 = new URL('https://example.com/path');
console.log(myUrl8.protocol); // "https:"


// \\\\\\\\\\\\\\\\




// urlObject.searchParams — це властивість об'єкта URL в Node.js, яка дозволяє отримати параметри запиту з URL.
// Повертає об'єкт URLSearchParams, який можна використовувати для роботи з параметрами запиту (наприклад, отримання, додавання або видалення параметрів).
// Включає всі параметри, які йдуть після знака питання ?.

const { URL } = require('url');
const myUrl9 = new URL('https://example.com/path?query=123&search=test');

console.log(myUrl9.searchParams.get('query')); // "123"
console.log(myUrl9.searchParams.get('search')); // "test"



// \\\\\\\\\\\\\\\\\\\\\

// urlObject.search — це властивість об'єкта URL в Node.js, яка містить рядок запиту з URL, починаючи з символа ?.
// Повертає рядок, який включає всі параметри запиту, якщо вони присутні.
// Якщо параметрів запиту немає, повертає порожній рядок.



const { URL } = require('url');
const myUrl0 = new URL('https://example.com/path?query=123&search=test');

console.log(myUrl0.search); // "?query=123&search=test"

// \\\\\\\\\\\\\\\\\\\\\

// urlObject.slashes — це властивість об'єкта URL в Node.js, яка вказує, чи є у URL подвійні косі риски (//) після протоколу.
// Повертає true, якщо в URL присутні //, що вказує на те, що за протоколом слідує хост (наприклад, https://).
// Використовується для визначення структури URL.

const { URL } = require('url');
const myUrl11 = new URL('https://example.com/path');

console.log(myUrl11.slashes); // true


// \\\\\\\\\\\\\\\\\\\\\\\

// url.format(urlObject) — це метод у Node.js, який перетворює об'єкт URL на рядок URL.
// urlObject: Об'єкт URL, який потрібно конвертувати в рядок.
// Повертає: Рядок, що представляє сформований URL у повному форматі.


url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json',
  },
});

// => 'https://example.com/some/path?page=1&format=json'


// \\\\\\\\\\\\\\\\\\\\\\\\

// url.resolve(from, to) — це метод у Node.js, який використовує два рядки URL, щоб вирішити абсолютний URL на основі відносного.
// from: Базовий URL, на основі якого буде сформований новий URL.
// to: Відносний URL, який потрібно додати до базового.
// Повертає: Абсолютний URL, сформований шляхом об'єднання базового та відносного URL.

url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'



// \\\\\\\\\\\\\\\\\\\\\\\\\



