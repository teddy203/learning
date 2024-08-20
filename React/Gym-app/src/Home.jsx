

import NavBar from "./SideNav";
import Plan from "./Plan";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          
          <Plan />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;