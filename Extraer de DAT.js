const fs = require('fs');
const XLSX = require('xlsx');
const { DOMParser } = require('xmldom');

// Leer el archivo XML
const xml = fs.readFileSync('./MAME 0.252.dat', 'utf-8');

// Parsear el XML a un objeto
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml, 'text/xml');

// Obtener los elementos de cada máquina
const machines = xmlDoc.getElementsByTagName('machine');

// Crear un array con los datos de cada máquina
const data = [];
for (let i = 0; i < machines.length; i++) {
  const machine = machines[i];
  const name = machine.getAttribute('name');
  const description = machine.getElementsByTagName('description')[0].textContent;
  const year = machine.getElementsByTagName('year')[0]?.textContent ?? '';
  const manufacturer = machine.getElementsByTagName('manufacturer')[0]?.textContent ?? '';
  const cloneOf = machine.getAttribute('cloneof') ?? '';
  data.push([cloneOf, name, description, year, manufacturer]);
}

// Crear el libro de Excel con una sola hoja
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet([['CloneOf', 'Name', 'Description', 'Year', 'Manufacturer']].concat(data));
XLSX.utils.book_append_sheet(workbook, worksheet, 'Machines');

// Escribir el libro en un archivo CSV
XLSX.writeFile(workbook, 'machines.csv', { bookType: 'csv', FS: ';' });



