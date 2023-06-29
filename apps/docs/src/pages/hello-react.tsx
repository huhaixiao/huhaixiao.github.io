import React from "react";
import Layout from "@theme/Layout";
import DocPageLayout from "@theme/DocPage/Layout";
import BackToTopButton from '@theme/BackToTopButton';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      {/* <DocPageLayout> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "20px",
          }}
        >
          <p>
            Edit <code>pages/helloReact.js</code> and save to reload.
          </p>
        </div>
        <BackToTopButton />
      {/* </DocPageLayout> */}
    </Layout>
  );
}
