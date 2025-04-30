import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <div className='text-3xl'>Welcome</div>
      <Link href='/properties'>Go To Properties</Link>
    </div>
  );
};

export default HomePage;
