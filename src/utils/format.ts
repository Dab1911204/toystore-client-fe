export function getFirstImageFromString(image?: string | null): string | null {
  if (!image) return null; // xử lý undefined hoặc null

  try {
    const parsed = JSON.parse(image);

    if (Array.isArray(parsed) && typeof parsed[0] === "string") {
      return parsed[0];
    }

    return null;
  } catch (error) {
    console.error("Invalid JSON in image:", error);
    return null;
  }
}