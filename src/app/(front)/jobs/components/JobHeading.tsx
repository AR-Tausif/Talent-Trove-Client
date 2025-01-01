interface Props {
  title: string;
}
export const JobHeading = ({ title }: Props) => {
  return (
    <div className="bg-gray-50/90 py-6 w-full">
      <div className="container flex items-center justify-center px-4 text-center md:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
            <p className="text-gray-500">at</p>
            <img
              src="/placeholder.svg"
              width="120"
              height="40"
              alt="Logo"
              className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
