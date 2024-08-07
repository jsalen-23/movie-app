import { Menu } from 'lucide-react';
import MainMenu from './main-menu';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import DropdownAccountButton from './account-button';

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
          <DropdownAccountButton />
        </SheetContent>
      </Sheet>
    </div>
  );
}
