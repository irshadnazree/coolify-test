import JobCard from '@/components/JobCard';
import { promises as fs } from 'fs';

export default async function Page() {
  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  await delay(500); // 1-second delay

  const file = await fs.readFile(process.cwd() + '/data/joblist.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen'>
      {data.map((job: any, index: number) => (
        <JobCard job={job} key={index} />
      ))}
    </div>
  );
}
