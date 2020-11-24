import app from './app';
import database from './database';

// database.sync({force: true});
console.log('database running at 3306');

app.listen(3000);
console.log('server rununing 3000');