import { addnewUser,
    getUsers,
    getUserWithID,
    updateUser,
    deleteUser
} from '../controllers/userController.js';



const routes = (app) => {
    
app.route('/user')
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getUsers)
    
    // Post endpoint
    .post(addnewUser);

app.route('/user/:userID')
    // get a specific user
    .get(getUserWithID)

    // updating a specific user
    .put(updateUser)

    // deleting a specific user
    .delete(deleteUser);
}

export default routes;