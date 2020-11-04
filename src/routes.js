import PrintCard from './components/PrintCard.vue';
import Form from './components/Form.vue';

const routes = [
    {path: '/', name:'form', component: Form},
    {path: '/print', component: PrintCard},
];

export default routes;