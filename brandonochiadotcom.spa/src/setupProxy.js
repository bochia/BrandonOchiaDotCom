const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/BodyScaleData",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7247',
        secure: false
    });

    app.use(appProxy);
};
