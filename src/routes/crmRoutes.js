import { runInNewContext } from "vm";
import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Middleware
            console.log(`Request de : ${req.originalUrl}`)
            console.log(`Request type : ${req.method}`)
            next();
            }, getContacts)

        .post(addNewContact);

    app.route('/contact/:contactId')

        .get(getContactWithId)

        .put(updateContact)

        .delete(deleteContact);
}

export default routes;