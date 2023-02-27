import { create } from "zustand";

interface FilterTagsState {
  filterTags: Array<string>;
  toggleFilterTag: (tag: string) => void;
  clearFilterTags: () => void;
}

const useFilterTagsStore = create<FilterTagsState>((set, get) => ({
  filterTags: [],
  toggleFilterTag: (tag) => {
    const filterTags = get().filterTags;
    let newFilterTags: Array<string> = [];
    newFilterTags = filterTags.includes(tag)
      ? filterTags.filter((filterTag) => filterTag !== tag)
      : [...filterTags, tag];
    set((state) => ({ filterTags: newFilterTags }));
  },
  clearFilterTags: () => set((state) => ({ filterTags: [] })),
}));

export default useFilterTagsStore;
