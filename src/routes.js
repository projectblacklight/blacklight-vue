import Search from './components/Search';
import ShowPage from './components/ShowPage';

export const Routes = [
  { path: '/item/:id', name: 'show', component: ShowPage },
  { path: '/catalog/:filter?', name: 'search', component: Search }
]
