import { Table, Text, User } from "@nextui-org/react";

function YourUpcomingMatches() {
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
  ];

  const rows = [
    {
      key: "1",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "2",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "3",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteamlogo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "15:30",
    },
  ];

  const renderCell = (data: any, columnKey: any) => {
    const cellValue = data[columnKey];
    switch (columnKey) {
      case "hometeam":
        return <User src={data.hometeamlogo} name={data.hometeam} />;
      case "awayteam":
        return <User src={data.awayteamlogo} name={data.awayteam} />;
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

export default YourUpcomingMatches;
