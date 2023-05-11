import { Text, Navbar, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyNavbar = () => {
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Image
          alt="renaissance"
          src="https://media.discordapp.net/attachments/731001126228459571/1106238539458420807/logo_trans.png?width=1000&height=1000"
          width={80}
          height={80}
        />
        <Text b color="inherit">
          Renaissance
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/matches">Schedule</Navbar.Link>
        <Navbar.Link href="/match">Match</Navbar.Link>
        <Navbar.Link href="/tournament">Tournament</Navbar.Link>
        <Navbar.Link href="/tournament/create">Create Tournament</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default MyNavbar;
