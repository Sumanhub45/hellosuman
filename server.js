import {app} from './app.js';


app.get('/', (req, res) => {
    res.send('Hello world!');
    }
);

app.route('/user').get((req, res, next) => {
    res.status(200).json({ name: 'John Doe' });
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    }
);