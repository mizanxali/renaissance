import { Table, Text, User } from "@nextui-org/react";

function PastMatches() {
  const columns = [
    {
      key: "tournament",
      label: "Tournament",
    },
    {
      key: "hometeam",
      label: "Home Team",
    },
    {
      key: "awayteam",
      label: "Away Team",
    },
    {
      key: "date",
      label: "Date",
    },
    {
      key: "time",
      label: "Time",
    },
    {
      key: "result",
      label: "Result",
    },
    {
      key: "winner",
      label: "Winner",
    },
  ];

  const rows = [
    {
      key: "1",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo: "https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671",
      awayteamlogo: "https://images-ext-1.discordapp.net/external/ha3tKagg5oi1Hi4WizNtStM-JrQIxs6A7nfaMC5BPRA/https/avatars.steamstatic.com/17b09d60c039dc177523aab3e95fb28599dc8695_full.jpg",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "15:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      key: "2",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "FNC",
      date: "22/03/2023",
      time: "17:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      key: "3",
      tournament: "Advitya 2023",
      hometeam: "FNC",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "19:30",
      result: "2:1",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
{
      key: "4",
      tournament: "Advitya 2023",
      hometeam: "Gambit",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "69fps",
      date: "23/03/2023",
      time: "15:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
{
      key: "5",
      tournament: "Advitya 2023",
      hometeam: "69fps",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "RSG",
      date: "23/03/2023",
      time: "17:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },

{
      key: "6",
      tournament: "Advitya 2023",
      hometeam: "Gambit",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "Fnc",
      date: "23/03/2023",
      time: "19:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },

{
      key: "7",
      tournament: "Advitya 2023",
      hometeam: "Sen",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "RSG",
      date: "24/03/2023",
      time: "15:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },

{
      key: "8",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "Gambit",
      date: "24/03/2023",
      time: "17:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },

{
      key: "9",
      tournament: "Advitya 2023",
      hometeam: "Gambit",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "Fnc",
      date: "24/03/2023",
      time: "19:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
{
      key: "10",
      tournament: "Advitya 2023",
      hometeam: "Sen",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "Fnc",
      date: "25/03/2023",
      time: "15:30",
      result: "1:2",
      winner: "69fps",
      winnerteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
  ];

  const renderCell = (data: any, columnKey: any) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case "hometeam":
        return <User src={data.hometeamlogo} name={data.hometeam} />;
      case "awayteam":
        return <User src={data.awayteamlogo} name={data.awayteam} />;
      case "winner":
        return <User src={data.winnerteamlogo} name={data.winner} />;
      default:
        return cellValue;
    }
  };

  return (
    <div>
      <Text h4>Your upcoming matches</Text>
      <Table
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
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
}

export default PastMatches;
