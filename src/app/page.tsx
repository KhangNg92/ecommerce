import Brands from '@/components/atoms/Brands';
import Categories from '@/components/organisms/Categories';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import NewArrivals from '@/components/organisms/NewArrivals';
import Newsletter from '@/components/organisms/Newsletter';
import Offers from '@/components/organisms/Offers';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <NewArrivals />
      <Categories />
      <Offers />
      <Newsletter />
      <Footer />
    </div>
  );
}
