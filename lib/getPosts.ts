import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  return [
    {
      id: "1",
      title: "1번 타이틀",
      excerpt: "1번 내용",
      content: "전체 글 내용입니다...",
    },
    {
      id: "2",
      title: "2변 타이틀",
      excerpt: "2번 내용",
      content: "전체 글 내용입니다...",
    },
  ];
}