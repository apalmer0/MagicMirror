import { FormattedTriviaStat, TriviaStat } from '../../../../types'

export const triviaStat = ({
  today,
  all_time,
}: TriviaStat): FormattedTriviaStat => ({ today, allTime: all_time })
