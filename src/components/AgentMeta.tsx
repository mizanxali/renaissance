import { Card, Col, Text } from "@nextui-org/react";

const AgentMeta = () => {
  const agents = [
    {
      name: "Jett",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sportsmanor.com%2Fdetails-on-jett-plays-and-abilities%2F&psig=AOvVaw0OyyIidfES3D3SBRkI8ieZ&ust=1683903253584000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCc_cvC7f4CFQAAAAAdAAAAABAE",
    },
    {
      name: "Reyna",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvalorantinfo.com%2Fagents%2Freyna&psig=AOvVaw1ZLU29W9CGGj3fX1qYI1oO&ust=1683903173932000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPji8qXC7f4CFQAAAAAdAAAAABAE",
    },
    {
      name: "Neon",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.polygon.com%2F22872050%2Fvalorant-new-agent-neon-ability-kit-ultimate&psig=AOvVaw3ydUGM1NYdjmKYVXR7_D4J&ust=1683903229190000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDbocDC7f4CFQAAAAAdAAAAABAE",
    },
    {
      name: "Sgae",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.esports.net%2Fwiki%2Fguides%2Fvalorant-sage-guide%2F&psig=AOvVaw02IRYcKTkYgSv7W2nC8ZSY&ust=1683903281818000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLi3o9nC7f4CFQAAAAAdAAAAABAE",
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
