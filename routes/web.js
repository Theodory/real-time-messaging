const indexRouter = require('./index');
const usersRouter = require('./chatroom');

module.exports = (app) => {
 app.use('/', indexRouter);	
 app.use('/chatroom', usersRouter);
};
