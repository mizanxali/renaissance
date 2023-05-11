import { Table, Text } from "@nextui-org/react";
import Image from "next/image";

const MatchScorecard = () => {
  const columns = [
    {
      key: "playername",
      label: "Player Name",
    },
    {
      key: "agent",
      label: "Agent",
    },
    {
      key: "acs",
      label: "ACS",
    },
    {
      key: "kda",
      label: "KDA",
    },
    {
      key: "hs",
      label: "HS%",
    },
  ];

  const rows = [
    {
      key: "1",
      playername: "69fps ALI J",
      team: "69fps",
      agent: "https://www.vlr.gg/img/vlr/game/agents/reyna.png",
      acs: 321,
      kda: "60/34/19",
      hs: 63,
    },
    {
      key: "2",
      playername: "69fps Dystopia",
      team: "69fps",
      agent: "https://www.vlr.gg/img/vlr/game/agents/omen.png",
      acs: 300,
      kda: "61/44/27",
      hs: 54,
    },
    {
      key: "3",
      playername: "69fps z3al",
      team: "69fps",
      agent: "https://www.vlr.gg/img/vlr/game/agents/sova.png",
      acs: 250,
      kda: "54/54/10",
      hs: 66,
    },
    {
      key: "4",
      playername: "69fps Kaptaan",
      team: "69fps",
      agent: "https://www.vlr.gg/img/vlr/game/agents/cypher.png",
      acs: 120,
      kda: "20/54/33",
      hs: 47,
    },
    {
      key: "5",
      playername: "69fps ReVival",
      team: "69fps",
      agent: "https://www.vlr.gg/img/vlr/game/agents/fade.png",
      acs: 98,
      kda: "12/58/60",
      hs: 13,
    },
    {
      key: "6",
      playername: "RSG Harish",
      team: "RSG",
      agent: "https://www.vlr.gg/img/vlr/game/agents/raze.png",
      acs: 291,
      kda: "57/31/5",
      hs: 57,
    },
    {
      key: "7",
      playername: "RSG Knull",
      team: "RSG",
      agent: "https://www.vlr.gg/img/vlr/game/agents/omen.png",
      acs: 192,
      kda: "40/34/20",
      hs: 54,
    },
    {
      key: "8",
      playername: "RSG Azey",
      team: "RSG",
      agent: "https://www.vlr.gg/img/vlr/game/agents/jett.png",
      acs: 220,
      kda: "54/42/41",
      hs: 66,
    },
    {
      key: "9",
      playername: "RSG Hardy",
      team: "RSG",
      agent: "https://www.vlr.gg/img/vlr/game/agents/cypher.png",
      acs: 92,
      kda: "22/49/40",
      hs: 11,
    },
    {
      key: "10",
      playername: "RSG Actual",
      team: "RSG",
      agent: "https://www.vlr.gg/img/vlr/game/agents/breach.png",
      acs: 123,
      kda: "18/58/41",
      hs: 19,
    },
  ];

  const renderCell = (data: any, columnKey: any) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case "playername":
        return (
          <div className="flex flex-col">
            <Text h5 color={data.team === "69fps" ? "success" : "error"}>
              {data.playername}
            </Text>
            <Text h6 color="grey">
              {data.team}
            </Text>
          </div>
        );
      case "agent":
        return <Image alt="agent" width={20} height={20} src={data.agent} />;
      default:
        return cellValue;
    }
  };

  return (
    <div>
      <Text h4>Match Scorecard</Text>
      <Table
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column allowsSorting key={column.key}>
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows.sort((a, b) => b.acs - a.acs)}>
          {(item) => (
            <Table.Row key={item.key}>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MatchScorecard;
