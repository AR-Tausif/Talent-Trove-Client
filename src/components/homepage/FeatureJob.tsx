import { IJob } from '@/app/interface/apiData';
import { SectionHeader } from '../shared';
import { Button } from '../ui';
import { JobCard } from '../cards/JobCard';

interface Props extends React.ComponentProps<'div'> {}

export const FeatureJob = ({ ...props }: Props) => {
  const data = [
    {
      id: 2,
      company: 2,
      title: 'skdjfasjfd',
      description: 'aksjdflksjdf',
      salaryRange: 1500,
      address: 1,
      status: null,
      createdBy: 1,
      createdAt: '2024-12-09T18:10:28.079Z',
    },
    {
      id: 3,
      company: 2,
      title: 'skdjfasjfd',
      description: 'aksjdflksjdf',
      salaryRange: 1500,
      address: 1,
    },
    {
      id: 4,
      company: 2,
      title: 'Senior Product Designer',
      description:
        'We are looking for a Senior Product Designer who will be responsible for delivering the best online user experience, which makes your role extremely important for our success and ensuring customer satisfaction and loyalty. The ideal candidate will have experience in working with numerous different design platforms such as mobile and desktop. The candidate will also have experience in working with complex backend and frontend systems.',
      salaryRange: 35000,
      address: 1,
    },
  ];
  return (
    <div {...props}>
      <SectionHeader
        title="Featured Jobs"
        subtitle="Top Opportunities Await"
        description="Know your worth and find the job that qualifies your life"
      />

      <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-12">
        {data.map((job) => (
          <JobCard key={job.id} job={job as unknown as IJob} />
        ))}{' '}
      </div>
      <div className="text-center my-14">
        <Button>Browse more jobs </Button>
      </div>
    </div>
  );
};
