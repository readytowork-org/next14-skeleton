export const getRootPath = (path: string) => {
  const normalizedPath =
    path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  const segments = normalizedPath.split("/");
  return segments.length > 1 ? `/${segments[1]}` : normalizedPath;
};
