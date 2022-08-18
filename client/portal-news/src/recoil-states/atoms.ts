import { atom } from "recoil";
import { NewsPosts } from "../App";

export const postsState = atom({
    key: 'postsState', // unique ID (with respect to other atoms/selectors)
    default: [] as NewsPosts[], // default value (aka initial value)
});