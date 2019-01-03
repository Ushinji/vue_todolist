import HeaderLayout from './components/templates/HeaderLayout';
import HelloWorld from './components/pages/HelloWorld';
import ToDoList from './components/pages/ToDoList';
import ToDoSetting from './components/pages/ToDoSetting';
import Counter from './components/pages/Counter';

export default [
  {
    path: '/',
    component: HeaderLayout,
    children: [
      {
        path: '',
        component: HelloWorld,
      },
      {
        path: 'todos',
        component: ToDoList,
        props: route => ({ id: Number(route.params.id) }),
      },
      {
        path: 'todos/:id',
        component: ToDoSetting,
      },
      {
        path: 'counter',
        component: Counter,
      },
    ],
  },
];
