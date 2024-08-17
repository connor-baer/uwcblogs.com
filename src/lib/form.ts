import { isInputError } from 'astro:actions';

export function getFieldErrors<T extends { error: unknown }>(
  actionResult: T | undefined,
) {
  if (isInputError(actionResult?.error)) {
    return actionResult.error.fields;
  }
  return undefined;
}
