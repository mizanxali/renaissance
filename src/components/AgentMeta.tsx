import { Card, Col, Text } from "@nextui-org/react";

const AgentMeta = () => {
  const agents = [
    {
      name: "Jett",
      img: "https://www.vlr.gg/img/vlr/game/agents/jett.png",
    },
    {
      name: "Reyna",
      img: "https://www.vlr.gg/img/vlr/game/agents/reyna.png",
    },
    {
      name: "Neon",
      img: "https://www.vlr.gg/img/vlr/game/agents/neon.png",
    },
    {
      name: "Sage",
      img: "https://www.vlr.gg/img/vlr/game/agents/sage.png",
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
