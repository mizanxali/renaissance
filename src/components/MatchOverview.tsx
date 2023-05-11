import { Card, Grid, Text, User } from "@nextui-org/react";

const MatchOverview = () => {
  return (
    <div>
      <Card css={{ p: "$6" }}>
        <Card.Header>
          <img
            alt="nextui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width="34px"
            height="34px"
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                VITB Super Four
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <div className="w-full flex justify-between">
            <div className="flex flex-col justify-center">
              <User
                size="xl"
                src="https://images-ext-2.discordapp.net/external/sTSqvOscW2QoUHttc43vSzGpoTMw_kBln1iqGkHHsgI/%3Fu%3Dhttps%253A%252F%252Fsm.ign.com%252Fign_ap%252Fscreenshot%252Fdefault%252Frsglogo-full-colour_fu78.jpg%26f%3D1%26nofb%3D1%26ipt%3D06e4e99d2b005ea8a55a51cc3931001c3e7ec8fafac9c621f322ef4bef40bca4%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/?width=1302&height=671"
                name="RSG"
              />
            </div>
            <div>
              <Text h1>1 : 2</Text>
            </div>
            <div className="flex flex-col justify-center">
              <User
                size="xl"
                src="https://images-ext-2.discordapp.net/external/HImTMZAFfTfalojf9y2VF4ROF11p-gK-cGYRU4DxmIw/%3Fu%3Dhttps%253A%252F%252Fsteamcdn-a.akamaihd.net%252Fsteamcommunity%252Fpublic%252Fimages%252Favatars%252F17%252F17b09d60c039dc177523aab3e95fb28599dc8695_full.jpg%26f%3D1%26nofb%3D1%26ipt%3Dc6c3a1fd1bc90909228c2689c3e10e5eb1470707b8ea212ff550855e2a9b0448%26ipo%3Dimages/https/external-content.duckduckgo.com/iu/"
                name="69fps"
              />
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="flex w-full justify-between">
            <Text>23/03/2023, 15:30 </Text>
            <Text color="primary">Ascent, Haven, Split</Text>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MatchOverview;
