import { z } from 'zod'
import { readonly } from '@thinknimble/tn-models-fp'


export const baseModelShape = {
  id: z.string().uuid(),
  datetimeCreated: readonly(z.string().datetime().optional()),
  lastEdited: readonly(z.string().datetime().optional()),
}