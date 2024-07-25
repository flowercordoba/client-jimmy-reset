import { useIntl } from "react-intl";
import { MenuItem } from "./MenuItem";

export function MenuInner() {
  const intl = useIntl();
  return (
    <>
      <MenuItem
        title={intl.formatMessage({ id: "Inicio" })}
        to="/dashboard"
      />
      <MenuItem title="Videos" to="/Videos" />
      <MenuItem title="Grupos" to="/Grupos" />
      <MenuItem title="Portales" to="/Portales" />
    
    </>
  );
}
