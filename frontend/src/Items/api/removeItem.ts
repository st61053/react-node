import { IItem } from "../types";
import { SETTINGS } from "../../settings/settings";

export const removeItem = async (id: string) => {

    const response = await fetch(`${SETTINGS.serverPrefix}/remove`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        id
      }),
  })
  
  const items = await response.json();
  
  if (response.ok) {
    return items as IItem[]
  }
  
  }