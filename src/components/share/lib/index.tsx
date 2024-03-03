import { FaArrowRight } from "react-icons/fa";

export function capitalizeSentences(data: string | any) {
  const sentences = data?.split(". ");
  const capitalizedSentences = sentences?.map((sentence: string) => {
    return sentence?.charAt(0)?.toUpperCase() + sentence?.slice(1);
  });
  return capitalizedSentences?.join(". ");
}

export const createPagination = (items: any, limed = 8, offset = 0) => {
  let arr: any = [];
  items.forEach((element: any, index: number) => {
    if (index >= offset && index < limed + offset) {
      arr.push(element);
    }
  });
  return arr;
};
