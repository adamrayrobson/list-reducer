import { Outlet } from 'react-router-dom';
import Header from './Header';
export default function Layout() {
  return (
    <section>
      <Header  />
      <main>
        <Outlet />
      </main>
    </section>
  )
}

