type Result<T> = [T, undefined] | [undefined, Error];

export const catchError = <T>(promise: Promise<T>): Promise<Result<T>> => promise
  .then((res): Result<T> => [res, undefined])
  .catch((error): Result<T> => [undefined, error]);
