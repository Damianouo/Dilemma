function isNotEmpty(str) {
  return str.trim() !== "";
}

function isEqual(value1, value2) {
  return value1 === value2;
}

function isYoutubeUrl(url) {
  return (
    url.includes("youtube.com/watch?v=") || url.includes("youtube.com/shorts/")
  );
}

export function creationValidation(
  title,
  description,
  totalEntries,
  entriesLength,
) {
  if (!isNotEmpty(title)) {
    return { successful: false, message: "Please enter title." };
  }
  if (!isNotEmpty(description)) {
    return { successful: false, message: "Please enter description." };
  }
  if (!isEqual(totalEntries, entriesLength)) {
    return {
      successful: false,
      message: `Total number of entries (${totalEntries}) does not match total number of videos uploaded (${entriesLength})`,
    };
  }
  return { successful: true };
}

export function uploadValidation(url) {
  if (!isNotEmpty(url)) {
    return { successful: false, message: "Please enter link." };
  }
  if (!isYoutubeUrl(url)) {
    return {
      successful: false,
      message: "Please enter valid link. See example below.",
    };
  }
  return { successful: true };
}

export function updateValidation(title, url) {
  if (!isNotEmpty(title)) {
    return { successful: false, message: "Please enter title." };
  }
  if (!isNotEmpty(url)) {
    return { successful: false, message: "Please enter link" };
  }
  if (!isYoutubeUrl(url)) {
    return {
      successful: false,
      message: "Please enter valid link. See example below.",
    };
  }
  return { successful: true };
}
