import { Table, Text, User } from "@nextui-org/react";

function UpcomingMatches() {
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
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671",
      awayteamlogo:
        "https://images-ext-1.discordapp.net/external/ha3tKagg5oi1Hi4WizNtStM-JrQIxs6A7nfaMC5BPRA/https/avatars.steamstatic.com/17b09d60c039dc177523aab3e95fb28599dc8695_full.jpg",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "15:30",
    },
    {
      key: "2",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/OJ-3PNvJJzfBkiykfyAS67RsTZcnVl_FoTmLRt_quyc/%3Fu%3Dhttps%253A%252F%252Fgamepedia.cursecdn.com%252Flolesports_gamepedia_en%252Ff%252Ffc%252FFnaticlogo_square.png%26f%3D1%26nofb%3D1%26ipt%3Dc6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteam: "FNC",
      date: "22/03/2023",
      time: "17:30",
    },
    {
      key: "3",
      tournament: "Advitya 2023",
      hometeam: "FNC",
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/OJ-3PNvJJzfBkiykfyAS67RsTZcnVl_FoTmLRt_quyc/%3Fu%3Dhttps%253A%252F%252Fgamepedia.cursecdn.com%252Flolesports_gamepedia_en%252Ff%252Ffc%252FFnaticlogo_square.png%26f%3D1%26nofb%3D1%26ipt%3Dc6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteamlogo:
        "https://images-ext-1.discordapp.net/external/ha3tKagg5oi1Hi4WizNtStM-JrQIxs6A7nfaMC5BPRA/https/avatars.steamstatic.com/17b09d60c039dc177523aab3e95fb28599dc8695_full.jpg",
      awayteam: "69fps",
      date: "22/03/2023",
      time: "19:30",
    },
    {
      key: "4",
      tournament: "Advitya 2023",
      hometeam: "Gambit",
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/QH6zZp_t817_R8Ayljk89tiNN_YotuXF8kTGWAe9-lc/%3Fu%3Dhttps%253A%252F%252Fwww.sitecs.net%252Fwp-content%252Fuploads%252F2020%252F07%252F1200px-Gambit_Esports_logo.svg_.png%26f%3D1%26nofb%3D1%26ipt%3D7c50c3b8f0e1420b978fd4b415d067ef87c4290300e4596be53266d9b4a2161a%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=618&height=671",
      awayteamlogo:
        "https://images-ext-1.discordapp.net/external/ha3tKagg5oi1Hi4WizNtStM-JrQIxs6A7nfaMC5BPRA/https/avatars.steamstatic.com/17b09d60c039dc177523aab3e95fb28599dc8695_full.jpg",
      awayteam: "69fps",
      date: "23/03/2023",
      time: "15:30",
    },
    {
      key: "5",
      tournament: "Advitya 2023",
      hometeam: "69fps",
      hometeamlogo:
        "https://images-ext-1.discordapp.net/external/ha3tKagg5oi1Hi4WizNtStM-JrQIxs6A7nfaMC5BPRA/https/avatars.steamstatic.com/17b09d60c039dc177523aab3e95fb28599dc8695_full.jpg",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671",
      awayteam: "RSG",
      date: "23/03/2023",
      time: "17:30",
    },

    {
      key: "6",
      tournament: "Advitya 2023",
      hometeam: "Gambit",
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/QH6zZp_t817_R8Ayljk89tiNN_YotuXF8kTGWAe9-lc/%3Fu%3Dhttps%253A%252F%252Fwww.sitecs.net%252Fwp-content%252Fuploads%252F2020%252F07%252F1200px-Gambit_Esports_logo.svg_.png%26f%3D1%26nofb%3D1%26ipt%3D7c50c3b8f0e1420b978fd4b415d067ef87c4290300e4596be53266d9b4a2161a%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=618&height=671",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/OJ-3PNvJJzfBkiykfyAS67RsTZcnVl_FoTmLRt_quyc/%3Fu%3Dhttps%253A%252F%252Fgamepedia.cursecdn.com%252Flolesports_gamepedia_en%252Ff%252Ffc%252FFnaticlogo_square.png%26f%3D1%26nofb%3D1%26ipt%3Dc6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteam: "Fnc",
      date: "23/03/2023",
      time: "19:30",
    },

    {
      key: "7",
      tournament: "Advitya 2023",
      hometeam: "Sen",
      hometeamlogo:
        "https://images-ext-1.discordapp.net/external/ZA4vlrFOTLRL3_zfck7YE7saDdUmhVX2KcoPi4cs5Zw/%3Fu%3Dhttps%253A%252F%252Fyt3.ggpht.com%252Fa%252FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%253Ds900-c-k-c0xffffffff-no-rj-mo%26f%3D1%26nofb%3D1%26ipt%3Dbf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671",
      awayteam: "RSG",
      date: "24/03/2023",
      time: "15:30",
    },

    {
      key: "8",
      tournament: "Advitya 2023",
      hometeam: "RSG",
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/QH6zZp_t817_R8Ayljk89tiNN_YotuXF8kTGWAe9-lc/%3Fu%3Dhttps%253A%252F%252Fwww.sitecs.net%252Fwp-content%252Fuploads%252F2020%252F07%252F1200px-Gambit_Esports_logo.svg_.png%26f%3D1%26nofb%3D1%26ipt%3D7c50c3b8f0e1420b978fd4b415d067ef87c4290300e4596be53266d9b4a2161a%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=618&height=671",
      awayteam: "Gambit",
      date: "24/03/2023",
      time: "17:30",
    },

    {
      key: "9",
      tournament: "Advitya 2023",
      hometeam: "Gambit",
      hometeamlogo:
        "https://images-ext-2.discordapp.net/external/QH6zZp_t817_R8Ayljk89tiNN_YotuXF8kTGWAe9-lc/%3Fu%3Dhttps%253A%252F%252Fwww.sitecs.net%252Fwp-content%252Fuploads%252F2020%252F07%252F1200px-Gambit_Esports_logo.svg_.png%26f%3D1%26nofb%3D1%26ipt%3D7c50c3b8f0e1420b978fd4b415d067ef87c4290300e4596be53266d9b4a2161a%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=618&height=671",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/OJ-3PNvJJzfBkiykfyAS67RsTZcnVl_FoTmLRt_quyc/%3Fu%3Dhttps%253A%252F%252Fgamepedia.cursecdn.com%252Flolesports_gamepedia_en%252Ff%252Ffc%252FFnaticlogo_square.png%26f%3D1%26nofb%3D1%26ipt%3Dc6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteam: "Fnc",
      date: "24/03/2023",
      time: "19:30",
    },
    {
      key: "10",
      tournament: "Advitya 2023",
      hometeam: "Sen",
      hometeamlogo:
        "https://images-ext-1.discordapp.net/external/ZA4vlrFOTLRL3_zfck7YE7saDdUmhVX2KcoPi4cs5Zw/%3Fu%3Dhttps%253A%252F%252Fyt3.ggpht.com%252Fa%252FAGF-l79XDwicAPlSnDhN-W24LzFqHEgNNj4I5BHY8w%253Ds900-c-k-c0xffffffff-no-rj-mo%26f%3D1%26nofb%3D1%26ipt%3Dbf369ce2be1c3ddcf067ab389224974d722220d4c193a4523dc4fdef2d29b9d4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteamlogo:
        "https://images-ext-2.discordapp.net/external/OJ-3PNvJJzfBkiykfyAS67RsTZcnVl_FoTmLRt_quyc/%3Fu%3Dhttps%253A%252F%252Fgamepedia.cursecdn.com%252Flolesports_gamepedia_en%252Ff%252Ffc%252FFnaticlogo_square.png%26f%3D1%26nofb%3D1%26ipt%3Dc6855646cd166917822d60ae8723418d3e0fefea47f528b72c2040a0126f72b1%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=671&height=671",
      awayteam: "Fnc",
      date: "25/03/2023",
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
      <Text h4>Upcoming matches</Text>
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

export default UpcomingMatches;
