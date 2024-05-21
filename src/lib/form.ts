import {
  isInputError,
  type ErrorInferenceObject,
  type SafeResult,
} from 'astro:actions';

export function getFieldErrors<T extends ErrorInferenceObject, K>(
  actionResult: SafeResult<T, K> | undefined,
) {
  if (actionResult?.error && isInputError(actionResult.error)) {
    return actionResult.error.fields;
  }
  return undefined;
}
