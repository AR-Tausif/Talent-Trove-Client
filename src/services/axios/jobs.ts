import axiosClient from './axiosClient';

export const getAllJobs = async () => {
  return axiosClient.get('/job');
};

// export const updateUserProfile = async (data: any) => {
//   return axiosClient.put("/users/profile", data);
// };
