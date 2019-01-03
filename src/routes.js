import HeaderLayout from './components/templates/HeaderLayout';
import HelloWorld from './components/pages/HelloWorld';
import ToDoList from './components/pages/ToDoList';
import Counter from './components/pages/Counter';

export default [
  {
    path: '/',
    component: HeaderLayout,
    children: [
      { path: '', component: HelloWorld },
      { path: 'todos', component: ToDoList },
      { path: 'counter', component: Counter },
    ],
  },
];
