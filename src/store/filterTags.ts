import { create } from "zustand";

interface FilterTagsState {
  filterTags: Array<string>;
  addFilterTag: (tag: string) => void;
  removeFilterTag: (tag: string) => void;
  clearFilterTags: () => void;
}

const useFilterTagsStore = create<FilterTagsState>((set, get) => ({
  filterTags: [],
  addFilterTag: (tag) =>
    set((state) =>
      state.filterTags.includes(tag)
        ? { filterTags: state.filterTags }
        : { filterTags: [...state.filterTags, tag] }
    ),
  removeFilterTag: (tag) =>
    set((state) => ({
      filterTags: state.filterTags.filter((filterTag) => filterTag !== tag),
    })),
  clearFilterTags: () => set((state) => ({ filterTags: [] })),
}));

export default useFilterTagsStore;
