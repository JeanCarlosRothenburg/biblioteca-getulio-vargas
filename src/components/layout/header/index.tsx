import Logo from "../../icons/logo";
import HeaderActions from "./header-actions";
import Nav from "./navbar";

export default function Header() {
    return (
      <header className=" px-7 py-3 flex justify-between items-center">
        <Logo useDescription={true}/>
        <Nav/>
        <HeaderActions/>
      </header>
    )
}