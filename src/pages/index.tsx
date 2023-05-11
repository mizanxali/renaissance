import AgentMeta from "@/components/AgentMeta";
import MyNavbar from "@/components/Navbar";
import YourUpcomingMatches from "@/components/YourUpcomingMatches";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <div className="flex flex-row">
        <div className="flex-1 p-10">
          <YourUpcomingMatches />
        </div>
        <div className="w-1/3 p-10">
          <AgentMeta />
        </div>
      </div>
    </>
  );
}
