export const isNewJob = (created_at: string) => {
  if (!created_at) return false;
  const now = new Date();
  const createdAt = new Date(created_at);
  const diff = now.getTime() - createdAt.getTime();
  const diffDays = diff / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
};
