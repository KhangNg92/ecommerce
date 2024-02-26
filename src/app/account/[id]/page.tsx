import './styles.scss';

import { AccountContent } from '@/components/organisms/Account/AccountContent';
import { UserSidebar } from '@/components/organisms/Account/UserSidebar';

export default function Account() {
  return (
    <div className={'px-8 md:px-40'}>
      <div className='py-10 md:py-20'>
        <h1 className='m-0 p-0 text-center text-[40px] font-normal text-title dark:text-[] md:text-white'>
          My Account
        </h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        <UserSidebar />
        <AccountContent />
      </div>
    </div>
  );
}
