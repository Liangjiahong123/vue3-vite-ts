import type { Ref, UnwrapRef, WatchCallback, WatchOptions } from "vue";

interface useRefStateOptions<T> {
  effect?: WatchCallback<UnwrapRef<T>, UnwrapRef<T> | undefined>;
  effectOptions?: WatchOptions;
}
type UseRefStateReturn<T> = [Ref<T>, (payload: UnwrapRef<T>) => void, () => void];

function useRefState<T>(
  initState: T,
  { effect, effectOptions }: useRefStateOptions<T> = {}
): UseRefStateReturn<T> {
  const state = ref<T>(unref(initState));

  function setState(payload: UnwrapRef<T>) {
    state.value = payload;
  }

  function clearState() {
    state.value = unref(initState);
  }

  if (effect) {
    watch(() => state.value, effect, effectOptions);
  }

  return [state as Ref<T>, setState, clearState];
}

export default useRefState;
