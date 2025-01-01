export interface IJob {
  id: number;
  company: number;
  title: string;
  createdBy: number; //user id
  description: string;
  salaryRange: number;
  address: string;
}
