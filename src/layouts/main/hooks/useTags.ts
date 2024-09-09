import { RouteInfo, TagItem } from "../types";
import useRefState from "@/hooks/common/useRefState";

type CloseExecutor = Record<string, Fn>;

function useTags() {
  const router = useRouter();
  const route = useRoute();
  const [tagList, setTagList] = useRefState<TagItem[]>([]);

  const isActiveTag = (path: string) => path === route.fullPath || path === route.meta.activeMenu;

  const closeExecutor: CloseExecutor = {
    closeAll: () => void setTagList([]),
    closeOther: () => {
      const currentTag = tagList.value.filter((item) => item.path === route.fullPath);
      setTagList(currentTag);
    }
  };

  function addTagItem(route: RouteInfo) {
    const isExistTag = tagList.value.some((item) => item.path === route.fullPath);
    if (isExistTag) {
      return;
    }
    const newTag: TagItem = { name: route.name, title: route.meta?.title, path: route.fullPath };
    setTagList([...tagList.value, newTag]);
  }

  function closeTags(path: string) {
    redirectTag(path);
    const newTagList = tagList.value.filter((item) => item.path !== path);
    setTagList(newTagList);
  }

  function redirectTag(path: string) {
    const delIndex = tagList.value.findIndex((item) => item.path === path);
    if (isActiveTag(path)) {
      const redirectIndex = delIndex - 1 < 0 ? 1 : delIndex - 1;
      const redirectRoute = tagList.value[redirectIndex];
      router.push(redirectRoute?.path);
    }
  }

  function closeTagByCommand(command: string) {
    closeExecutor[command]();
  }

  watch(
    () => route,
    (currentRoute) => {
      if (currentRoute.meta.notTag) {
        return;
      }
      addTagItem(currentRoute);
    },
    { deep: true, immediate: true }
  );

  return { tagList, isActiveTag, closeTags, closeTagByCommand };
}

export default useTags;
