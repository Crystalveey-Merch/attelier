import { useContext } from "react";
import { AtUngDataContext } from "./SharedData";


export const useAtUngData = () => useContext(AtUngDataContext);
