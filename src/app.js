import './style/reset.scss';
import './style/index.scss';
import Tool from './component/Tool';
import TodoList from './component/TodoList';
import { $, innerHTML } from './util';
const l = window.localStorage.getItem('list');
const list = l ? JSON.parse(l) : [];
const listDom = $('list');
innerHTML(listDom, list);
Tool();
TodoList();
