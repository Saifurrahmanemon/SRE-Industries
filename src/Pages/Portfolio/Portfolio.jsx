import {
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
            <Button variant="default" mt="md">
               Send message
            </Button>
         </Center>
         <Group position="left" mt="lg" mx={50}>
            <Text size="sm" weight={500}>
               Projects:
            </Text>
            <Anchor
               href="https://algorithmsvisualizers.netlify.app/"
               target="_blank"
               size="sm"
               color="gray"
            >
               Algorithm Visualizer
            </Anchor>
            <Anchor
               href="https://rider-s-warehouse.web.app/"
               target="_blank"
               size="sm"
               color="gray"
            >
               Rider's Warehouse
            </Anchor>
            <Anchor
               href="https://dream-job-consoltant.web.app/"
               target="_blank"
               size="sm"
               color="gray"
            >
               Career Coach
            </Anchor>
         </Group>
         <Prism mx={50} my={40} language="py">
            {code}
         </Prism>
      </Paper>
   );
}
