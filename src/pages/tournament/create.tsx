import MyNavbar from "@/components/Navbar";
import { Button, Input, Radio, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function createTournament() {
  const [teamCount, setTeamCount] = useState(2);

  return (
    <>
      <MyNavbar />
      <div className="flex flex-row">
        <div className="flex-1 p-5">
          <Text h3>Create Tournament</Text>
          <div className="flex flex-col gap-5">
            <Input label="Tournament Name" placeholder="VITB Super Four" />
            <Input
              label="Team Count"
              value={teamCount}
              type="number"
              onChange={(e) => setTeamCount(parseInt(e.target.value))}
              min={2}
            />
            {teamCount > 0 &&
              [...Array(teamCount)].map((e, i) => (
                <Input
                  label={`Team ${i + 1} Name`}
                  placeholder={`Team ${i + 1}`}
                />
              ))}
            <Input
              label="Prize Pool"
              type="number"
              contentLeft={<Text>₹</Text>}
            />
            <Radio.Group label="Format" defaultValue="A">
              <Radio value="single-elim">Single Elim</Radio>
              <Radio value="double-elim">Double Elim</Radio>
              <Radio value="round-robin">Round Robin</Radio>
            </Radio.Group>
            <Button>Create</Button>
          </div>
        </div>
        <div className="w-1/2 h-full p-5 flex flex-col items-center justify-center">
          <Text h6>Tournament Logo</Text>
          <Image
            src="https://findlogovector.com/wp-content/uploads/2019/03/vit-bhopal-logo-vector.png"
            alt="tourney logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
