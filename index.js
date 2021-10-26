const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();

const app = new Koa();
const port = process.env.PORT || 8080;

app.use(bodyParser());

router.get('/(.*)', 
    (ctx, next) => {
        const response = {
            url: ctx.request.url,
            headers: ctx.request.headers,
        };

        ctx.body = JSON.stringify(response);
    }
);

router.post('/(.*)', 
    (ctx, next) => {
        const response = {
            url: ctx.request.url,
            headers: ctx.request.headers,
            body: ctx.request.body,
        };

        ctx.body = JSON.stringify(response);
    }
);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

console.log(`Listening on port ${port}`);
