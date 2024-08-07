import UserHeading from '@/components/user-heading';
import UserList from '@/components/user-list';

export default function ProfilePage() {
  return (
    <section className="w-full max-w-[1140px] mx-auto py-5 px-4 lg:pt-10 flex flex-col">
      <div className="pb-8"><UserHeading /></div>
      <UserList />
    </section>
  );
}
