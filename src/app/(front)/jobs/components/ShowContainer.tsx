'use client';

import { JobCard } from '@/components/cards/JobCard';
import { JobSearch } from './JobSearch';
import { JobFilters } from './JobFilters';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllJobs } from '@/services/axios/jobs';
import { IJob } from '@/app/interface/apiData';

interface Props extends React.ComponentProps<'div'> {}

export const ShowJobs = ({ ...props }: Props) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productList = await getAllJobs();
        setLoading(false);
        setJobs(productList.data);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }
  return (
    <div
      className=" pt-16 pb-12 flex justify-between p-6 lg:p-0  flex-col-reverse mx-auto  max-w-7xl lg:flex-row"
      {...props}
    >
      <div className="w-full   ">
        <JobSearch className=" w-full mx-2" />

        <h1 className="px-4 text-3xl font-bold mb-6 mt-7">Latest Jobs</h1>

        <div id="job container" className="space-y-3">
          {jobs.map((job: IJob, index) => (
            <Link href={`/jobs/${job.id}`} key={index}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </div>

      <JobFilters />
    </div>
  );
};
