import Search from './components/Search';
import ShowPage from './components/ShowPage';

const Routes = [
  { path: '/item/:id', name: 'show', component: ShowPage },
  { path: '/catalog/:filter?', name: 'search', component: Search }
]

export default Routes
