import { Menu } from 'lucide-react';
import AccountButton from '../account-button';
import MainMenu from './main-menu';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

export default function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <span className="sr-only">Menu</span>
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex flex-col justify-between"
          aria-describedby={undefined}
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <MainMenu />
          <AccountButton closesSheet />
        </SheetContent>
      </Sheet>
    </div>
  );
}
