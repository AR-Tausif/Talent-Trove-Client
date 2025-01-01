import { IJob } from '@/app/interface/apiData';
import axiosClient from './axiosClient';

export const getAllJobs = async () => {
  return axiosClient.get('/job');
};
export const getJobById = async (jobId: number) => {
  return axiosClient.get(`/job/${jobId}`);
};

// export const updateUserProfile = async (data: any) => {
//   return axiosClient.put("/users/profile", data);
// };
