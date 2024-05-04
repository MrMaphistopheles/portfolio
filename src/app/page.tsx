import MyStack from "./_componenets/stack/MyStack";
import Project from "./_componenets/project/Project";
export default function HomePage() {
  return (
    <>
      <section
        className="flex h-screen w-full items-center justify-center"
        id="me"
      >
        <h1 className=" outline-text lage-text font-bold ">
          Hi, I am building a web application with Next.js
        </h1>
      </section>
      <MyStack />
      <Project />
    </>
  );
}
