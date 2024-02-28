import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Page from './components/Page';
import NotFound from './components/NotFound'
import Create from './components/Create';
import Posts from './components/Posts';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Page />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
