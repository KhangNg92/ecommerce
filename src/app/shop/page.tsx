import ShopBanner from '@/components/organisms/ShopBanner';
import ShopCardList from '@/components/organisms/ShopCardList';
import ShopFilter from '@/components/organisms/ShopFilter';

export default function Shop() {
  console.log('test');
  return (
    <div>
      <ShopBanner />
      <div className='ga-6 flex flex-col md:flex-row'>
        <ShopFilter />
        <ShopCardList />
      </div>
    </div>
  );
}
