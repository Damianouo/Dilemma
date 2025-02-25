function isNotEmpty(str) {
  return str.trim() !== '';
}

function isEqual(value1, value2) {
  return value1 === value2;
}

export function contestValidation(title, description, totalEntries, entriesLength) {
  const details = [];
  if (!isNotEmpty(title)) {
    details.push({ field: 'title', message: 'Title must not be empty.' });
  }
  if (!isNotEmpty(description)) {
    details.push({ field: 'description', message: 'Description must not be empty.' });
  }
  if (!isEqual(totalEntries, entriesLength)) {
    details.push({
      field: 'totalEntries',
      message: `Total number of entries (${totalEntries}) does not match total number of videos uploaded (${entriesLength})`,
    });
  }
  return details.length === 0
    ? { successful: true }
    : { successful: false, message: 'Validation failed.', details };
}
