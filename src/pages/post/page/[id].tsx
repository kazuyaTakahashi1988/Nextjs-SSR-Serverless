import fetch from "node-fetch";
import { Props } from "../../../lib/props";
import Layout from "../../../components/layout";
import Articles from "../../../components/articles";

export const Page = ({ posts, total, id }: Props) => {
  
  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl={`Page-${id} | Post`}
      pageDes={`Page-${id}のディスクリプション`}
      pageUrl={`post/page/${id}`}
      // pageKey=""
      // pageThum=""
      pageType="post"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">new Post - {id}</h2>
      <Articles
        posts={posts}
        slug={`post`}
        total={total}
        currentNum={Number(id)}
        postDetail={undefined}
        id={""}
      />

    </Layout>
  );
};

export const getServerSideProps = async (context: { params: any }) => {

  /* -------------------------------------------------------
    ▽ 記事情報の取得  ▽
  ---------------------------------------------------------- */
  const now = new Date();
  const clear = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  const { id } = context.params;
  const res = await fetch(
    `${process.env.WP_HOST}/wp-json/wp/v2/posts?_embed&per_page=6&page=${id}&cache=${clear}`
  );
  const total = res.headers.get("x-wp-totalpages");
  const json = await res.json();
  return {
    props: {
      posts: json,
      total: total,
      id: id,
    },
  };
  
};

export default Page;
