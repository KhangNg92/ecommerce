import Brands from '@/components/atoms/Brands';
import Hero from '@/components/atoms/Hero';
import Header from '@/components/organisms/Header';
import NewArrivals from '@/components/organisms/NewArrivals';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <NewArrivals />
    </div>
  );
}
