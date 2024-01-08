import Brands from '@/components/atoms/Brands';
import Categories from '@/components/organisms/Categories';
import Hero from '@/components/organisms/Hero';
import NewArrivals from '@/components/organisms/NewArrivals';
import Newsletter from '@/components/organisms/Newsletter';
import Offers from '@/components/organisms/Offers';
import Products from '@/components/organisms/Products';

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <Categories />
      <Products />
      <Offers />
      <Newsletter />
    </>
  );
}
