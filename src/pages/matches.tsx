import MyNavbar from "@/components/Navbar";
import PastMatches from "@/components/PastMatches";
import UpcomingMatches from "@/components/UpcomingMatches";
import { Button, Text } from "@nextui-org/react";
import { useState } from "react";

export default function matches() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <MyNavbar />
      <div>
        <div className="flex p-5 gap-2">
          <Button bordered={tab === 1} onClick={() => setTab(0)}>
            Upcoming Matches
          </Button>
          <Button bordered={tab === 0} onClick={() => setTab(1)}>
            Past Matches
          </Button>
        </div>
        <div>
          {tab === 0 && <UpcomingMatches />}
          {tab === 1 && <PastMatches />}
        </div>
      </div>
    </>
  );
}
