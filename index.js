const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('koa-router')();
const app = new Koa();
const port = process.env.PORT || 8080;

app.use(koaBody());

router.get('/(.*)', koaBody(),
    (ctx) => {
        const response = {
            url: ctx.request.url,
            headers: ctx.request.headers,
        };

        ctx.body = JSON.stringify(response);
    }
);

router.post('/(.*)', koaBody(),
    (ctx) => {
        const response = {
            url: ctx.request.url,
            headers: ctx.request.headers,
            body: ctx.request.body,
        };

        ctx.body = JSON.stringify(response);
    }
);

app.use(router.routes());
app.listen(port);

console.log(`Listening on port ${port}`);
