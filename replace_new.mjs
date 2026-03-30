import fs from 'fs';
import path from 'path';

const projectPath = 'c:/Users/rabot/OneDrive/Desktop/Яндекс Винница новый/transavtopskov-yandex-maps-main';

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const modifications = [];

const processFile = (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && !filePath.endsWith('.json')) return;

  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // 1. Name
  newContent = newContent.replace(/ООО ЛТС/g, 'ООО "СД-Сервис"');
  
  // 2. Full address
  newContent = newContent.replace(/180006, Псковская область, г\. Псков, ул\. Леона Поземского, д\. 125, офис 1/g, '214012, Смоленская область, г Смоленск, Ново-Московская ул, д. 2/8, офис 305');
  
  // 3. Phone formatted
  newContent = newContent.replace(/\+7 \(939\) 322-37-04/g, '+7(938)359-10-91');
  
  // 4. Phone link
  newContent = newContent.replace(/\+79393223704/g, '+79383591091');
  
  // 5. URL encoded address
  // Old: 180006%2C%20Псковская%20область%2C%20г.%20Псков%2C%20ул.%20Леона%20Поземского%2C%20д.%20125%2C%20офис%201
  newContent = newContent.replace(/180006%2C%20Псковская%20область%2C%20г\.%20Псков%2C%20ул\.%20Леона%20Поземского%2C%20д\.%20125%2C%20офис%201/g, 
    '214012%2C%20Смоленская%20область%2C%20г%20Смоленск%2C%20Ново-Московская%20ул%2C%20д.%202%2F8%2C%20офис%20305');
    
  // 6. Email (optional, but let's replace if we need to or leave it)
  // user didn't specify email so I will leave ooo.lts@autorambler.ru or maybe it'll stay as is.
  

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    modifications.push(filePath);
  }
};

walk(path.join(projectPath, 'src'), (err, files) => {
  if (err) throw err;
  files.forEach(processFile);
  console.log(`Modified ${modifications.length} files in src`);
  
  // also do config dir
  walk(path.join(projectPath, 'config'), (err2, files2) => {
    if (err2) throw err2;
    files2.forEach(processFile);
    console.log(`Modified config. Done`);
  });
});
