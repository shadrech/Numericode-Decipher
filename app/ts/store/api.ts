const API_URL: string = process.env.API_URL;

export const decipherCode = async (code: string): Promise<string> => {
  const url: string = `${API_URL}/numericode`;

  const response: Response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code
    })
  });
  const text: string = await response.json();
  return text;
}