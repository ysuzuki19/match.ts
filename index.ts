export type MatchStatus = string | number;

export interface MatchCallbacks<T> {
  [key: MatchStatus]: () => T;
  _: () => T;
}

export interface MatchRewrites {
  [key: string]: MatchStatus;
}

export default function match<T>(
  status: MatchStatus,
  callbacks: MatchCallbacks<T>,
  rewrites?: MatchRewrites
) {
  if (rewrites) {
    const operation = rewrites[status];
    if (operation) {
      return (callbacks[rewrites[status]] || callbacks._)();
    }
    return callbacks._();
  } else {
    return (callbacks[status] || callbacks._)();
  }
}
