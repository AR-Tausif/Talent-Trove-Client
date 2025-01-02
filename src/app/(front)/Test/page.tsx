import { IJob } from '@/app/interface/apiData';
import { JobCard } from '@/components/cards/JobCard';
import { CategoryOfJob } from '@/components/cards/JobCategoryCards';

const Text = () => {
  // const data = [
  //   {
  //     "id": 2,
  //     "company": 2,
  //     "title": "skdjfasjfd",
  //     "description": "aksjdflksjdf",
  //     "salaryRange": 1500,
  //     "address": 1,
  //     "status": null,
  //     "createdBy": 1,
  //     "createdAt": "2024-12-09T18:10:28.079Z"
  //   },
  //   {
  //     "id": 3,
  //     "company": 2,
  //     "title": "skdjfasjfd",
  //     "description": "aksjdflksjdf",
  //     "salaryRange": 1500,
  //     "address": 1,
  //   },
  //   {
  //     "id": 4,
  //     "company": 2,
  //     "title": "Senior Product Designer",
  //     "description": "We are looking for a Senior Product Designer who will be responsible for delivering the best online user experience, which makes your role extremely important for our success and ensuring customer satisfaction and loyalty. The ideal candidate will have experience in working with numerous different design platforms such as mobile and desktop. The candidate will also have experience in working with complex backend and frontend systems.",
  //     "salaryRange": 35000,
  //     "address": 1,
  //   }
  // ]
  return (
    <div>
      <CategoryOfJob />
      {/* {data.map((job) => <JobCard key={job.id} job={job as unknown as IJob} />)} */}
    </div>
  );
};

export default Text;
