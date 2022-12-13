import { Link } from "react-router-dom";
import {
  Estilo,
  A,
  LinkContainer,
  DivLogo,
  DivPadre,
  DivNav,
} from "../styledComponents/NavStyled";
import NameLogo from "../svg/nameLogo";
import Logo from "../svg/logo";

function Nav() {
  return (
    <>
      <DivNav>
        <Link to={"/home"}>
          <DivPadre>
            <DivLogo>
              <Logo />
              <NameLogo />
            </DivLogo>
          </DivPadre>
        </Link>
        <Estilo>
          <A>
            <LinkContainer to={"/home"}>Countries</LinkContainer>
          </A>
          <A>
            <LinkContainer to={"/actividades"}>
              Tourist activities
            </LinkContainer>
          </A>
        </Estilo>
      </DivNav>
    </>
  );
}

export default Nav;
