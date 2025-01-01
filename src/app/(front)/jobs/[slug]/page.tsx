'use client';
import { useEffect, useState } from 'react';
import JobDetailsPage from '../components/JobDetailsPage';
import { IJob } from '@/app/interface/apiData';
import { getJobById } from '@/services/axios/jobs';
import { Button } from '@/components/ui';
import Link from 'next/link';
import { JobHeading } from '../components';
type TParams = {
  slug: string;
};
const Page = ({ params }: { params: TParams }) => {
  const { slug } = params;

  const [job, setJob] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productList = await getJobById(Number(slug));
        setLoading(false);
        setJob(productList.data);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (!job) {
    return (
      <div className="h-screen w-screen flex flex-col gap-y-5 justify-center items-center text-center">
        <p className="text-3xl">Job post not availabe</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="text-center">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }

  console.log(slug);
  return (
    <div className="mt-14 ">
      <JobHeading title={(job as unknown as IJob).title} />
      <JobDetailsPage job={job as unknown as IJob} />
    </div>
  );
};

export default Page;
