import { Card, Col, Text } from "@nextui-org/react";

const AgentMeta = () => {
  const agents = [
    {
      name: "Jett",
      img: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      name: "Reyna",
      img: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      name: "Neon",
      img: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      name: "Sgae",
      img: "https://nextui.org/images/card-example-4.jpeg",
    },
  ];

  return (
    <div>
      <Text h4>Agent Meta</Text>
      <div className="flex flex-col gap-5">
        {agents.map((agent) => (
          <AgentCard key={agent.name} name={agent.name} img={agent.img} />
        ))}
      </div>
    </div>
  );
};

const AgentCard = ({ img, name }: IAgentCardProps) => {
  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h4 color="white">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={img}
        objectFit="cover"
        width="100%"
        height={170}
        alt="Card image background"
      />
    </Card>
  );
};

export default AgentMeta;

interface IAgentCardProps {
  name: string;
  img: string;
}
