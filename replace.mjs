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
  // Only process .ts, .tsx, .json files (except package.json things maybe, let's limit to src and config)
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && !filePath.endsWith('.json')) return;

  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // 1. Name
  newContent = newContent.replace(/Трансавтопсков/g, 'ООО ЛТС');

  // 2. Full address with "деревня Борисовичи"
  newContent = newContent.replace(/180025,\s*Псковская область,\s*Псковский район,\s*деревня Борисовичи,\s*ул\. Михаила Егорова,\s*д\. 2а,\s*кв\. 25/g, '180006, Псковская область, г. Псков, ул. Леона Поземского, д. 125, офис 1');

  // 3. Full address with "д. Борисовичи"
  newContent = newContent.replace(/180025,\s*Псковская область,\s*Псковский район,\s*д\. Борисовичи,\s*ул\. Михаила Егорова,\s*д\. 2а,\s*кв\. 25/g, '180006, Псковская область, г. Псков, ул. Леона Поземского, д. 125, офис 1');

  // 4. Just Street address
  newContent = newContent.replace(/ул\. Михаила Егорова,\s*д\. 2а,\s*кв\. 25/g, 'ул. Леона Поземского, д. 125, офис 1');

  // 5. Config specific replacements for the address object
  newContent = newContent.replace(/city:\s*"Псков"/g, 'city: "Псков"'); // not changing "Псков" as it's the same
  newContent = newContent.replace(/region:\s*"Псковская область"/g, 'region: "Псковская область"');

  // 6. Config Zip Code
  newContent = newContent.replace(/zipCode:\s*"180025"/g, 'zipCode: "180006"');

  // 7. Yandex Maps URL text parameter
  // Replacing text=180025%2C%20Псковская%20область%2C%20д.%20Борисовичи%2C%20ул.%20Михаила%20Егорова%2C%20д.%202а
  newContent = newContent.replace(/text=180025%2C%20Псковская%20область%2C%20д\.%20Борисовичи%2C%20ул\.%20Михаила%20Егорова%2C%20д\.%202а/g, 'text=180006%2C%20Псковская%20область%2C%20г.%20Псков%2C%20ул.%20Леона%20Поземского%2C%20д.%20125%2C%20офис%201');

  // 8. Coordinates in Yandex Maps URL
  // ll=28.266128%2C57.816576 -> ll=28.308124%2C57.843463
  newContent = newContent.replace(/ll=28\.266128%2C57\.816576/g, 'll=28.308124%2C57.843463');

  // 9. Config coordinates
  newContent = newContent.replace(/latitude:\s*57\.819365/g, 'latitude: 57.843463');
  newContent = newContent.replace(/longitude:\s*28\.334699/g, 'longitude: 28.308124');

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
