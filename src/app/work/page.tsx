import { WorkTopPageBtns } from "@/components/work/work-btns";
import { TopPageWorkCards } from "@/components/work/work-cards";

const WorkPage = () => {
  return (
    <div className="flex mt-4">
      <div className="w-36 p-4">左側のタグたち</div>

      <div className="flex-grow pl-4 pr-4 border-l-2 border-gray-400 overflow-x-hidden">
        <div className="flex justify-between items-center border-b-2 border-gray-400">
          <h1 className="text-4xl">Works</h1>
          <WorkTopPageBtns />
        </div>
        <TopPageWorkCards kind="following" />
        <TopPageWorkCards kind="following" />
      </div>

      <div className="w-72 bg-blue-900 p-4 rounded-bl-2xl rounded-tl-2xl shadow border-l border-t border-b border-gray-400">
        広告
      </div>
    </div>
  );
};
export default WorkPage;
