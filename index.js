import express from 'express';
import routes from './src/routes/userRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';


const app = express();
const PORT = 4000;

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "User API",
			version: "1.0.0",
			description: "User CRUD API",
		},
		servers: [
			{
				url: "http://localhost:4000",
			},
		],
	},
	apis: ["./routes/userRoutes.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));



// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

// serving static files
//app.use(express.static('public'));
app.use("/user", routes);


app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);