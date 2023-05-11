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
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                name="RSG"
              />
            </div>
            <div>
              <Text h1>1 : 2</Text>
            </div>
            <div className="flex flex-col justify-center">
              <User
                size="xl"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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
