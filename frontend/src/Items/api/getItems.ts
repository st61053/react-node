import { IItem } from "../types";
import { SETTINGS } from "../../settings/settings";

export const getItems = async () => {

    const response = await fetch(`${SETTINGS.serverPrefix}/get`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json; charset=UTF-8'
      },
  })
  
  const items = await response.json();
  
  if (response.ok) {
    return items as IItem[]
  }
}