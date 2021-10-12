import { ListItem } from "../components/ListItem";
import { jobs } from "../data";
const Index = () => {
  return (
    <div className="w-screen">
      <div className="bg-de-saturated-cyan h-40 bg-cover bg-bg-header-mobile sm:bg-bg-header-desktop"></div>
      <div className="px-6 sm:px-40 py-10 space-y-12 sm:space-y-6 bg-background">
        {jobs.map((job) => (
          <ListItem item={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};
export default Index;
