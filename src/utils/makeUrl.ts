import { BASE_URL } from "../constants/urls";

const makeUrl = (urlPath: string, values: Record<string, string>): string => {
  const path = Object.entries(values).reduce((acc, [key, value]) => {
    return acc.replace(`{${key}}`, value);
  }, urlPath);

  return `${BASE_URL}${path}`;
};

export default makeUrl;
