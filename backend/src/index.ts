import express from 'express';
import {createSession, deleteSession, getSessionById} from './services/auth.js';
import {createBottle, deleteBottle, getManyBottles, getOneBottleById, updateBottle} from './services/bottles.js';
import {computeStats} from './services/stats.js';

const app = express();
const publicRouter = express.Router()
const privateRouter = express.Router()
const port = 3000;

app.listen(port, () => {
    console.log(`==========================================`)
    console.log(`API listening on port ${port}`)
    console.log(`==========================================`)
});

app.all('*', (req, res, next) => {
    try {
        next();
    } finally {
        console.log(`>> ${req.method} >> ${req.url} << ${res.statusCode}`);
    }
});

app.use(express.json());

app.use('/static', express.static('static'))

app.use('/api/public', publicRouter);

publicRouter.route(`/session`)
    .post((req, res) => {
        try {
            res.json(createSession(req.body));
        } catch (e) {
            res.sendStatus(401);
        }
    });

app.use('/api/private', privateRouter);

privateRouter.all('*', (req, res, next) => {
    const sessionId = req.header('Authorization')?.trim();
    if (!sessionId) {
        res.sendStatus(401);
    } else {
        const session = getSessionById(sessionId);
        if (!session) {
            res.sendStatus(403);
        } else {
            res.locals.session = session;
            next();
        }
    }
});

privateRouter.route(`/session/current`)
    .get((_, res) => {
        res.json(res.locals.session);
    })
    .delete((req, res) => {
        res.json(deleteSession(res.locals.session));
    });

privateRouter.route(`/bottle`)
    .get((_, res) => {
        res.json(getManyBottles());
    })
    .post((req, res) => {
        res.json(createBottle(req.body));
    });

privateRouter.route(`/bottle/:id`)
    .get((req, res) => {
        res.json(getOneBottleById(req.params.id));
    })
    .put((req, res) => {
        res.json(updateBottle(req.body));
    })
    .delete((req, res) => {
        res.json(deleteBottle(req.params.id));
    });

privateRouter.route(`/stats`)
    .get((_, res) => {
        res.json(computeStats());
    });
