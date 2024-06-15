import Main from '../components/home/Main';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/home/footer/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className='bg-black text-white'>
      <Navbar/>
      <Main/>
      <Footer/>
      <Toaster />
    </main>
  );
}
