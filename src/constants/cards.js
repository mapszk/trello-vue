export const cardColors = ['#22c55e', '#3b82f6', '#d946ef', '#f97316']

export const defaultEmptyCard = ({ id, title, columnId, order }) => ({
  id,
  title,
  columnId,
  order,
  color: null,
  tags: []
})
