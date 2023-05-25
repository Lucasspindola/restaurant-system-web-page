import { ReactNode } from "react";
// import { ContactsContextProvider } from "../../Contexts/ContactsContext";
import { RestaurantContextProvider } from "../../Contexts/RestaurantContext";

interface iAllContextChildren {
  children: ReactNode;
}
export const AllContexts = ({ children }: iAllContextChildren) => {
  return (
    <RestaurantContextProvider>
      {/* <ContactsContextProvider>{children}</ContactsContextProvider> */}
      {children}
    </RestaurantContextProvider>
  );
};
