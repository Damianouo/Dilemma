import { contestValidation } from "../utils/validation";

export async function creationAction({ request }) {
  const data = await request.json();
  const validationResult = contestValidation(
    data.title,
    data.description,
    data.totalParticipants,
    data.entries.length,
  );
  if (!validationResult.successful) {
    return validationResult;
  }

  const response = await fetch("http://localhost:8080/contest", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return {
      successful: false,
      message: "Could not create new contest, please try again later.",
    };
  }
  const responseData = await response.json();
  return {
    successful: true,
    message: "Creation successful!",
    id: responseData.savedContest._id,
  };
}
