import path from 'node:path';
// Метод path.basename()повертає останню частину path, подібно до команди Unix basename.

path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'

// Windows зазвичай обробляє імена файлів, включаючи розширення файлів, без урахування регістру, ця функція цього не робить. Наприклад, C:\\foo.htmlпосилання C:\\foo.HTMLна той самий файл, але basenameрозглядає розширення як рядок з урахуванням регістру:

path.win32.basename('C:\\foo.html', '.html');
// Returns: 'foo'

path.win32.basename('C:\\foo.HTML', '.html');
// Returns: 'foo.HTML'




// \\\\\\\\\\\\\\\\\\\\\\\\



// Надає роздільник шляху для певної платформи // path.delimiter
// ;для Windows
// :для POSIX

console.log(process.env.PATH);

process.env.PATH.split(path.delimiter);


console.log(process.env.PATH);


process.env.PATH.split(path.delimiter);

////////////////



// Метод path.dirname()повертає назву каталогу path , саме dirname


path.dirname('/foo/bar/baz/asdf/quux');

console.log(path.dirname)



///////////////////

// Метод path.extname повертає розширення path, від останнього входження символу 

path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''

path.extname('.index.md');
// Returns: '.md'

////////////////////////


// Метод path.format()повертає рядок шляху з об’єкта. 
// Надаючи властивості пам’ятайте pathObject, що існують комбінації, де одна властивість має пріоритет над іншою:

// pathObject.root ігнорується, якщо pathObject.dir надається
// pathObject.extі pathObject.name ігноруються, якщо pathObject.base існують


path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  });
  // Returns: '/home/user/dir/file.txt' через наявність    base ігнорується root
  

  path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored',
  });
  // Returns: '/file.txt'  через наявність    base ігнорується root
  

  path.format({
    root: '/',
    name: 'file',
    ext: '.txt',
  });
  // Returns: '/file.txt' усе береться до уваги ,тому що немає  dir або base
  
  path.format({
    root: '/',
    name: 'file',
    ext: 'txt',
  });
  // Returns: '/file.txt' усе береться до уваги ,тому що немає  dir або base



  ////////////////////

//   Метод path.isAbsolute()визначає, чи pathє абсолютним шляхом.

// Якщо заданий path рядок нульової довжини, false буде повернено.


path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false немає слешу по-переду шляху
path.isAbsolute('bar/baz');     // false немає слешу по-переду шляху
path.isAbsolute('.');           // false немає слешу по-переду шляху та даних шляху


// //////////


// Метод path.join()об’єднує всі задані path сегменти разом, використовуючи роздільник, що відповідає платформі, як роздільник, а потім нормалізує отриманий шлях.
// Сегменти нульової довжини path ігноруються. Якщо об’єднаний рядок шляху є рядком нульової довжини, тоді '.'буде повернено поточний робочий каталог.
//Метод path.join  об'єднує кілька частин шляху до файлу або папки в один коректний шлях.

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');

// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
//шлях має бути рядком


////////////////////////////

//Метод path.normalize  використовується для нормалізації шляху до файлу або папки. Це означає, що він перетворює шлях у стандартний формат, усуваючи зайві символи, такі як . (поточна папка) і .. (попередня папка).

// path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'); Windows розпізнає кілька роздільників шляхів
// Returns: 'C:\\temp\\foo\\bar'


path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// Returns: 'C:\\temp\\foo\\'


/////////////////////////

// Метод path.parse()повертає об’єкт, властивості якого представляють важливі елементи path. 


path.parse('C:\\path\\dir\\file.txt');

// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt', 
//   ext: '.txt', це вже є у base
//   name: 'file' } це вже є у base 


///////////////////////////

// Властивість path.posix надає доступ до специфічних для POSIX реалізацій методів path. 

import path from ('path');

const posixPath = path.posix.join('folder', 'subfolder', 'file.txt');
console.log(posixPath); 


// \\\\\\\\\\\\\\\\\\\

// path.relative використовується для обчислення відносного шляху між двома абсолютними шляхами.
// Результатом є відносний шлях, який можна використовувати для переходу від одного шляху до іншого.
// from: абсолютний шлях, з якого починається перехід.
// to: абсолютний шлях, до якого потрібно перейти.


path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');

// Returns: '..\\..\\impl\\bbb'

// |||||||||||||||||||||||||
//path.resolve  використовується для перетворення послідовності шляхів або сегментів шляху в абсолютний шлях.
// Метод повертає єдиний абсолютний шлях, побудований на основі переданих сегментів.
// Якщо один з сегментів є абсолютним шляхом, path.resolve() ігнорує всі попередні сегменти.
// Метод використовує поточний робочий каталог як основу, якщо жоден з сегментів не є абсолютним.


path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'



// |||||||||||||||||||||||
// Надає роздільник сегментів шляху для певної платформи:

//   \на Windows
//    /на POSIX

// // Наприклад, на POSIX:
'foo/bar/baz'.split(path.sep);
// Returns: ['foo', 'bar', 'baz']


// У Windows:
'foo\\bar\\baz'.split(path.sep);
// Returns: ['foo', 'bar', 'baz']





// \\\\\\\\\\\\\\\\\\\\\\\



//  path.toNamespacedPath використовується для перетворення шляху в "namespaced" шлях. Це особливо корисно на Windows, де існує обмеження на доступ до шляхів, які містять символи, що можуть викликати конфлікти.

const normalPath = 'C:\\Users\\User\\Documents\\file.txt';
const namespacedPath = path.toNamespacedPath(normalPath);

console.log(namespacedPath);


// \\\\\\\\\\\\\\\\\\\\\\\


// Властивість path.win32надає доступ до специфічних для Windows реалізацій методів path.
// Включає методи, такі як join, resolve, normalize, extname та інші, які працюють за правилами Windows.
// Використовує зворотний слеш (\) як роздільник шляхів, що є типовим для Windows.

const path = require('path');

const windowsPath = path.win32.join('folder', 'subfolder', 'file.txt');
console.log(windowsPath); 

// Виведе: 'folder\subfolder\file.txt'
