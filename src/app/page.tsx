import MyStack from "./_componenets/stack/MyStack";
export default function HomePage() {
  return (
    <>
      <section
        className="flex h-screen w-full items-center justify-center"
        id="me"
      >
        <h1 className=" outline-text lage-text font-bold ">
          Hi, i build web application with react and next.js
        </h1>
      </section>
      <MyStack />
    </>
  );
}
