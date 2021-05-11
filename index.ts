import express from 'express';
import path from 'path';
import homeRoutes from './routes/home';
import specialPizza from './routes/special-pizza';
import review from './routes/reviewresults';
import pizzabuilder from './routes/pizzabuilder';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", homeRoutes);
app.use("/",specialPizza);
app.use("/", review);
app.use("/", pizzabuilder);
const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));


// //View pizza builder form:
// URL Path: /builder
// Query String: N/A
// Model: Toppings
// HBS file: builder-form.hbs
// HBS techniques: {{array}}

// View pizza builder results:
// URL Path: /builder-results
// Query String: size, toppings, gluten-free, special instructions
// Model: size, toppings, gluten-free, special instructions, price
// HBS file: builder-results.hbs
// HBS techniques: {{ basic expressions, conditional }}
