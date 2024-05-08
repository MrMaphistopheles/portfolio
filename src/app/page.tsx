import MyStack from "./_componenets/stack/MyStack";
import Project from "./_componenets/project/Project";
import Contacts from "./_componenets/Contacts/Contacts";
export default function HomePage() {
  return (
    <>
      <section
        className="flex h-screen w-full items-center justify-center"
        id="me"
      >
        <h1 className=" outline-text lage-text font-bold ">
          Hi, I am building web applications with Next.js
        </h1>
      </section>
      <MyStack />
      <Project />
      <Contacts />
    </>
  );
}
