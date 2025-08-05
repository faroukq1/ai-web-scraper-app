import { z } from 'zod';

export const createWorkflowSchema = z.object({
  name: z
    .string()
    .min(6, { message: 'Name must be at least 6 character.' })
    .max(50, { message: 'Name length must be under 50.' }),
  description: z
    .string()
    .max(80, { message: 'Description length must be under 80' })
    .optional(),
});

export type createWorkflowSchemaType = z.infer<typeof createWorkflowSchema>;
