import { Container } from "@mantine/core";
import BlogItem from "./BlogItem";

const BlogData = [
   {
      title: "How will you improve the performance of a React Application?",
      description:
         " React is modern javascript library. In order to improve react performance we need to ensure re-rendering a component only happens when necessary. Because in react a state update in a parent component re-renders the parent and its child components.",
   },
   {
      title: "What are the different ways to manage a state in a React application?",
      description:
         " Primarily, React provides two ways to manage state in a React application. One is using the state hook and the other is using the React.Component class. The state hook is a function that returns an object that contains the state of the component. The React.Component class is a class that extends the React.Component class. In both way There are four types of state one need to properly manage in your React apps. They are: Local state, global state, server state and url state",
   },
   {
      title: "How does prototypical inheritance work?",
      description:
         " Javascript is not a object oriented programming language.  n javascript Prototypal Inheritance  used to add methods and properties in objects. By this method  an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.",
   },
   {
      title: "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts",
      description:
         " Because Every time we use setState() it enqueues changes to the component state and inform  React that the component and its children need to be re-rendered with the updated state. This is the method we use to update the UI in response to event handlers and server responses.",
   },
   {
      title: "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
      description:
         " products.map((product) => { if (product.name.toLowerCase().includes(search.toLowerCase())) { return product } })",
   },
   {
      title: "What is a unit test? Why should write unit tests?",
      description:
         " Unit test is process of testing smallest parts of the applications (called units). Software Developers test the units individually and independently scrutinized for proper operation.Popular Unit testing library for Javascript is Jest. Jest is a JavaScript testing framework that is used to test JavaScript code.",
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
