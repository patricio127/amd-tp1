const productos = {template: `<product-list-component></product-list-component>`, name :"lista-producto"};
const agregar = {template: `<create-component></create-component>`, name :"agregar-producto"};

const routes = [
    {path: '/', component: productos },
    {path: '/agregar', component: agregar },
    {path: '*', redirect: '/' },
];

const router = new VueRouter ({
    routes
});


