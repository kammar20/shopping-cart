import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className="pl-5 pr-5 md:pl-7 md:pr-7 xl:pl-28 xl:pr-36 bg-zinc-100  dark:bg-[#101727] transition-colors duration-500 ease-in-out ">
      <Navbar />
      <div className="py-4 ">
        <Outlet />
      </div>
    </div>
  );
}
