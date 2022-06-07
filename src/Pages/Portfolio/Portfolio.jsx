import {
   ActionIcon,
   Anchor,
   Avatar,
   Button,
   Center,
   Group,
   Paper,
   Text,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import React from "react";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

const code = `class Emon:

def __init__(self):
    self.username = 'Saifurrahmanmon'
    self.name = 'Saifur Rahman Emon'
    self.bio = 'Tech enthusiast, with a constantly growing love for languages. Loves to work as a team and learn new tech'
    self.code = {
        'frontend': ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Mantine UI', 'Material UI', 'Bootstrap', 'TailWind'],
        'backend': ['Python','Django', 'NodeJS', 'Express'],
        'database': ['PostgreSQL', 'SQLite3', 'Mongo DB'],
        'devops': ['Docker', 'GitHub Actions', 'Heroku', 'Netlify'],
        'tools': ['GIT', 'GitHub'],
        'misc': ['Firebase', 'GNU/Linux']
    }
    self.architecture = ['RESTful API', 'Serverless', 'microservices']

def __str__(self):
    return self.name


if __name__ == '__main__':
me = Emon()`;

export default function Portfolio() {
   return (
      <Paper
         radius="md"
         withBorder
         p="lg"
         sx={(theme) => ({
            backgroundColor:
               theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.white,
         })}
      >
         <Avatar src={""} size={120} radius={120} mx="auto" />
         <Text align="center" size="lg" weight={500} mt="md">
            Saifur Rahman Emon
         </Text>
         <Text align="center" color="dimmed" size="sm">
            email • saifemon@gmail.com
         </Text>

         <Center>
            <Button
               component={Anchor}
               target="_blank"
               href="https://drive.google.com/file/d/1u5ft8SnmEGLDXDtVKV0C3Nf6o_xJAG48/view?usp=sharing"
               variant="default"
               mt="md"
            >
               Resume
            </Button>
         </Center>
         <Group position="center" mt="lg" mx={50}>
            <ActionIcon
               size="lg"
               component={Anchor}
               target="_blank"
               href="https://github.com/Saifurrahmanemon"
            >
               <BrandGithub size={20} />
            </ActionIcon>
            <ActionIcon
               size="lg"
               component={Anchor}
               target="_blank"
               href="https://linkedin.com/in/saifurrahmanemon/"
            >
               <BrandLinkedin size={20} />
            </ActionIcon>
         </Group>
         <Prism mx={50} my={40} language="py">
            {code}
         </Prism>
      </Paper>
   );
}
