// pages/server-sitemap.xml/index.tsx

import fetch from "node-fetch";
import { GetServerSideProps } from 'next'
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const now = new Date();
    const clear = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    let jsonAll: any[] = [];
    const fields: ISitemapField[] | { loc: string; lastmod: string; }[] = [];


    const res = await fetch(
        `${process.env.WP_HOST}/wp-json/wp/v2/posts?per_page=6&cache=${clear}`
    );
    const total = res.headers.get("x-wp-totalpages");

    for (let index = 1; index < Number(total) + 1; index++) {
        const res = await fetch(
            `${process.env.WP_HOST}/wp-json/wp/v2/posts?per_page=6&page=${index}&cache=${clear}`
        );
        const json: any = await res.json();
        await json.map((jsonPush: any) => {
            jsonAll.push(jsonPush);
        });
    }

    await jsonAll.map((jsonChild) => {
        fields.push({
            loc: `${process.env.SITE_HOST}/post/detail/${jsonChild.id}`,
            lastmod: new Date().toISOString(),
        });
    });


    const resCustom = await fetch(
    `   ${process.env.WP_HOST}/wp-json/wp/v2/custom?per_page=6&cache=${clear}`
    );
    const totalCustom = resCustom.headers.get("x-wp-totalpages");

    for (let index = 1; index < Number(totalCustom) + 1; index++) {
        const resCustom = await fetch(
            `${process.env.WP_HOST}/wp-json/wp/v2/custom?per_page=6&page=${index}&cache=${clear}`
        );
        const json: any = await resCustom.json();
        await json.map((jsonPush: any) => {
            jsonAll.push(jsonPush);
        });
    }

    await jsonAll.map((jsonChild) => {
        fields.push({
            loc: `${process.env.SITE_HOST}/custom/detail/${jsonChild.id}`,
            lastmod: new Date().toISOString(),
        });
    });

    return getServerSideSitemapLegacy(ctx, fields)
}


export default function Sitemap() {}