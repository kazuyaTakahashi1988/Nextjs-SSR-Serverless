import fetch from "node-fetch";
import { Props } from "../../../lib/props";
import Layout from "../../../components/layout";
import Articles from "../../../components/articles";

export const customPage = ({ posts, total, id }: Props) => {
  
  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl={`customPage-${id} | customPost`}
      pageDes={`customPage-${id}のディスクリプション`}
      pageUrl={`custom/page/${id}`}
      // pageKey=""
      // pageThum=""
      pageType="custom"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">new customPost - {id}</h2>
      <Articles
        posts={posts}
        slug={`custom`}
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
    `${process.env.WP_HOST}/wp-json/wp/v2/custom?_embed&per_page=6&page=${id}&cache=${clear}`
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

export default customPage;
