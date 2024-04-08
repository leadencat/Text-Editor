import { openDB } from 'idb';

const initdb = async () =>
  openDB('te', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('te')) {
        console.log('te database already exists');
        return;
      }
      db.createObjectStore('te', { keyPath: 'id', autoIncrement: true });
      console.log('te database created');
    },
  });

export const putDb = async (content) => {
  console.log('Now posting to the database!');
  const teDb = await openDB ('te', 1);
  const tx = teDb.transaction('te', 'readwrite');
  const store = tx.objectStore('te');
  const request = store.put({ id: 1, te: content});
  const result = await request;
  console.log('Data saved to the database', result);
}

export const getDb = async () => {
  console.log('Getting all items from the database!');
  const teDb = await openDB ('te', 1);
  const tx = teDb.transaction('te', 'readonly');
  const store = tx.objectStore('te');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result?.value;
}

initdb();