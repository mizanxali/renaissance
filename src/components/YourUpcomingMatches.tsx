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
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.ign.com%2Fign_ap%2Fscreenshot%2Fdefault%2Frsglogo-full-colour_fu78.jpg&f=1&nofb=1&ipt=06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteamcdn-a.akamaihd.net%2Fsteamcommunity%2Fpublic%2Fimages%2Favatars%2F0d%2F0d658a568f32eacb9ac53beb0fb6bd9010f8d991_full.jpg&f=1&nofb=1&ipt=889d78b763f5111d45aaa5ba2bb9764f8fc225ad1a9927b672ff3c88f990f29c&ipo=images",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "2",
      tournament: "VCT 2021",
      hometeam: "SENTINELS",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=bf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Flolesports_gamepedia_en%2Ff%2Ffc%2FFnaticlogo_square.png&f=1&nofb=1&ipt=c6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1&ipo=images",
      awayteam: "FNATIC",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "3",
      tournament: "VALORANT CHAMPIONS 2021",
      hometeam: "100T",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78MXtu4obb6XldN4S-iBQmTE_Qz-b7esLU-qA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=2121e414aac3d0c1d6a0f574bdfff1912fce6e03ae8e0d66df5bc448cd44bf37&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=bf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4&ipo=images",
      awayteam: "SENTINELS",
      date: "22/03/2023",
      time: "15:30",
    },

 {
      key: "4",
      tournament: "VCT 2022",
      hometeam: "FNATIC",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Flolesports_gamepedia_en%2Ff%2Ffc%2FFnaticlogo_square.png&f=1&nofb=1&ipt=c6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Flolesports_gamepedia_en%2Fimages%2F4%2F4c%2FDragonXlogo_square.png%2Frevision%2Flatest%3Fcb%3D20191010064650&f=1&nofb=1&ipt=76bb5b24c710a2dd027f67c0d97bd452c316d25899fb9dd4579a16fde06cc7f6&ipo=images",
      awayteam: "DRX",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "5",
      tournament: "VCT 2023",
      hometeam: "LIQUID",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Flolesports_gamepedia_en%2Ff%2Ff4%2FTeam_Liquidlogo_square.png&f=1&nofb=1&ipt=ef149fde42a3012f12a6ce6c4a4f76bfeeea22fc380ef037d0597629f23e1d85&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=bf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4&ipo=images",
      awayteam: "SENTINELS",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "6",
      tournament: "VCT LOCKIN 2023",
      hometeam: "DRX",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Flolesports_gamepedia_en%2Fimages%2F4%2F4c%2FDragonXlogo_square.png%2Frevision%2Flatest%3Fcb%3D20191010064650&f=1&nofb=1&ipt=76bb5b24c710a2dd027f67c0d97bd452c316d25899fb9dd4579a16fde06cc7f6&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=bf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4&ipo=images",
      awayteam: "SENTINELS",
      date: "22/03/2023",
      time: "15:30",
    },

 {
      key: "7",
      tournament: "AVALOTRANT CHAMPIONS 2022",
      hometeam: "SENTINELS",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=bf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78MXtu4obb6XldN4S-iBQmTE_Qz-b7esLU-qA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=2121e414aac3d0c1d6a0f574bdfff1912fce6e03ae8e0d66df5bc448cd44bf37&ipo=images",
      awayteam: "100T",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "8",
      tournament: "VALORANT CHAMPIONS 2023",
      hometeam: "100 T",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78MXtu4obb6XldN4S-iBQmTE_Qz-b7esLU-qA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=2121e414aac3d0c1d6a0f574bdfff1912fce6e03ae8e0d66df5bc448cd44bf37&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=bf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4&ipo=images",
      awayteam: "SENTINELS",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "9",
      tournament: "EMEA CHAMPS 2022",
      hometeam: "FNATIC",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Flolesports_gamepedia_en%2Ff%2Ffc%2FFnaticlogo_square.png&f=1&nofb=1&ipt=c6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Flolesports_gamepedia_en%2Fimages%2F4%2F4c%2FDragonXlogo_square.png%2Frevision%2Flatest%3Fcb%3D20191010064650&f=1&nofb=1&ipt=76bb5b24c710a2dd027f67c0d97bd452c316d25899fb9dd4579a16fde06cc7f6&ipo=images",
      awayteam: "DRX",
      date: "22/03/2023",
      time: "15:30",
    },
 {
      key: "10",
      tournament: "AMERICAS 2023",
      hometeam: "LIQUID",
      hometeamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Flolesports_gamepedia_en%2Ff%2Ff4%2FTeam_Liquidlogo_square.png&f=1&nofb=1&ipt=ef149fde42a3012f12a6ce6c4a4f76bfeeea22fc380ef037d0597629f23e1d85&ipo=images",
      awayteamlogo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l78MXtu4obb6XldN4S-iBQmTE_Qz-b7esLU-qA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=2121e414aac3d0c1d6a0f574bdfff1912fce6e03ae8e0d66df5bc448cd44bf37&ipo=images",
      awayteam: "100T",
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
