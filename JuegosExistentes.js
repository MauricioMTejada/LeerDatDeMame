/*const fs = require('fs');

const directoryPath = '../../Juegos/Mame/[Roms]';

let foldersAndFiles = [];

// Recorre el directorio y obtiene los nombres de las carpetas y archivos
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error al leer el directorio', err);
    return;
  }

  files.forEach((file) => {
    foldersAndFiles.push(file);
  });

  // Escribe los nombres de las carpetas y archivos en un archivo CSV
  const csvData = foldersAndFiles.join('\n');
  fs.writeFile('carpetas_y_archivos.csv', csvData, (err) => {
    if (err) {
      console.log('Error al escribir el archivo CSV', err);
      return;
    }

    console.log('Se han guardado los nombres de las carpetas y archivos en carpetas_y_archivos.csv');
  });
});*/

const fs = require('fs');
const path = require('path');

const directoryPath = '../../Juegos/Mame/[Roms]';

let foldersAndFiles = [];

// Recorre el directorio y obtiene los nombres de las carpetas y archivos
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error al leer el directorio', err);
    return;
  }

  files.forEach((file) => {
    const fileWithoutExt = path.parse(file).name;
    foldersAndFiles.push(fileWithoutExt);
  });

  // Escribe los nombres de las carpetas y archivos en un archivo CSV
  const csvData = foldersAndFiles.join('\n');
  fs.writeFile('carpetas_y_archivos.csv', csvData, (err) => {
    if (err) {
      console.log('Error al escribir el archivo CSV', err);
      return;
    }

    console.log('Se han guardado los nombres de las carpetas y archivos en carpetas_y_archivos.csv');
  });
});

