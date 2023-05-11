import MatchOverview from "@/components/MatchOverview";
import MatchScorecard from "@/components/MatchScorecard";
import MyNavbar from "@/components/Navbar";

export default function match() {
  return (
    <>
      <MyNavbar />
      <div className="flex flex-col items-center">
        <div className="w-1/2 p-5">
          <MatchOverview />
        </div>
        <div className="w-full p-5">
          <MatchScorecard />
        </div>
      </div>
    </>
  );
}
