import { Header} from '@/components/Header';
import { Footer} from '@/components/Footer';
import { Products } from '@/components/Products';
import { ShopPyCategry } from '@/components/ShopPyCategry';
import Testmonilsm from '@/components/Testmonilsm';
import Servecs from '@/components/Servecs';
import Nav from '@/components/Nav';
export default function Home() {
  return (
   <div className=' relative bg-white  min-h-screen flex flex-col justify-between  overflow-hidden'>
   <Header />
   <Servecs/>
   <Products />
   <ShopPyCategry />
   <Testmonilsm />
   
   </div>
  );
}
