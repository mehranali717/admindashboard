import sql from "better-sqlite3";
import xss from "xss";
import fs from "node:fs";
const db = sql('data.db');

export async function getData() {
    await new Promise((resolve) => setTimeout( resolve, 2000)); 
    // throw new Error("Loading meals faild")
   return db.prepare("SELECT * FROM users").all();
  }

// export function CreateData(name, email) {
//     // name= xss(name)
//     // const insert = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
//     // insert.run(name, email);
//     // fs.createWriteStream(``)
// }

// export function ReadData() {
//     return db.prepare('SELECT * FROM users').all();
// }

// export function UpdateData(id, newName, newEmail) {
//     const update = db.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
//     update.run(newName, newEmail, id);
// }

// export function DeleteData(id) {
//     const del = db.prepare('DELETE FROM users WHERE id = ?');
//     del.run(id);
// }
