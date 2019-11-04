import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import './models';

import indexRouter from './routes/index';
import apiRouter from './routes/api';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

export default app;

