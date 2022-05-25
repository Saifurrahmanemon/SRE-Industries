import { Container } from "@mantine/core";
import BlogItem from "./BlogItem";

const BlogData = [
   {
      title: "lorem",
      description:
         " fhiodshfiohsfiohihfihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
   },
   {
      title: "lorem",
      description:
         " fhiodshfiohsfiohihfihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
   },
];
const Blog = () => {
   return (
      <Container>
         {BlogData.map(({ title, description }) => (
            <BlogItem
               key={title}
               title={title}
               description={description}
            ></BlogItem>
         ))}
      </Container>
   );
};

export default Blog;
