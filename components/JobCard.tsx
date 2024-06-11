function JobCard(props: any) {
  const { job } = props;

  return (
    <div className='flex justify-between items-center gap-2 p-5 rounded-lg bg-slate-100 w-1/2'>
      <div>
        <h1 className='text-slate-950 text-2xl font-bold'>{job.title}</h1>
        <h2 className='text-slate-700 text-md'>{job.company.name}</h2>
      </div>
      <img src={job.company.logo} alt='' className='w-12 h-auto' />
    </div>
  );
}

export default JobCard;
