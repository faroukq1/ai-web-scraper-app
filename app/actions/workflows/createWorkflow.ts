'use server';

import { z } from 'zod';
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from '@/schema/workflow';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import { WorkflowStatus } from '@/types/workflow';
import { redirect } from 'next/navigation';
export async function createWorkflow(form: z.infer<createWorkflowSchemaType>) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) throw new Error('invalid form data.');

  const { userId } = await auth();

  if (!userId) throw new Error('unathenticated.');

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: 'TODO',
      ...data,
    },
  });

  if (!result) throw new Error('Failed to create workflow.');

  redirect(`/workflow/editor/${result.id}`);
}
