import AccountButton from '../account-button';
import MainMenu from './main-menu';

export default function DesktopNavigation() {
  return (
    <div className="hidden lg:flex lg:gap-2 lg:items-center">
      <MainMenu />
      <AccountButton closesSheet={false} />
    </div>
  );
}
