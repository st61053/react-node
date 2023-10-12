import { IItem } from "../types";
import { SETTINGS } from "../../settings/settings";

export const createItem = async () => {

    const response = await fetch(`${SETTINGS.serverPrefix}/create`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        name: "item"
      }),
  })
  
  const items = await response.json();
  
  if (response.ok) {
    return items as IItem[]
  }
  
  }