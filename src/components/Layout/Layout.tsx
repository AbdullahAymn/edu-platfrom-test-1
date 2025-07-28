import NavBar from "../Navbar/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen " >
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}
